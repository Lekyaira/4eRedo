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
      width: 2.2rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      border: none;
      border-radius: 0;
      background-color: #00000000;
   }

   #score_name {
      margin-left: 0.2rem;
      width: 5rem;
   }
</style>