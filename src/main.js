// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
// supports both of Vue 1.0 and Vue 2.0
import VueLazyload from 'vue-lazyload'
// css? Webpack 将一切看成资源
// css 打包成js
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(VueLazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
