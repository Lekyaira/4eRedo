import d4eredoBaseSheet from '../../core/d4eredoBaseSheet';
import FeatSheetTemplate from './FeatSheetTemplate.svelte';

export default class d4eredoFeatSheet extends d4eredoBaseSheet {
   get feat() {
      return this.object;
   }

   constructor(object = {}, options = {}) {
      super(object, options, FeatSheetTemplate);
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
         baseApplication: 'd4eredoFeatSheet',
         width: 300,
         height: 200,
      });
   }
}