import request from 'axios';

request.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';

// eslint-disable-next-line
export const getTopics = (commit, state) => {
	return request.get('posts').then((response) => {
		if (response.statusText === 'OK') {
			commit('TOPICS_LIST', response.data);
		}
	}).catch((error) => {
		console.log(error);
		console.log(state); // so it does something?
	});
};

export const increment = ({ commit }) => commit('INCREMENT');
export const decrement = ({ commit }) => commit('DECREMENT');
