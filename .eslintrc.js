module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: ['justinneff-ts', 'plugin:react/recommended'],
	overrides: [
		{
			files: ['**/*.tsx'],
			rules: {
				'react/prop-types': 'off',
			},
		},
	],
	plugins: ['react', 'react-hooks'],
	rules: {
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
