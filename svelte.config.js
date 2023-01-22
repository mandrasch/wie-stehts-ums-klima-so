import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// https://stackoverflow.com/a/72733222
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		// This was removed? 
		/*prerender: {
			default: true,
		},*/
		// This was removed? 
		// trailingSlash: 'always',
		paths: {
			base: '/wie-steht-es-um-das-klima-so'
		}
	}
};

export default config;
