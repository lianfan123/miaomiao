import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.prototype.axios = axios;
Vue.use(MintUI)
Vue.config.productionTip = false

Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
