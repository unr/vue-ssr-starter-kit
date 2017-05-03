module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	extends: 'airbnb-base',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			'js': 'never',
			'vue': 'never'
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-mixed-spaces-and-tabs': 2,
		'no-tabs': 0,
		'no-trailing-spaces': 2,
		'no-param-reassign': 0,
		'space-before-function-paren': 1,
		'indent': ['error', 'tab'],
		'no-shadow': ['error', { "allow": ["state"] }],
		'no-unused-expressions': 0,
		'no-console': 0,
		'new-cap': 0,
		'spaced-comment': 0,
		'no-underscore-dangle': 0
	},
	'globals': {
		'Bugsnag': true
	},
}
