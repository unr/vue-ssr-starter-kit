import Vue from 'vue';
import { sync } from 'vuex-router-sync';

// Vue add-ons
import VueLodash from './plugins/lodash';

// assembling our app
import App from './App.vue';
import store from './vuex/store';
import router from './router';

// Sync vuex/router together
sync(store, router);

// install plugins
Vue.use(VueLodash);

// Configure based vue
Vue.config.debug = true;

const app = new Vue({
	router,
	store,
	...App,
});

export { app, router, store };
