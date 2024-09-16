<script lang="ts">
  import Cart from '$lib/cart/Cart.svelte';
  import Conversation from '$lib/Conversation.svelte';
  import PromptInput from '$lib/PromptInput.svelte';
  import { useChat } from '@ai-sdk/svelte';

  const { input, handleSubmit, messages } = useChat();
</script>

<main>
  <Conversation messages={$messages} />
</main>

<aside>
  <div>
    <PromptInput bind:input={$input} on:submit={handleSubmit} />
  </div>
</aside>

<Cart />

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    padding-bottom: 8rem;
  }
  aside {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background-color: var(--background);
  }
  aside div {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>