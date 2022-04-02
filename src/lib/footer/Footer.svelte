<script context="module" lang="ts">
  import {
    githubProfile,
    twitterProfile,
    youtubeProfile,
    keybaseProfile,
    emailProfile
  } from '$lib/social/profiles';

  const profiles = [
    githubProfile,
    twitterProfile,
    youtubeProfile,
    keybaseProfile,
    emailProfile
  ];
</script>

<footer>
  <p>
    Copyright &copy; 2022 by <a href="https://sharparam.com">Adam Hellberg</a>.
  </p>
  <p>
    Content is licensed under a <a
      href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC-BY-NC-ND</a
    > license.
  </p>
  <ul class="socials">
    {#each profiles as profile}
      <li><a href={profile.url}>{profile.name}</a></li>
    {/each}
  </ul>
</footer>

<style lang="scss">
  footer {
    margin: 3rem auto 5rem;
    text-align: center;

    > * {
      margin: 0.5rem auto 0;
    }
  }

  ul.socials {
    list-style: none;
    padding: 0;

    > li {
      display: inline-block;

      &:not(:last-child)::after {
        content: ' | ';
        white-space: pre;
      }
    }
  }
</style>
