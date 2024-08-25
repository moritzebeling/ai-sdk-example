<script lang="ts">
  
  export let message;

</script>

<div class="line {message.role}">
  <div class="bubble {message.role}">
    <slot>
      <p>{message.content}</p>
    </slot>
  </div>
</div>

<style>

  .line {
    display: flex;
    flex-direction: column;
  }

  .line.user {
    padding-right: 4rem;
  }

  .line.assistant {
    padding-left: 4rem;
  }

  .bubble {
    padding: 1rem 2rem;
    background-color: var(--bubble);
    color: var(--text);
    border-radius: 2rem;
  }

  .bubble.user {
    border-bottom-left-radius: 0;
    align-self: flex-start;
  }

  .bubble.assistant {
    border-bottom-right-radius: 0;
    align-self: flex-end;
  }

</style>