import { SvelteApplication } from '#runtime/svelte/application';
// import { TJSDocument } from '@typhonjs-fvtt/runtime/svelte/store/fvtt';
import ActorSheetTemplate from './ActorSheetTemplate.svelte';

export default class d4eredoActorSheet extends SvelteApplication {
   /**
    * Default Application options
    *
    * @returns {object} options - Application options.
    * @see https://foundryvtt.com/api/Application.html#options
    */
   static get defaultOptions()
   {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: '4eRedo.actor.title',  // Automatically localized from `lang/en.json`.
         width: 850,
         height: 900,

         svelte: {
            class: ActorSheetTemplate,
            target: document.body
         }
      });
   }
}