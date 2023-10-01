import d4eredoBaseSheet from '../../core/d4eredoBaseSheet';
import ActorSheetTemplate from './ActorSheetTemplate.svelte';

export default class d4eredoActorSheet extends d4eredoBaseSheet {
   get actor() {
      return this.object;
   }

   constructor(object = {}, options = {}) {
      super(object, options, ActorSheetTemplate);
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
         baseApplication: 'ActorSheet',
         width: 850,
         height: 900,
      });
   }
}