<script lang="ts">

  export let team = [];

</script>

<div>
  <ul>
    <li class="sticky">Jung von Matt TECH</li>
    {#each team as name}
      <li>
        <div class="icon"><i>{name.substring(0,1)}</i></div>
        <h3>{name}</h3>
      </li>
    {/each}
    <li>
      <a href="https://www.jvm.com/jobs/?location=All&agency=Jung+von+Matt+TECH" target="_blank">See open positions</a>
    </li>
  </ul>
</div>

<style>

  ul {
    background-color: var(--bubble);
    border-radius: 1rem;
    max-width: 20rem;
    margin: 0 auto;
    max-height: 60vh;
    overflow-y: auto;
  }

  li {
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
  }

  .sticky {
    background-color: var(--bubble);
    position: sticky;
    z-index: 1;
    top: 0;
    border-bottom: 1px solid var(--background);
  }

  li + li {
    border-bottom: 1px solid var(--background);
  }

  .icon {
    background-color: var(--background);
    border-radius: 50%;
    height: 2rem;
    line-height: 2rem;
    margin-right: 1rem;
    text-align: center;
    width: 2rem;
  }

</style>