<script>
   import { ApplicationShell } from '#runtime/svelte/component/core';

   // Sheet
   export let sheet;
   // Inner sheet template component
   export let component = false;

   export let elementRoot;

   // Update Foundry database
   let update = (event) => {
      let attributeValue = event.srcElement.value;
      let attributeName = event.srcElement.name;
      let docData = { _id: sheet.actor._id };
      if(event.srcElement.type === 'checkbox') attributeValue = event.srcElement.checked;
      docData[attributeName] = attributeValue;
      sheet.actor.update(docData);
   };
</script>

<!-- This is necessary for Svelte to generate accessors TRL can access for `elementRoot` -->
<svelte:options accessors={true}/>

<!-- ApplicationShell provides the popOut / application shell frame, header bar, content areas -->
<!-- ApplicationShell exports `elementRoot` which is the outer application shell element -->
<ApplicationShell bind:elementRoot>
   <!-- svelte:component tag represents our inner sheet template data. -->
   <!-- "this" is the Svelte component we're rendering on this sheet. -->
   <!-- "sheet" is the sheet object that controls the sheet rendering. -->
   <!--<svelte:component
      this={component},
      bind:sheet={sheet} />-->
   <svelte:component this={component} 
      bind:sheet={sheet} 
      update={update}
   />
</ApplicationShell>