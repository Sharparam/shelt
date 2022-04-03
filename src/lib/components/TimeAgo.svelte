<script lang="ts">
  import { formatDistanceToNow, formatISO, parseISO } from 'date-fns';

  export let date: Date | string;

  let parsedDate: Date;

  if (date instanceof Date) {
    parsedDate = date as Date;
  } else {
    parsedDate = parseISO(date as string);
  }

  const isoDate = formatISO(parsedDate);
  const formatted = formatDistanceToNow(parsedDate);
</script>

<time datetime={isoDate} title={isoDate}>{formatted} ago</time>

<style lang="scss">
  time {
    text-decoration: underline dotted;
    cursor: help;
  }
</style>
