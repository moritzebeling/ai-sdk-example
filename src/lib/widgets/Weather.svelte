<script lang="ts">

  export let location;
  export let temperature;
  export let description;

</script>

<div class="line">
  <div class="bubble">
    <h3>{temperature}&deg;</h3>
    <div class="description">
      <p>{location}</p>
      <p>{description}</p>
    </div>
  </div>
</div>

<style>

  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 2rem;
    flex: 0 0 4rem;
    margin-top: -0.5rem;
  }

  .bubble {
    padding: 1rem 2rem;
    background-color: var(--bubble);
    border-radius: 2rem;
    width: 28rem;
    display: flex;
    align-items: flex-start;
  }

  .description {
    flex: 1;
  }

</style>