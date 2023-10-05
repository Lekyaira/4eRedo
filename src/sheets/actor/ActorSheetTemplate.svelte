<script>
   import Info from "./sections/Info.svelte";
   import AbilityScores from "./sections/AbilityScores.svelte";
   import Skills from "./sections/Skills.svelte";
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
      <section id="left_panel">
         <Skills sheet={sheet}/>
      </section>
      <section id="tab_panel">
      </section>
   </section>
</main>

<style lang="scss">
   main {
      display: flex;
      flex-direction: column;
   }

   #header {
      margin-bottom: 0.4rem;
   }

   #body {
      display: flex;
      flex-direction: column;
   }

   #left_panel {
      flex: 0 0 auto;
      width: 13rem;
      border-right: 3px solid black;
   }
</style>