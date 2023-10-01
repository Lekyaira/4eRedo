<script>
   // Sheet passed in from the base sheet.
   export let sheet;
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<main>
   <h1>Basic Character Sheet</h1>
   <p>{sheet.actor.name}</p>
</main>

<style lang="scss">
   h1 {
      text-align: center;
      display: flex;
   }
</style>