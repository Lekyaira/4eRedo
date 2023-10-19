<script>
   export let data;
   let system = data.sheet.actor.system;
   let update = data.update;
</script>

<section>
   <h2>Hit Points</h2>
   <div id="hp">
      <input type="text" id="hp_value" 
         name="system.hp.value" 
         value={system.hp.value} 
         on:change={update}/>
      <div id="hp_info">
         <div class="row">
            <div id="hp_info_max" class="item">
               <input type="text" 
                  name="system.hp.max" 
                  value={system.hp.max} 
                  on:change={update}/>
               <span>max</span>
            </div>
            <div id="hp_info_temp" class="item">
               <input type="text" 
                  name="system.hp.temp" 
                  value={system.hp.temp} 
                  on:change={update}/>
               <span>temp</span>
            </div>
            <div id="second_wind" class="item">
               <input type="checkbox" 
                  name="system.healing_surges.second_wind" 
                  value={system.healing_surges.second_wind}
                  on:change={update}/>
               <span>SW</span>
            </div>
         </div>
         <span class="label">Healing Surges</span>
         <div class="row">
            <div id="hp_info_surges_value" class="item">
               <!--TODO: Update template for healing surge amount-->
               <input type="text" value="10"/>
               <span>heals for</span>
            </div>
            <div id="hp_info_surges_surges" class="item">
               <input type="text" 
                  name="system.healing_surges.value"
                  value={system.healing_surges.value}
                  on:change={update}/>
               <span>surges</span>
            </div>
            <div id="hp_info_surges_max" class="item">
               <input type="text" 
                  name="system.healing_surges.max"
                  value={system.healing_surges.max}
                  on:change={update}/>
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