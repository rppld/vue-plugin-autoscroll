import Vue from "vue"
import AutoScroll from "vue-plugin-autoscroll"
import App from "./App.vue"

Vue.use(AutoScroll)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
})
/* eslint-enable */
