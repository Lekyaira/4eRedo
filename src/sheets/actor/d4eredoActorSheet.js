import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';
// import { TJSDocument } from '@typhonjs-fvtt/runtime/svelte/store/fvtt';
import ActorSheetTemplate from './ActorSheetTemplate.svelte';

export default class d4eredoActorSheet extends SvelteApplication {
   #component; // Reference to the inner Svelte sheet template
   object; // Reference to the document object (Actor, Item, etc..)
   #document; // Reference to the TJSDocument object that contains object.

   // Svelte template
   get template() {
      return this.svelte.applicationShell;
   }

   constructor(
      object = {},      // This is typically passed in by Foundry
      options = {},     // This is typically passed in by Foundry
      component = false // Sheets derived from d4eredoBaseSheet need to pass
   ) {
      super(options);   // SvelteApplication doesn't need object.

      // Save our document object for later use.
      this.object = object;

      // Create a new TJSDocument using the document object pass in from Founry.
      // This is so that the Svelte component updates reactively.
      // this.#document = new TJSDocument(object, {
      //    delete: this.close.bind(this),
      // });

      // Store the inner sheet template component.
      this.#component = component;
   }

    /**
     * Default Application options
     *
     * @returns {object} options - Application options.
     * @see https://foundryvtt.com/api/Application.html#options
     */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            title: "4eRedo.title", // Automatically localized from `lang/en.json`.
            width: 600,
            height: 400,

            svelte: {
                class: ActorSheetTemplate, // Svelte base template
                target: document.body, // Where we are rendering the sheet
                props: function() {
                    // This allows us to load in default
                    // properties to the sheet.
                    return {
                        // We'll pass in the sheet and the document object
                        sheet: this,
                        doc: this.#document,
                        // The inner sheet template to render
                        component: this.#component,
                    };
                },
            },
        });
    }
}