import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const defaultState = {
	topics: [],
	count: 0,
};

// if in browser, use pre-fetched state injected by SSR
const inBrowser = typeof window !== 'undefined';
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState;

const mutations = {
	TOPICS_LIST: (state, topics) => {
		state.topics = topics;
	},

	INCREMENT: (state) => {
		state.count += 1;
	},

	DECREMENT: (state) => {
		state.count -= 1;
	},
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
});
