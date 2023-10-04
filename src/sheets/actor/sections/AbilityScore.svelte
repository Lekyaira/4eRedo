<script>
   export let score;
   export let scoreName;
   export let scoreModifier;
   export let scoreModPlusHalflevel;
</script>

<section>
   <input type="text" id="score_value" class="score_box" value={score}/>
   <div id="score_name" >{scoreName}</div>
   <div id="score_modifier" class="score_box">{scoreModifier >= 0 ? '+' : ''}{scoreModifier}</div>
   <div id="score_mod_plus_halflevel" class="score_box">{scoreModPlusHalflevel >= 0 ? '+' : ''}{scoreModPlusHalflevel}</div>
</section>

<style lang="scss">
   section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: center;
   }

   .score_box {
      display: flex;
      flex: 0 0 2.2rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
   }

   input {
      border: none;
      border-radius: 0;
      background-color: #0000;
   }

   input:hover,
   input:focus {
      box-shadow: none;
      border-bottom: 1px solid black;
   }

   #score_name {
      flex: 0 0 5rem;
      margin-left: 0.2rem;
   }
</style>