import Vue from 'vue';
import { sync } from 'vuex-router-sync';

// Vue add-ons
import VueAxios from './plugins/axios';
import VueLodash from './plugins/lodash';

// assembling our app
import App from './App.vue';
import store from './vuex/store';
import router from './router';
import i18n from './i18n/index';

// Sync vuex/router together
sync(store, router);


// install plugins
Vue.use(VueLodash);

const axiosConfig = {
	url: '/api',
	baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
	timeout: 30000,
};
Vue.use(VueAxios, axiosConfig);

// Configure based vue
Vue.config.debug = true;

const app = new Vue({
	router,
	store,
	i18n,
	...App,
});

export { app, router, store };
