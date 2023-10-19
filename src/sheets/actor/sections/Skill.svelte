<script>
   import { print_mod } from "/core/html";

   export let trained;
   export let name;
   export let value;
   export let update;
   let attributeName = name.toLowerCase();

   function trainedClick(event) {
      // Update the sheet..
      update(event).then((actor) => 
      // Then update the displayed value of the skill
         value = actor.derived.skills[name.toLowerCase()]);
   }
</script>

<section>
   <!--TODO: Change this into a neat icon toggle-->
   <input type="checkbox" id="skill_trained" value={trained} checked={trained}
      name="system.skills.{attributeName}.trained" on:change={trainedClick}/>
   <div id="skill_name">{name}</div>
   <div id="skill_value">{print_mod(value)}</div>
</section>

<style type="scss">
   section {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.1rem;
   }

   #skill_trained {
      height: 1rem;
      width: 1rem;
   }

   #skill_name {
      flex: 0 0 9rem;
      width: 9rem;
   }
</style>