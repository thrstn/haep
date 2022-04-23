import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('application', {
  state: () => ({
    playing: false,
  }),

  getters: {

  },

  actions: {
    startPlaying() {
      this.playing = true;
    },

    stopPlaying() {
      this.playing = false;
    },
  },
});
