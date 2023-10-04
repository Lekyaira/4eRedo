<script>
   import { onMount } from 'svelte';
   import HP from './HP.svelte';

   export let sheet;
   let actor = sheet.actor;
   let data = sheet.actor.system;
   let canvas = document.createElement("canvas");

   $: inputs = {
      name: {},
      level: {},
      gender: {},
      race: {},
      class: {},
      paragon: {},
      destiny: {},
   }

   function css(element, property) {
      return window.getComputedStyle(element, null).getPropertyValue(property);
   }

   function resize(event) {
      resize_to_value(event.srcElement);
   }

   function resize_to_value(element) {
      let context = canvas.getContext("2d");
      context.font = css(element, 'font');
      let width;
      if(element.value == "") {
         if(element.placeholder == "") {
            width = "10px";
         }
         else {
            width = (context.measureText(element.placeholder).width + 6) + "px";
         }
      }
      else {
         width = (context.measureText(element.value).width + 6) + "px";
      }
      element.style.flexBasis = width;
   }

   onMount(() => {
      resize_to_value(inputs.name);
      resize_to_value(inputs.level);
      resize_to_value(inputs.gender);
      resize_to_value(inputs.race);
      resize_to_value(inputs.class);
      resize_to_value(inputs.paragon);
      resize_to_value(inputs.destiny);
   });

   // TEST CODE
   console.log(sheet);

</script>

<section>
   <img src="{actor.img}" id="portrait" alt="{sheet.actor.name}'s portrait"/>
   <div id="info">
      <div class="info_line">
         <input type="text" id="name" placeholder="Name" value={actor.name} 
            bind:this={inputs.name} on:input={resize}/>
         <span>, Level</span>
         <input type="text" id="level" value={data.level} 
            bind:this={inputs.level} on:input={resize}/>
         <input type="text" id="race" placeholder="Race" 
            bind:this={inputs.race} on:input={resize}/>
         <input type="text" id="gender" placeholder="Gender" 
            bind:this={inputs.gender} on:input={resize}/>
         <input type="text" id="class" placeholder="Class" 
            bind:this={inputs.class} on:input={resize}/>
         <input type="text" id="paragon" class="optional" placeholder="Paragon Path" 
            bind:this={inputs.paragon} on:input={resize}/>
         <input type="text" id="destiny" class="optional" placeholder="Epic Destiny" 
            bind:this={inputs.destiny} on:input={resize}/>
      </div>
      <div class="info_line">
         <span>EXP</span>
         <input type="text" id="experience" placeholder="Exp"/>
      </div>
      <div class="block_line">
         <HP data={data}/>
      </div>
   </div>
</section>

<style lang="scss">
   section {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid black;
      margin-bottom: 0.5rem;
   }

   #portrait {
      width: 10rem;
      height: 10rem;
      border: 1px solid black;
      margin: 0 0.5rem 0.5rem 0;
   }

   #info {
      display: flex;
      flex-direction: column;
      width: 100%;
   }

   .info_line {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: baseline;
   }

   #info input {
      flex-shrink: 0;
      flex-grow: 0;
      flex-basis: 10rem;
      min-width: 0px;
      margin-right: -2px;
      border: none;
      border-radius: 0;
      background-color: #00000000;
      font-size: 1.2rem;
   }

   #info input::placeholder {
      color: #19181388;
   }

   #info .optional::placeholder {
      color: #c2beaebb;
   }

   #info .optional:hover::placeholder,
   #info .optional:focus::placeholder {
      color: #191813bb;
   }

   #info input:hover,
   #info input:focus {
      border: none;
      box-shadow: none;
      border-bottom: 1px solid black;
   }

   #info span {
      flex: 0 0 auto;
      font-size: 1.2rem;
   }

   .block_line {
      border-top: 2px solid black;
      border-bottom: 2px solid black;
   }
</style>