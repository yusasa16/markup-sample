import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

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
	// TypeScript files
	...tseslint.configs.recommended,
	// Astro files
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
];
