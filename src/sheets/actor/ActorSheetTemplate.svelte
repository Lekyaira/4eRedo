<script>
   import { writable } from 'svelte/store';
   import Info from "./sections/Info.svelte";
   import AbilityScores from "./sections/AbilityScores.svelte";
   import Skills from "./sections/Skills.svelte";
   // Sheet passed in from the base sheet.
   export let sheet;
   let system = sheet.actor.system;
   //export let update;

   //const count = writable("Initial Val");
   let testVal = "Initial Val";

   /*function increment(event) {
      console.log($testVal);
      //count.update(() => event.srcElement.value);
      //update($count);
   }*/

   let update = (event) => {
      let attributeValue = event.srcElement.value;
      let attributeName = event.srcElement.name;
      let docData = { _id: sheet.actor._id };
      if(event.srcElement.type === 'checkbox') attributeValue = event.srcElement.checked;
      docData[attributeName] = attributeValue;
      console.log("4eRemake | DEBUG:");
      console.log(event);
      console.log(docData);
      sheet.actor.update(docData);
   };
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<main>
   <section id="header">
      <Info sheet={sheet} update={update}/>
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