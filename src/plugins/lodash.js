import _ from 'lodash';

const VueLodash = {
	install(Vue) {
		if (!Vue.prototype._) {
			// prevent duplicate instance on SSR
			Object.defineProperty(Vue.prototype, '_', { value: _ });
		}
	},
};

export default VueLodash;
