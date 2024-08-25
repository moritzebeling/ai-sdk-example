<script lang="ts">

  export let element;
  export let color;

  function setCssVariable(name: string, value: string) {
    document.documentElement.style.setProperty(`--${name}`, value);
  }

  $: setCssVariable(element, color);

</script>

<div class="line">
  <div class="bubble" style="background-color: {color};"></div>
</div>

<style>

  .line {
    display: flex;
    justify-content: center;
  }

  .bubble {
    width: 8rem;
    height: 8rem;
    border-radius: 8rem;
    border: 2px solid black;
  }

</style>