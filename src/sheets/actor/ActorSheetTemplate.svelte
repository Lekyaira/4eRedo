<script>
   import AbilityScores from "./sections/AbilityScores.svelte";
   // Sheet passed in from the base sheet.
   export let sheet;
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<main>
   <AbilityScores sheet={sheet}/>
</main>

<style lang="scss">
   #info div {
      display: flex;
      flex-direction: row;
   }
</style>