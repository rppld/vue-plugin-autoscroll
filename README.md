# vue-plugin-autoscroll

[View Demo](https://cdn.rawgit.com/rppld/vue-plugin-autoscroll/df1ae8bc/demo/index.html)

## Installation

`npm install --save vue-plugin-autoscroll`

## Usage

Import the package and activate the plugin

```javascript
import Vue from "vue"
import AutoScroll from "vue-plugin-autoscroll"

Vue.use(AutoScroll)

new Vue({
  el: "#app"
})
```

In your markup, make sure to wrap your entire page content

```html
<div id="app">
  <auto-scroll :loop="true" :loop-up="false" :slow="false">
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
</div>
```

## Removing The Scrollbar

The following works for WebKit browsers

```css
::-webkit-scrollbar { 
  display: none; 
}
```

## Optional Props

| Prop          | Type          | Default       |
| ------------- |:-------------:|:-------------:|
| loop          | Boolean       | true          |
| loopUp        | Boolean       | false         |
| slow          | Boolean       | false         |

## License

MIT