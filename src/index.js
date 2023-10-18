import d4eredoActor from './d4eredoActor.js';
import d4eredoActorSheet from './sheets/actor/d4eredoActorSheet.js';
import d4eredoItem from './d4eredoItem.js';
import d4eredoFeatSheet from './sheets/feat/d4eredoFeatSheet.js';

Hooks.once("init", async () => {
   console.log("4eRedo | Initializing system...");

   // Unregister existing default sheets
   console.log("4eRedo | Unregistering sheets...");
   Actors.unregisterSheet("core", ActorSheet);
   Items.unregisterSheet("core", ItemSheet);

   // Set classes
   console.log("4eRedo | Setting up classes...");
   CONFIG.Actor.documentClass = d4eredoActor;

   console.log("4eRedo | Setting up items...");
   CONFIG.Item.documentClass = d4eredoItem;

   // Register sheets
   console.log("4eRedo | Registering sheets...");

   // Actors
   const actorTypes = [
      ["character", d4eredoActorSheet],
   ];
   // Loop through all actor types and register each
   actorTypes.forEach((type) => {
      Actors.registerSheet("d4eredo", type[1], {
         types: [type[0]],
         label: type[0] && type[0][0].toUpperCase() + type[0].slice(1),
         makeDefault: true
      });
   });
   
   // Items
   const itemTypes = [
      ["feat", d4eredoFeatSheet],
   ];
   itemTypes.forEach((type) => {
      Items.registerSheet("d4eredo", type[1], {
         types: [type[0]],
         label: type[0] && type[0][0].toUpperCase() + type[0].slice(1),
         makeDefault: true
      });
   });
   //Items.registerSheet("d4eredo", d4eredoItemSheet, { types: ["item"], makeDefault: true });

   console.log("4eRedo | Initialization complete!");
});