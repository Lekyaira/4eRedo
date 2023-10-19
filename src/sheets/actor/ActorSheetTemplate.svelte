<script>
   import Info from "./sections/Info.svelte";
   import AbilityScores from "./sections/AbilityScores.svelte";
   import Skills from "./sections/Skills.svelte";
   // Data passed in from the base sheet.
   export let data;

   // Edit actor portrait
   function editPortrait() {
      // Import Tokenize function
      const tokenize = game.modules.get('vtta-tokenizer')?.api?.tokenizeActor;
      // If we have Tokenizer installed, use it
      if(tokenize) tokenize(data.sheet.actor); // TODO: Update sheet img on tokenizer submit
      // Otherwise, call our own file dialog
      else data.editImage();
   }
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<main>
   <section id="header">
      <Info 
         data={data}
         editPortrait={editPortrait}/>
   </section>
   <section id="body">
      <section id="left_panel">
         <Skills data={data}/>
      </section>
      <section id="tab_panel">
         <AbilityScores data={data}/>
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