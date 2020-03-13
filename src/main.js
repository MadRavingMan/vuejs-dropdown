import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import PrettyCheckbox from 'pretty-checkbox-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import 'pretty-checkbox-vue/dist/pretty-checkbox-vue.min.js'

import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(PrettyCheckbox);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
