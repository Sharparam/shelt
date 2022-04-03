<script lang="ts">
  import { page } from '$app/stores';
</script>

<header>
  <nav>
    <ul>
      <li>
        <a
          sveltekit:prefetch
          class:current={$page.url.pathname === '/'}
          href="/">Home</a
        >
      </li>
      <li>
        <a
          sveltekit:prefetch
          class:current={$page.url.pathname.match(/^\/blog/)}
          href="/blog">Blog</a
        >
      </li>
      <li>
        <a
          sveltekit:prefetch
          class:current={$page.url.pathname.match(/\/about\/?/)}
          href="/about">About</a
        >
      </li>
      <li>
        <a
          sveltekit:prefetch
          class:current={$page.url.pathname.match(/\/contact\/?/)}
          href="/contact">Contact</a
        >
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  nav {
    ul {
      list-style: none;
      text-align: center;
      padding: 0;

      li {
        display: inline-block;

        a {
          &.current {
            font-weight: bold;
          }

          &::before {
            content: '« ';
            white-space: pre;
          }

          &::after {
            content: ' »';
            white-space: pre;
          }

          &.current {
            &::before {
              content: '» ';
              white-space: pre;
            }

            &::after {
              content: ' «';
              white-space: pre;
            }
          }
        }
      }
    }
  }
</style>
