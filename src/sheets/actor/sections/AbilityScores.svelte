<script>
   import AbilityScore from "./AbilityScore.svelte";
   export let data;
   let update = data.update;

   let strength = {
      name: "strength",
      score: data.sheet.actor.system.ability_scores.strength.base,
      derived: data.sheet.actor.derived.abilities.strengthMod,
   };
   let dexterity = {
      name: "dexterity",
      score: data.sheet.actor.system.ability_scores.dexterity.base,
      derived: data.sheet.actor.derived.abilities.dexterityMod,
   };
   let constitution = {
      name: "constitution",
      score: data.sheet.actor.system.ability_scores.constitution.base,
      derived: data.sheet.actor.derived.abilities.constitutionMod,
   };
   let intelligence = {
      name: "intelligence",
      score: data.sheet.actor.system.ability_scores.intelligence.base,
      derived: data.sheet.actor.derived.abilities.intelligenceMod,
   };
   let wisdom = {
      name: "wisdom",
      score: data.sheet.actor.system.ability_scores.wisdom.base,
      derived: data.sheet.actor.derived.abilities.wisdomMod,
   };
   let charisma = {
      name: "charisma",
      score: data.sheet.actor.system.ability_scores.charisma.base,
      derived: data.sheet.actor.derived.abilities.charismaMod,
   };

   data.onUpdate.push(() => {
      // No idea why this works but data=data doesn't.
      strength.derived=data.sheet.actor.derived.abilities.strengthMod;
      dexterity.derived=data.sheet.actor.derived.abilities.dexterityMod;
      constitution.derived=data.sheet.actor.derived.abilities.constitutionMod;
      intelligence.derived=data.sheet.actor.derived.abilities.intelligenceMod;
      wisdom.derived=data.sheet.actor.derived.abilities.wisdomMod;
      charisma.derived=data.sheet.actor.derived.abilities.charismaMod;
   });
</script>

<section>
   <section id="labels">
      <div class="label box_label left_box">Mod</div>
      <div class="label box_label">+1/2 LVL</div>
   </section>
   <AbilityScore 
      scoreName={"Strength"}
      data={strength}
      update={update}/>
   <AbilityScore 
      scoreName={"Dexterity"}
      data={dexterity}
		update={update}/>
   <AbilityScore 
      scoreName={"Constitution"}
      data={constitution}
		update={update}/>
   <AbilityScore 
      scoreName={"Intelligence"}
      data={intelligence}
		update={update}/>
   <AbilityScore 
      scoreName={"Wisdom"}
      data={wisdom}
		update={update}/>
   <AbilityScore 
      scoreName={"Charisma"}
      data={charisma}
		update={update}/>
</section>

<style lang="scss">
   section {
      display: flex;
      flex-direction: column;
   }

   #labels {
      display: flex;
      flex-direction: row;
   }

   .label {
      display: flex;
      align-items: end;
      justify-content: center;
      font-size: 0.5rem;
   }

   .box_label {
      width: 2.2rem;
   }

   .left_box {
      margin-left: 7.4rem;
   }
</style>