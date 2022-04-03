<script lang="ts">
  import TimeAgo from '../TimeAgo.svelte';

  export let post;
  const date = post.date;
</script>

<li>
  <h2><a sveltekit:prefetch href={post.path}>{post.meta.title}</a></h2>
  <p class="meta">Published <TimeAgo {date} /></p>
  {#if post.meta.blurb}
    <p>{post.meta.blurb}</p>
  {/if}
</li>

<style lang="scss">
  .meta {
    font-size: 0.9rem;
  }
</style>
