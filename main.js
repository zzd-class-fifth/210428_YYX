import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

import request from '@/static/js/request.js';
Vue.prototype.request = request;

import resources from "@/static/js/resources.js";
Vue.prototype.getImgUrl = resources.getImgUrl;

App.mpType = 'app'

const app = new Vue({
	...App,
	request
})
app.$mount()

Vue.filter('formatNumber', (num) => {
	switch (true) {
		case num >= 10000000:
			num = Math.round(num / 1000000) / 10 + 'KW';
			break;
		case num >= 10000:
			num = Math.round(num / 1000) / 10 + 'W';
			break;
		case num >= 1000:
			num = Math.round(num / 100) / 10 + 'K';
			break;
	}
	return num;
})
