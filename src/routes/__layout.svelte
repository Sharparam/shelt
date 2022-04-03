<script lang="ts">
  import Footer from '$lib/footer/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import '../app.scss';
  import 'prism-themes/themes/prism-a11y-dark.css';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
