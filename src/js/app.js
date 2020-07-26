import '../css/main.scss';
import Vue from 'vue'
import App from '../components/app.vue'
import { store } from './store.js';

export const EventBus = new Vue();

new Vue({
    el: '#app',
    store: store,
    render: h => h(App),
    components: { App },
    template: '<App/>'
})