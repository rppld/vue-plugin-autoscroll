<template>
  <div class="autoscroll-container">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    loop: {
      default: true,
      type: Boolean
    },
    loopUp: {
      default: false,
      type: Boolean
    }
  },

  data () {
    return {
      scrollDown: true,
      firstChild: null,
      lastChild: null,
      children: null,
      clones: [],
      touchStart: null,
      scrollUpAF: null,
      scrollDownAF: null
    }
  },

  mounted () {
    this.children = Array.from(this.$el.childNodes)
    this.firstChild = this.children[0]
    this.lastChild = this.children[this.children.length - 1]

    if (this.loop) {
      this.cloneChildNodes(this.$el)
    }

    if (!this.isTouchDevice()) {
      this.startAutoScroll()

      const wheel =
        "onwheel" in document.createElement("div")
          ? "wheel" // Modern browsers support "wheel"
          : document.onmousewheel !== undefined
            ? "mousewheel" // Webkit and IE support at least "mousewheel"
            : "DOMMouseScroll" // let's assume that remaining browsers are older Firefox

      window.addEventListener(wheel, e => {
        this.stopAutoScroll()

        if (e.deltaY < 0) {
          this.scrollDown = false
          this.startAutoScroll()
        } else {
          this.scrollDown = true
          this.startAutoScroll()
        }
      })

      window.addEventListener("touchstart", e => {
        this.touchStart = e.touches[0].clientY
      })

      window.addEventListener("touchend", e => {
        const touchEnd = e.changedTouches[0].clientY
        this.stopAutoScroll()

        if (this.touchStart < touchEnd - 5) {
          this.scrollDown = false
          this.startAutoScroll()
        } else if (this.touchStart > touchEnd + 5) {
          this.scrollDown = true
          this.startAutoScroll()
        }
      })
    }

    window.addEventListener("scroll", this.handleScroll)
  },

  methods: {
    stopAutoScroll () {
      window.cancelAnimationFrame(this.scrollUpAF)
      window.cancelAnimationFrame(this.scrollDownAF)
    },
    autoScrollUp () {
      window.scrollBy(0, -1)
      this.scrollUpAF = window.requestAnimationFrame(this.autoScrollUp)
    },
    isTouchDevice () {
      return (
        "ontouchstart" in window ||
        navigator.MaxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      )
    },
    autoScrollDown () {
      window.scrollBy(0, 1)
      this.scrollDownAF = window.requestAnimationFrame(this.autoScrollDown)
    },
    startAutoScroll () {
      this.stopAutoScroll()
      this.scrollDown ? this.autoScrollDown() : this.autoScrollUp()
    },
    isFullyAboveViewport (el) {
      const rect = el.getBoundingClientRect()
      return rect.bottom <= 0
    },
    isAboveViewport (el) {
      const rect = el.getBoundingClientRect()
      return !rect.top <= 0
    },
    resetScrollDown () {
      if (this.isFullyAboveViewport(this.lastChild)) {
        window.scrollTo(0, 0)
      }
    },
    resetScrollUp () {
      if (this.loopUp) {
        if (!this.isAboveViewport(this.firstChild)) {
          this.clones[0].scrollIntoView()
        }
      }
    },
    resetScrollPos () {
      this.scrollDown ? this.resetScrollDown() : this.resetScrollUp()
    },
    handleScroll () {
      if (this.loop) {
        requestAnimationFrame(this.resetScrollPos)
      }
    },
    cloneChildNodes (parent) {
      this.children.map(child => {
        const clone = child.cloneNode(true)
        parent.appendChild(clone)
        this.clones.push(clone)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
