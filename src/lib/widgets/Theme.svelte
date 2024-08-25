<script lang="ts">

  export let element;
  export let color;

  function setCssVariable(name: string, value: string) {
    document.documentElement.style.setProperty(`--${name}`, value);
  }

  $: setCssVariable(element, color);

</script>

<div>
  Set {element} to {color}
</div>

<style>

  div {
    text-align: center;
    padding: 0 4rem;
    font-size: 0.8rem;
    color: var(--bubble);
  }

</style>