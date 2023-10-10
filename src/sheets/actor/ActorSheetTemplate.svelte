<script>
   import Info from "./sections/Info.svelte";
   import AbilityScores from "./sections/AbilityScores.svelte";
   import Skills from "./sections/Skills.svelte";
   // Sheet passed in from the base sheet.
   export let sheet;
   let system = sheet.actor.system;
   export let update;
   export let editImage;

   // Edit actor portrait
   function editPortrait() {
      // Import Tokenize function
      const tokenize = game.modules.get('vtta-tokenizer')?.api?.tokenizeActor;
      // If we have Tokenizer installed, use it
      if(tokenize) tokenize(sheet.actor); // TODO: Update sheet img on tokenizer submit
      // Otherwise, call our own file dialog
      else editImage();
   }
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<main>
   <section id="header">
      <Info 
         system={system} 
         update={update} 
         name={sheet.actor.name} 
         img={sheet.actor.img}
         editPortrait={editPortrait}/>
   </section>
   <section id="body">
      <section id="left_panel">
         <Skills system={system} update={update}/>
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