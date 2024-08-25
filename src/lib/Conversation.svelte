<script lang="ts">

  import Bubble from "./widgets/Bubble.svelte";
  import Time from "./widgets/Time.svelte";
  import Theme from "./widgets/Theme.svelte";
  import Weather from "./widgets/Weather.svelte";
  import Team from "./widgets/Team.svelte";

  const widgets = {
    time: Time,
    theme: Theme,
    weather: Weather,
    team: Team,
  };

  export let messages;

</script>

<ul>
  {#each messages as message}
    <li class="role-{message.role}">
      {#if message.role === 'assistant' && message?.toolInvocations?.length}
        {@const tool = message?.toolInvocations[message?.toolInvocations?.length - 1]}
        {#if widgets.hasOwnProperty(tool.toolName)}
          <svelte:component this={widgets[tool.toolName]} {...tool.result} />
        {:else}
          <Bubble message={message}>
            {tool.toolName}:
            <pre>{JSON.stringify(tool?.result, null, 2)}</pre>
          </Bubble>
        {/if}
      {:else}
        <Bubble message={message} />
      {/if}
    </li>
  {/each}
</ul>

<style>

  li + li {
    margin-top: 1rem;
  }

</style>