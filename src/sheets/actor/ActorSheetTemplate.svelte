<script>
   import Info from "./sections/Info.svelte";
   import AbilityScores from "./sections/AbilityScores.svelte";
   import Skills from "./sections/Skills.svelte";
   import ActionPoints from "./sections/ActionPoints.svelte";

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
   <section id="sub-header">
      <ActionPoints data={data}/>
   </section>
   <section id="body">
      <section id="left_panel">
         <Skills data={data}/>
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

   #sub-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid black;
      margin: 0 0 0.4rem 0;
      padding: 0 0 0 1rem;
   }
</style>