<script lang="ts">
  import PostList from '$lib/components/blog/PostList.svelte';

  export let posts;
</script>

<h1>Latest posts</h1>

<PostList posts={posts.slice(0, 10)} />

<h2>Archives</h2>
<ul>
  <li><a href="/blog/2022">2022</a></li>
  <li><a href="/blog/2020">2020</a></li>
</ul>
