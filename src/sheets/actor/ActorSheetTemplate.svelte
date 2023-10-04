<script>
   import Info from "./sections/Info.svelte";
   import AbilityScores from "./sections/AbilityScores.svelte";
   // Sheet passed in from the base sheet.
   export let sheet;
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<main>
   <section id="header">
      <Info sheet={sheet}/>
   </section>
   <section id="body">
      <AbilityScores sheet={sheet}/>
   </section>
</main>

<style lang="scss">
</style>