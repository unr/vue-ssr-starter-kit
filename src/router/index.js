import Vue from 'vue';
import VueRouter from 'vue-router';

// our routing components
import Home from './Home.vue';
import About from './About.vue';
import Counter from './Counter.vue';
import Topics from './Topics.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Home },
		{ path: '/Topics', component: Topics },
		{ path: '/Counter', component: Counter },
		{ path: '/About', component: About },
	],
});

export default router;
