import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.svx', '.md'],
      remarkPlugins: [remarkGfm, remarkEmoji],
      layout: {
        blog: 'src/routes/blog/_post.svelte'
      }
    })
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    trailingSlash: 'never'
  }
};

export default config;
