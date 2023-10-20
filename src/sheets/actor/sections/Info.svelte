<script>
   import { onMount } from 'svelte';
   import HP from './HP.svelte';
   import Defenses from './Defenses.svelte';
   import ActionPoints from './ActionPoints.svelte';
   import { resize_to_value } from '/core/html';

   export let data;
   export let editPortrait;
   let name = data.sheet.actor.name;
   let img = data.sheet.actor.img;
   let system = data.sheet.actor.system;
   let update = data.update;
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

   function resize(event) {
      resize_to_value(canvas, event.srcElement);
   }

   onMount(() => {
      resize_to_value(canvas, inputs.name);
      resize_to_value(canvas, inputs.level);
      resize_to_value(canvas, inputs.gender);
      resize_to_value(canvas, inputs.race);
      resize_to_value(canvas, inputs.class);
      resize_to_value(canvas, inputs.paragon);
      resize_to_value(canvas, inputs.destiny);
   });
</script>

<section>
   <img src="{img}" id="portrait" alt="{name}'s portrait" 
      on:click={editPortrait}/>
   <div id="info">
      <div class="info_line">
         <input type="text" id="name" placeholder="Name" 
            name="name" value={name} on:change={update}
            bind:this={inputs.name} on:input={resize}/>
         <span>, Level</span>
         <input type="text" id="level" 
            name="system.level" value={system.level} on:change={update}
            bind:this={inputs.level} on:input={resize}/>
         <input type="text" id="race" placeholder="Race" 
            name="system.race" value={system.race} on:change={update}
            bind:this={inputs.race} on:input={resize}/>
         <input type="text" id="gender" placeholder="Gender" 
            name="system.gender" value={system.gender} on:change={update}
            bind:this={inputs.gender} on:input={resize}/>
         <input type="text" id="class" placeholder="Class" 
            name="system.class" value={system.class} on:change={update}
            bind:this={inputs.class} on:input={resize}/>
         <input type="text" id="paragon" class="optional" placeholder="Paragon Path" 
            name="system.paragon" value={system.paragon} on:change={update}
            bind:this={inputs.paragon} on:input={resize}/>
         <input type="text" id="destiny" class="optional" placeholder="Epic Destiny" 
            name="system.destiny" value={system.destiny} on:change={update}
            bind:this={inputs.destiny} on:input={resize}/>
      </div>
      <div class="info_line">
         <span>EXP</span>
         <input type="text" id="experience" placeholder="Exp"
            name="system.xp" value={system.xp} on:change={update}/>
      </div>
      <div class="block_line">
         <HP data={data}/>
         <div class="divider"/>
         <Defenses data={data}/>
      </div>
   </div>
</section>

<style lang="scss">
   section {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid black;
   }

   #portrait {
      width: 11rem;
      height: 11rem;
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
      display: flex;
      flex-direction: row;
   }

   .block_line .divider {
      margin: 0 0.2rem 0 0.2rem;
      border-right: 1px solid black;
   }
</style>