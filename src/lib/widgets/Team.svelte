<script lang="ts">

  export let team = [];
  export let sort = undefined;

  function sortTeam(_s) {
    if (sort === 'asc') {
      return [...team].sort();
    } else if (sort === 'desc') {
      return [...team].sort().reverse();
    }
    return team;
  }

  $: displayedTeam = sortTeam(team, sort);

</script>

<div>
  <ul>
    <li class="sticky header">
      Jung von Matt TECH
      {#if sort}
        <select bind:value={sort}>
          <option value="asc">A – Z</option>
          <option value="desc">Z – A</option>
        </select>
      {/if}
    </li>
    {#each displayedTeam as name}
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
    max-height: 50vh;
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

  .header {
    display: flex;
    justify-content: space-between;
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

  select {
    background: none;
  }

</style>