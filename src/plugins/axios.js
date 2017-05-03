/**
 * Vue Axios Component
 * Pass in config object to Vue.use(VueAxios, config)
 * config.property will adjust the property used with axios.
 **/
import Axios from 'axios';

const VueAxios = {
	install(Vue, config) {
		const property = config.property || '$http';
		const axiosInstance = Axios.create(config);

		// TODO Figure out how to actually do this in plugin style (neatly).
		// some sort of loadFromCookie here
		// axiosInstance.defaults.headers.common.Authorization = `Bearer ${Vue.ls.get('id_token')}`;
		// axiosInstance.defaults.headers.common['Access-Token'] = Vue.ls.get('auth_token');

		// prevent duplicate instance on SSR
		if (!Vue.prototype[property]) {
			Object.defineProperty(Vue.prototype, property, { value: axiosInstance });
		}
	},
};

export default VueAxios;
