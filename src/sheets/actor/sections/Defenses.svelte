<script>
   import Defense from './Defense.svelte';

   export let data;
   let defenses = data.sheet.actor.derived.defenses;
   data.onUpdate.push(() => defenses=defenses);
</script>

<section>
   <h2>Defenses</h2>
   <Defense name="AC" value={defenses.ac}/>
   <Defense name="Fort" value={defenses.fortitude}/>
   <Defense name="Ref" value={defenses.reflexes}/>
   <Defense name="Will" value={defenses.will}/>
</section>

<style lang="scss">
   h2 {
   margin-bottom: 0.2rem;
   }
</style>