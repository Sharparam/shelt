<script context="module" lang="ts">
  import { keybaseProfile as keybase, profiles } from '$lib/social/profiles';

  export const prerender = true;
</script>

<svelte:head>
  <title>Contact me</title>
</svelte:head>

<h1>Contact me</h1>

<p>
  You can find a variety of my social profiles in the footer, and can use any of
  them to contact me.
</p>
<p>
  If you&rsquo;d like to send encrypted email to me, you can do so using my PGP
  key. You can find my PGP public key on my <a href={keybase.url}
    >Keybase profile</a
  >, or on your favourite keyserver (I upload to the major ones, and from there
  they should propagate further).
</p>
<p>My key details:</p>
<dl class="pgp-info">
  <dt>Size and type</dt>
  <dd>4096 bits RSA</dd>
  <dt>Short ID</dt>
  <dd><kbd>7B00AD04</kbd></dd>
  <dt>Long ID</dt>
  <dd><kbd>C58C41E27B00AD04</kbd></dd>
  <dt>Fingerprint</dt>
  <dd><kbd>A6B6 5DCE 2EB7 BEAE 9600 74E6 C58C 41E2 7B00 AD04</kbd></dd>
  <dt>Created</dt>
  <dd><time datetime="2020-02-13">2020-02-13</time></dd>
  <dt>UIDs</dt>
  <dd>
    <ul>
      <li class="primary">
        Adam Hellberg (Personal) &lt;<a href="mailto:sharparam@sharparam.com"
          >sharparam@sharparam.com</a
        >&gt;
      </li>
      <li>
        Adam Hellberg (Personal) &lt;<a
          href="mailto:adam.hellberg@sharparam.com"
          >adam.hellberg@sharparam.com</a
        >&gt;
      </li>
      <li>
        Adam Hellberg (Work) &lt;<a href="mailto:adam.hellberg@ninetech.com"
          >adam.hellberg@ninetech.com</a
        >&gt;
      </li>
    </ul>
  </dd>
</dl>
<p>
  My domain also supports <a href="https://wiki.gnupg.org/WKD">WKD</a> if you&rsquo;d
  like to make use of that for discovering my keys.
</p>
<p>Full list of social profiles:</p>
<ul>
  {#each profiles as profile}
    <li><a href={profile.url}>{profile.name}</a></li>
  {/each}
</ul>

<style lang="scss">
  .pgp-info {
    text-align: left;

    dt {
      font-weight: bold;
    }

    .primary {
      font-weight: bold;
    }
  }
</style>
