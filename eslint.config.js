import eslintPluginAstro from "eslint-plugin-astro";

export default [
	{
		ignores: [
			"dist/**",
			".astro/**",
			"node_modules/**",
			"*.min.js",
			"*.min.css",
		],
	},
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
];
