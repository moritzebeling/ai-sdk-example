<script lang="ts">
  
  export let input: string;

</script>

<form on:submit>
  <input bind:value={input} />
  <button type="submit">Prompt</button>
</form>

<style>
  form {
    background-color: var(--bubble);
    display: flex;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 10rem;
  }
  input {
    border-radius: 10rem;
    flex: 1;
    padding: 0.4rem 0.8rem;
  }
  button {
    border-radius: 10rem;
    padding: 0.5rem 1rem;
    background-color: var(--bubble);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--background);
  }
</style>