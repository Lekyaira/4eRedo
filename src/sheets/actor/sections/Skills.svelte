<script>
   import Skill from './Skill.svelte';

   export let data;
   let update = data.update;
   let skills = data.sheet.actor.system.skills;
   let skillValues = data.sheet.actor.derived.skills;
   data.onUpdate.push(() => skillValues=skillValues);
</script>

<section>
   <Skill 
      name={"Acrobatics"}
      trained={skills.acrobatics.trained}
      value={skillValues.acrobatics}
      update={update}/>
   <Skill 
      name={"Arcana"}
      trained={skills.arcana.trained}
      value={skillValues.arcana}
      update={update}/>
   <Skill 
      name={"Athletics"}
      trained={skills.athletics.trained}
      value={skillValues.athletics}
      update={update}/>
   <Skill 
      name={"Bluff"}
      trained={skills.bluff.trained}
      value={skillValues.bluff}
      update={update}/>
   <Skill 
      name={"Diplomacy"}
      trained={skills.diplomacy.trained}
      value={skillValues.diplomacy}
      update={update}/>
   <Skill 
      name={"Dungeoneering"}
      trained={skills.dungeoneering.trained}
      value={skillValues.dungeoneering}
      update={update}/>
   <Skill 
      name={"Endurance"}
      trained={skills.endurance.trained}
      value={skillValues.endurance}
      update={update}/>
   <Skill 
      name={"Heal"}
      trained={skills.heal.trained}
      value={skillValues.heal}
      update={update}/>
   <Skill 
      name={"History"}
      trained={skills.history.trained}
      value={skillValues.history}
      update={update}/>
   <Skill 
      name={"Insight"}
      trained={skills.insight.trained}
      value={skillValues.insight}
      update={update}/>
   <Skill 
      name={"Intimidate"}
      trained={skills.intimidate.trained}
      value={skillValues.intimidate}
      update={update}/>
   <Skill 
      name={"Nature"}
      trained={skills.nature.trained}
      value={skillValues.nature}
      update={update}/>
   <Skill 
      name={"Perception"}
      trained={skills.perception.trained}
      value={skillValues.perception}
      update={update}/>
   <Skill 
      name={"Religion"}
      trained={skills.religion.trained}
      value={skillValues.religion}
      update={update}/>
   <Skill 
      name={"Stealth"}
      trained={skills.stealth.trained}
      value={skillValues.stealth}
      update={update}/>
   <Skill 
      name={"Streetwise"}
      trained={skills.streetwise.trained}
      value={skillValues.streetwise}
      update={update}/>
   <Skill 
      name={"Thievery"}
      trained={skills.thievery.trained}
      value={skillValues.thievery}
      update={update}/>
</section>

<style lang="scss">
</style>