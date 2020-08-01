import '../src/assets/css/main.scss';
import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
