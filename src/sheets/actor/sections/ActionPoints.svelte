<script>
   export let data;
   let points = data.sheet.actor.system.action_points.value;
   let used = data.sheet.actor.system.action_points.used_this_encounter;
   data.onUpdate.push(() => {
      points = data.sheet.actor.system.action_points.value;
      used = data.sheet.actor.system.action_points.used_this_encounter;
   });

   function useActionPoint(event) {
      if (event.srcElement.checked) {
         // Check if we can spend action points.
         if (points <= 0) {
            used = false;
            event.srcElement.checked = false;
            return;
         }
         // Update the available action points, then update the checkbox status
         let newPoints = points - 1;
         let updateArg = {
            name: "system.action_points.value",
            value: newPoints
         }
         data.update(event, updateArg);
      }
      else {
         // Just update the checkbox status
         data.update(event);
      }
   }
</script>

<section>
   <span class="title">Action Points:</span>
   <input type="text" id="points"
      value={points}
      name="system.action_points.value"
      on:change={data.update}/>
   <input type="checkbox" id="used"
      checked={used}
      name="system.action_points.used_this_encounter"
      on:change={useActionPoint}/>
</section>

<style lang="scss">
   section {
      display: flex;
      flex-direction: row;
      align-items: center;
   }

   .title {
      font-size: 1rem;
      flex: 0 0 6rem;
      width: 6rem;
   }

   #points {
      border: none;
      background-color: #00000000;
      border-radius: 0;
      flex: 0 0 1rem;
      width: 1rem;
      height: 1rem;
   }

   #points:hover {
      border-bottom: 1px solid black;
   }

   #points:focus {
      box-shadow: none;
      border-bottom: 1px solid black;
   }

   #used {
      flex: 0 0 1rem;
      width: 1rem;
      height: 1rem;
   }
</style>