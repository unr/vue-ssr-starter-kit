import _ from 'lodash';

const VueLodash = {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '_', { value: _ });
	},
};

export default VueLodash;
