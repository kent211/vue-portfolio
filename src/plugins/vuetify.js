import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa' // Use FontAwesome for icons
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        background: '#111111'
      }
    }
  }
})
