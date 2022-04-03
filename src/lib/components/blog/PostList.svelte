<script lang="ts">
  import PostListItem from './PostListItem.svelte';

  export let posts;
</script>

{#if posts === undefined || posts.length === 0}
  <p>No posts found.</p>
{:else}
  <ul>
    {#each posts as post}
      <PostListItem {post} />
    {/each}
  </ul>
{/if}
