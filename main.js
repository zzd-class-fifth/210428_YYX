import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

import request from '@/static/js/request.js';
Vue.prototype.request = request;

App.mpType = 'app'

const app = new Vue({
	...App,
	request
})
app.$mount()
