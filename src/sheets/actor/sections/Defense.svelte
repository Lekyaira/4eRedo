<script>
   export let name;
   export let value;

   $: val = value;
</script>

<section>
   <div id="defense-value">{val}</div>
   <div id="defense-name">{name}</div>
</section>

<style lang="scss">
   section {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.1rem;
   }

   #defense-value {
      display: flex;
      align-items: center;
      width: 2rem;
      height: 1.2rem;
      flex: 0 0 2rem;
      margin-left: 0.5rem;
      font-size: 1.4rem;
   }
</style>