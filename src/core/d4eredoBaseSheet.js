import { SvelteApplication } from '#runtime/svelte/application';
import BaseSheetTemplate from './BaseSheetTemplate.svelte';

export default class d4eredoBaseSheet extends SvelteApplication {
   #component; // Reference to the inner Svelte sheet template
   object;

   get template() {
      return this.svelte.applicationShell;
   }

   constructor(
      object = {},      // This is typically passed in by Foundry
      options = {},     // This is typically passed in by Foundry
      component = false // Sheets derived from d4eredoBaseSheet need to pass
                        // in the inner sheet template.
   ) {
      super(options);   // SvelteApplication doesn't need object.

      // Save our document for later use
      this.object = object;

      // Store the inner sheet template component.
      this.#component = component;
   }

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
         width: 400,
         height: 400,

         svelte: {
            class: BaseSheetTemplate,
            target: document.body,
            props: function() {
               // This allows us to load in default properties to the sheet.
               return {
                  // We'll pass in the sheet
                  sheet: this,
                  // The inner sheet template to render
                  component: this.#component,
               };
            },
         },
      });
   }
}