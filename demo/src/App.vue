<template>
  <auto-scroll>
    <section>1</section>
    <section>2</section>
    <section>3</section>
    <section>4</section>
    <section>5</section>
  </auto-scroll>
</template>

<script>
export default {
  name: "App",
  data () {
    return {}
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
    "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
    sans-serif;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  &:nth-child(2) {
    color: #fff;
    background-color: #cdecff;
  }
  &:nth-child(3) {
    color: #fff;
    background-color: #76c4e2;
  }
  &:nth-child(4) {
    color: #fff;
    background-color: #408bc9;
  }
  &:nth-child(5) {
    color: #fff;
    background-color: #00449e;
  }
}
</style>
