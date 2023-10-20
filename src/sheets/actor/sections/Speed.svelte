<script>
   import { onMount } from "svelte";
   import { resize_to_value } from "/core/html";

   export let data;
   let speed = data.sheet.actor.system.speed.base;
   let special = data.sheet.actor.system.speed.special;
   let canvas = document.createElement("canvas");
   $: specialText = {};

   function resize(event) {
      resize_to_value(canvas, event.srcElement);
   }

   onMount(() => {
      resize_to_value(canvas, specialText);
   })
</script>

<section>
   <span class="title">Speed:</span>
   <input type="number" id="speed" placeholder="Speed"
      name="system.speed.base"
      value={speed}
      on:change={data.update}/>
   <input type="text" id="special" placeholder="Special Movement"
      name="system.speed.special"
      value={special}
      on:change={data.update}
      bind:this={specialText}
      on:input={resize}/>
</section>

<style lang="scss">
   section {
      display: flex;
      flex-direction: row;
      align-items: center;
   }

   .title {
      font-size: 1rem;
      flex: 0 0 3rem;
      width: 3rem;
   }

   input {
      border: none;
      background-color: #0000;
      border-radius: 0;
      flex: 0 0 1rem;
      width: 1rem;
      height: 1rem;
   }

   input:hover,
   input:focus {
      box-shadow: none;
      border-bottom: 1px solid black;
   }

   input::placeholder {
      color: #c2beaebb;
   }

   #special {
      flex: 0 0 7rem;
      width: 7rem;
      font-size: 0.8rem;
   }
</style>