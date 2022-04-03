<script context="module" lang="ts">
  export const load = ({ error, status }) => {
    let message = 'Something went wrong :(';
    let details: string | undefined = undefined;
    switch (status) {
      case 403:
        message = 'Forbidden >:(';
        break;

      case 404:
        message = 'Page not found :(';
        details = 'Did you type the address correctly?';
        break;

      case 500:
        message = 'Internal server error :(';
        break;
    }

    return {
      props: {
        status: status,
        message: message,
        details: details,
        title: `${status} - ${message}`
      }
    };
  };
</script>

<script>
  export let status;
  export let message;
  export let details;
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{status}</h1>
<p><strong>{message}</strong></p>
{#if details}
  <p>{details}</p>
{/if}
