<script>
   import Skill from './Skill.svelte';

   export let sheet;

   let skill = {
      acrobatics: { name: "Acrobatics", trained: false, value: 0 },
      arcana: { name: "Arcana", trained: false, value: 0 },
      athletics: { name: "Athletics", trained: true, value: 9 },
      bluff: { name: "Bluff", trained: false, value: 0 },
      diplomacy: { name: "Diplomacy", trained: false, value: 0 },
      dungeoneering: { name: "Dungeoneering", trained: false, value: 0 },
      endurance: { name: "Endurance", trained: false, value: 0 },
      healing: { name: "Healing", trained: false, value: 0 },
      history: { name: "History", trained: false, value: 0 },
      insight: { name: "Insight", trained: false, value: 0 },
      intimidation: { name: "Intimidation", trained: false, value: 0 },
      nature: { name: "Nature", trained: true, value: 5 },
      perception: { name: "Perception", trained: false, value: 0 },
      religion: { name: "Religion", trained: false, value: 0 },
      stealth: { name: "Stealth", trained: false, value: 0 },
      streetwise: { name: "Streetwise", trained: false, value: 0 },
      thievery: { name: "Thievery", trained: false, value: 0 },
   }
</script>

<section>
   <Skill 
      name={skill.acrobatics.name}
      trained={skill.acrobatics.trained}
      value={skill.acrobatics.value}/>
   <Skill
      name={skill.arcana.name}
      trained={skill.arcana.trained}
      value={skill.arcana.value}/>
   <Skill
      name={skill.athletics.name}
      trained={skill.athletics.trained}
      value={skill.athletics.value}/>
   <Skill
      name={skill.bluff.name}
      trained={skill.bluff.trained}
      value={skill.bluff.value}/>
   <Skill
      name={skill.diplomacy.name}
      trained={skill.diplomacy.trained}
      value={skill.diplomacy.value}/>
   <Skill
      name={skill.dungeoneering.name}
      trained={skill.dungeoneering.trained}
      value={skill.dungeoneering.value}/>
   <Skill
      name={skill.endurance.name}
      trained={skill.endurance.trained}
      value={skill.endurance.value}/>
   <Skill
      name={skill.healing.name}
      trained={skill.healing.trained}
      value={skill.healing.value}/>
   <Skill
      name={skill.history.name}
      trained={skill.history.trained}
      value={skill.history.value}/>
   <Skill
      name={skill.insight.name}
      trained={skill.insight.trained}
      value={skill.insight.value}/>
   <Skill
      name={skill.intimidation.name}
      trained={skill.intimidation.trained}
      value={skill.intimidation.value}/>
   <Skill
      name={skill.nature.name}
      trained={skill.nature.trained}
      value={skill.nature.value}/>
   <Skill
      name={skill.perception.name}
      trained={skill.perception.trained}
      value={skill.perception.value}/>
   <Skill
      name={skill.religion.name}
      trained={skill.religion.trained}
      value={skill.religion.value}/>
   <Skill
      name={skill.stealth.name}
      trained={skill.stealth.trained}
      value={skill.stealth.value}/>
   <Skill
      name={skill.streetwise.name}
      trained={skill.streetwise.trained}
      value={skill.streetwise.value}/>
   <Skill
      name={skill.thievery.name}
      trained={skill.thievery.trained}
      value={skill.thievery.value}/>
</section>

<style lang="scss">
</style>