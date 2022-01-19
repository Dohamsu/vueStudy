import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

Vue.prototype.$http =  axios

Vue.config.productionTip = false

window.Kakao.init('d030def4b4265b2b019d253ff0e0dcc4');

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})