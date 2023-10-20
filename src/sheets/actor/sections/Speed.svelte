<script>
   export let data;
   let speed = data.sheet.actor.system.speed.base;
   let special = data.sheet.actor.system.speed.special;
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
      on:change={data.update}/>
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
      flex: 0 0 8.5rem;
      width: 8.5rem;
      font-size: 0.8rem;
   }

   #special::placeholder {
      font-size: 1rem;
   }
</style>