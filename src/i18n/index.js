import Vue from 'vue';
import VueI18n from 'vue-i18n';

// actual languages to import
import English from './en';

Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'en',
	backupLocale: 'en',
	messages: {
		en: English,
	},
});

export { i18n as default };
