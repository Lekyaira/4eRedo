export default class d4eredoActor extends Actor {
   // Derived attributes
   derived = {
      abilities: {
         strengthMod: 0,
         constitutionMod: 0,
         dexterityMod: 0,
         intelligenceMod: 0,
         wisdomMod: 0,
         charismaMod: 0
      },
      defenses: {
         ac: 10,
         fortitude: 10,
         reflexes: 10,
         will: 10
      },
      skills: {
         acrobatics: 0,
         arcana: 0,
         athletics: 0,
         bluff: 0,
         diplomacy: 0,
         endurance: 0,
         heal: 0,
         history: 0,
         insight: 0,
         intimidate: 0,
         nature: 0,
         perception: 0,
         religion: 0,
         stealth: 0,
         streetwise: 0,
         thievery: 0
      }
   };
   // Set up derived attributes
   prepareData() {
      super.prepareData();

      const system = this.system;
      const derived = this.derived;

      // PCs
      if (this.type === "character") {
         console.log("d4eRedo | DEBUG: Preparing character data..");
         const halfLevel = Math.floor(system.level / 2);
         // Ability scores
         derived.abilities.strengthMod = 
            Math.floor((system.ability_scores.strength.base - 10) / 2) + 
            halfLevel;
         derived.abilities.constitutionMod =
            Math.floor((system.ability_scores.constitution.base - 10) / 2) + 
            halfLevel;
         derived.abilities.dexterityMod =
            Math.floor((system.ability_scores.dexterity.base - 10) / 2) + 
            halfLevel;
         derived.abilities.intelligenceMod =
            Math.floor((system.ability_scores.intelligence.base - 10) / 2) + 
            halfLevel;
         derived.abilities.wisdomMod =
            Math.floor((system.ability_scores.wisdom.base - 10) / 2) + 
            halfLevel;
         derived.abilities.charismaMod =
            Math.floor((system.ability_scores.charisma.base - 10) / 2) + 
            halfLevel;

         // Defenses
         derived.defenses.ac = 
            10 + Math.max(
               derived.abilities.dexterityMod,
               derived.abilities.intelligenceMod
            );
         derived.defenses.fortitude =
            10 + Math.max(
               derived.abilities.strengthMod,
               derived.abilities.constitutionMod
            );
         derived.defenses.reflexes =
            10 + Math.max(
               derived.abilities.dexterityMod,
               derived.abilities.intelligenceMod
            );
         derived.defenses.will =
            10 + Math.max(
               derived.abilities.wisdomMod,
               derived.abilities.charismaMod
            );

         // Skills
         derived.skills.acrobatics = 
            derived.abilities.dexterityMod + 
            (system.skills.acrobatics.trained ? 5 : 0);
         derived.skills.arcana = 
            derived.abilities.intelligenceMod + 
            (system.skills.arcana.trained ? 5 : 0);
         derived.skills.athletics = 
            derived.abilities.strengthMod + 
            (system.skills.athletics.trained ? 5 : 0);
         derived.skills.bluff = 
            derived.abilities.charismaMod + 
            (system.skills.bluff.trained ? 5 : 0);
         derived.skills.diplomacy = 
            derived.abilities.charismaMod + 
            (system.skills.diplomacy.trained ? 5 : 0);
         derived.skills.dungeoneering = 
            derived.abilities.wisdomMod + 
            (system.skills.dungeoneering.trained ? 5 : 0);
         derived.skills.endurance = 
            derived.abilities.constitutionMod + 
            (system.skills.endurance.trained ? 5 : 0);
         derived.skills.heal = 
            derived.abilities.wisdomMod + 
            (system.skills.heal.trained ? 5 : 0);
         derived.skills.history = 
            derived.abilities.intelligenceMod + 
            (system.skills.history.trained ? 5 : 0);
         derived.skills.insight = 
            derived.abilities.wisdomMod + 
            (system.skills.insight.trained ? 5 : 0);
         derived.skills.intimidate = 
            derived.abilities.charismaMod + 
            (system.skills.intimidate.trained ? 5 : 0);
         derived.skills.nature = 
            derived.abilities.wisdomMod + 
            (system.skills.nature.trained ? 5 : 0);
         derived.skills.perception = 
            derived.abilities.wisdomMod + 
            (system.skills.perception.trained ? 5 : 0);
         derived.skills.religion = 
            derived.abilities.intelligenceMod + 
            (system.skills.religion.trained ? 5 : 0);
         derived.skills.stealth = 
            derived.abilities.dexterityMod + 
            (system.skills.stealth.trained ? 5 : 0);
         derived.skills.streetwise = 
            derived.abilities.charismaMod + 
            (system.skills.streetwise.trained ? 5 : 0);
         derived.skills.thievery = 
            derived.abilities.dexterityMod + 
            (system.skills.thievery.trained ? 5 : 0);
      }

      this.derived = derived;
      console.log(this);
   }
}