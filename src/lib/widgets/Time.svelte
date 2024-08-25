<script lang="ts">
  
  import { onMount } from "svelte";

  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      const date = new Date();
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();
    }, 1000);

    return () => clearInterval(interval);
  });

  $: time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

</script>

<div class="line">
  <div class="bubble">
    <p>{time}</p>
  </div>
</div>

<style>

  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bubble {
    padding: 1rem 2rem;
    background-color: var(--bubble);
    border-radius: 2rem;
    text-align: center;
    font-size: 3rem;
    min-width: 16rem;
    font-variant-numeric: tabular-nums;
  }

</style>