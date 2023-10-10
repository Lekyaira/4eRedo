<script>
   import AbilityScore from "./AbilityScore.svelte";
   export let system;

   // TEST CODE
   let level = 2;
   let str = 18;
   let strMod = Math.floor((str-10)/2);
   let strModPlusHalflevel = Math.floor(strMod+(level/2));
   let dex = 10;
   let dexMod = Math.floor((dex-10)/2);
   let dexModPlusHalflevel = Math.floor(dexMod+(level/2));
   let con = 10;
   let conMod = Math.floor((con-10)/2);
   let conModPlusHalflevel = Math.floor(conMod+(level/2));
   let int = 6;
   let intMod = Math.floor((int-10)/2);
   let intModPlusHalflevel = Math.floor(intMod+(level/2));
   let wis = 10;
   let wisMod = Math.floor((wis-10)/2);
   let wisModPlusHalflevel = Math.floor(wisMod+(level/2));
   let cha = 10;
   let chaMod = Math.floor((cha-10)/2);
   let chaModPlusHalflevel = Math.floor(chaMod+(level/2));
</script>

<section>
   <section id="labels">
      <div class="label box_label left_box">Mod</div>
      <div class="label box_label">+1/2 LVL</div>
   </section>
   <AbilityScore score={str} scoreName={"Strength"} scoreModifier={strMod} scoreModPlusHalflevel={strModPlusHalflevel}/>
   <AbilityScore score={dex} scoreName={"Dexterity"} scoreModifier={dexMod} scoreModPlusHalflevel={dexModPlusHalflevel}/>
   <AbilityScore score={con} scoreName={"Constitution"} scoreModifier={conMod} scoreModPlusHalflevel={conModPlusHalflevel}/>
   <AbilityScore score={int} scoreName={"Intelligence"} scoreModifier={intMod} scoreModPlusHalflevel={intModPlusHalflevel}/>
   <AbilityScore score={wis} scoreName={"Wisdom"} scoreModifier={wisMod} scoreModPlusHalflevel={wisModPlusHalflevel}/>
   <AbilityScore score={cha} scoreName={"Charisma"} scoreModifier={chaMod} scoreModPlusHalflevel={chaModPlusHalflevel}/>
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