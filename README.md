# vue-plugin-autoscroll

## Installation

`npm install --save vue-plugin-autoscroll`

## Usage

Import the package and activate the plugin where you initialise your Vue instance

```javascript
import Vue from "vue"
import AutoScroll from "vue-plugin-autoscroll"

Vue.use(AutoScroll)

new Vue({
  el: "#app"
})
```

In your markup, make sure to wrap your entire page-content

```html
<auto-scroll :loop="true" :loop-up="false">
  <section>
    1
  </section>
  <section>
    2
  </section>
  <section>
    3
  </section>
</auto-scroll>
```

## Optional Props

| Prop          | Type          | Default       |
| ------------- |:-------------:|:-------------:|
| loop          | Boolean       | true          |
| loopUp        | Boolean       | false         |

## License

MIT