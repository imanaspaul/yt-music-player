import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueVideoWrapper from 'vue-video-wrapper'
import './registerServiceWorker'

Vue.use(VueVideoWrapper)
new Vue({
  render: h => h(App),
}).$mount('#app')
