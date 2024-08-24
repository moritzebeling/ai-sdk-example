<script lang="ts">

  import Bubble from "./Bubble.svelte";

  export let messages;

</script>

<ul>
  {#each messages as message}
    <li class="role-{message.role}">
      {#if message.role === 'assistant' && message?.toolInvocations?.length}
        {#each message.toolInvocations as toolInvocation}
          <Bubble message={message}>
            {toolInvocation.toolName}:
            <pre>{JSON.stringify(toolInvocation?.result, null, 2)}</pre>
          </Bubble>
        {/each}
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