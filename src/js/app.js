import '../css/main.scss';
import Vue from 'vue'
import App from '../components/app.vue'

new Vue({
    el: '#app',
    render: h => h(App),
    components: { App },
    template: '<App/>'
})