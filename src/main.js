// main.js or App.vue
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted () {
    AOS.init({
      duration: 1200 // Duration of animations
    })
  }
}).$mount('#app')
