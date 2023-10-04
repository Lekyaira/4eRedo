<script>
   export let data;

   console.log(data);
</script>

<section>
   <h2>Hit Points</h2>
   <div id="hp">
      <input type="text" id="hp_value" value="{data.hp.value}"/>
      <div id="hp_info">
         <div class="row">
            <div id="hp_info_max" class="item">
               <input type="text" value="{data.hp.max}"/>
               <span>max</span>
            </div>
            <div id="hp_info_temp" class="item">
               <input type="text" value="{data.hp.temp}"/>
               <span>temp</span>
            </div>
            <div id="second_wind" class="item">
               <input type="checkbox" value="{data.healing_surges.second_wind}"/>
               <span>SW</span>
            </div>
         </div>
         <span class="label">Healing Surges</span>
         <div class="row">
            <div id="hp_info_surges_value" class="item">
               <input type="text" value="10"/>
               <span>heals for</span>
            </div>
            <div id="hp_info_surges_surges" class="item">
               <input type="text" value="{data.healing_surges.value}"/>
               <span>surges</span>
            </div>
            <div id="hp_info_surges_max" class="item">
               <input type="text" value="{data.healing_surges.max}"/>
               <span>per day</span>
            </div>
         </div>
      </div>
   </div>
</section>

<style lang="scss">
   section {
      width: 13.2rem;
   }

   h2 {
      text-align: center;
   }

   input {
      flex: 0 0 3.2rem;
      border: none;
      border-radius: 0;
      background-color: #0000;
      font-size: 1.3rem;
      margin-bottom: 0.4rem;
   }

   input:hover,
   input:focus {
      border-bottom: 1px solid black;
      box-shadow: none;
   }

   #hp {
      display: flex;
      flex-direction: row;
   }

   #hp_value {
      display: flex;
      align-items: center;
      justify-items: center;
      text-align: center;
      font-size: 2rem;
      width: 5rem;
      flex: 0 0 5rem;
      height: 5rem;
      border: 1px solid black;
   }

   #hp_info {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   #hp_info .label {
      font-size: 0.8rem;
      border-bottom: 1px solid black;
      margin-bottom: 0.2rem;
   }

   #hp_info .row {
      flex: 0 0 auto;
      height: 2rem;
      display: flex;
      flex-direction: row;
      margin-left: 0.4rem;
   }

   #hp_info .row .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
   }

   #hp_info .row .item input {
      flex: 0 0 auto;
      height: 1rem;
      font-size: 1rem;
      margin: 0;
   }

   #hp_info .row .item span {
      font-size: 0.6rem;
      margin: 0;
   }
</style>