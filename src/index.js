import d4eredoActor from './d4eredoActor.js';
import d4eredoActorSheet from './sheets/actor/d4eredoActorSheet.js';

Hooks.once("init", async () => {
   console.log("4eRedo | Initializing system...");

   // Unregister existing default sheets
   console.log("4eRedo | Unregistering sheets...");
   Actors.unregisterSheet("core", ActorSheet);

   // Set classes
   console.log("4eRedo | Setting up classes...");
   CONFIG.Actor.documentClass = d4eredoActor;

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
   
   console.log("4eRedo | Initialization complete!");
});