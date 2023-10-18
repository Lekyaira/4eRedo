import d4eredoBaseSheet from '../../core/d4eredoBaseSheet';
import ItemSheetTemplate from './ItemSheetTemplate.svelte';

export default class d4eredoItemSheet extends d4eredoBaseSheet {
   get item() {
      return this.object;
   }

   constructor(object = {}, options = {}) {
      super(object, options, ItemSheetTemplate);
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
         baseApplication: 'd4eredoItemSheet',
         width: 300,
         height: 200,
      });
   }
}