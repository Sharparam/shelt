<script lang="ts">
  import TimeAgo from '$lib/components/TimeAgo.svelte';
  import { parseISO } from 'date-fns';

  export let title;
  export let date;

  const parsedDate = parseISO(date);
</script>

<article>
  <h1>{title}</h1>

  <p class="meta">Published <TimeAgo date={parsedDate} /></p>

  <slot />
</article>

<style lang="scss">
  .meta {
    font-size: 0.9rem;
  }

  article :global(p > code) {
    color: hotpink;
    background: #2b2b2b;
    border-radius: 0.3em;
    padding: 0.1rem;
  }
</style>
