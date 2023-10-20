<script>
   import Info from "./sections/Info.svelte";
   import Rest from "./sections/Rest.svelte";
   import Skills from "./sections/Skills.svelte";
   import ActionPoints from "./sections/ActionPoints.svelte";
   import Senses from "./sections/Senses.svelte";
   import Speed from "./sections/Speed.svelte";
   import Tabs from "./sections/Tabs.svelte";

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

   console.log("d4eRedo | DEBUG", data.sheet);
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
      <span class="vertical-divider"/>
      <Speed data={data}/>
      <span class="vertical-divider"/>
      <Senses data={data}/>
   </section>
   <section id="body">
      <section id="left_panel">
         <Rest data={data}/>
         <Skills data={data}/>
      </section>
      <section id="tab_panel">
         <Tabs data={data}/>
      </section>
   </section>
</main>

<style lang="scss">
   main {
      display: flex;
      flex-direction: column;
   }

   .vertical-divider {
      border-right: 1px solid black;
      flex: 0 0 0.5rem;
      width: 0.5rem;
      height: 80%;
      margin: 0 0.5rem 0 0;
   }

   #body {
      display: flex;
      flex-direction: row;
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