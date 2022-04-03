<script context="module" lang="ts">
  import { parseISO } from 'date-fns';

  export const load = async ({ fetch }) => {
    const response = await fetch('/blog/__data.json');
    const parsed = await response.json();
    console.log(parsed);
    const filtered = parsed.posts.filter((post) => {
      const date = parseISO(post.date);
      return date.getFullYear() === 2022;
    });

    return {
      props: {
        posts: filtered
      }
    };
  };
</script>

<script lang="ts">
  import PostList from '$lib/components/blog/PostList.svelte';

  export let posts;
</script>

<h1>Blog (2022 archive)</h1>

<PostList {posts} />
