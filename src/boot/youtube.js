import { boot } from 'quasar/wrappers';
import Youtube from 'vue3-youtube';

export default boot(async ({ app }) => {
  app.component('YouTube', Youtube);
});
