<script>
  import { useChat } from '@ai-sdk/svelte';

  const { input, handleSubmit, messages } = useChat();
</script>

<main>
  <ul>
    {#each $messages as message}
      {#if message.role === 'assistant' && message?.toolInvocations?.length}
        <li>
          {#each message.toolInvocations as toolInvocation}
            <div>
              {toolInvocation.toolName}:
              <pre>{JSON.stringify(toolInvocation?.result, null, 2)}</pre>
            </div>
          {/each}
        </li>
      {:else}
        <li>{message.role}: {message.content}</li>
      {/if}
    {/each}
  </ul>
  <form on:submit={handleSubmit}>
    <input bind:value={$input} />
    <button type="submit">Send</button>
  </form>
</main>