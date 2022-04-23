<template>
  <q-item>
    <q-item-section>
      {{ title }}
    </q-item-section>

    <q-item-section
      v-if="loaded"
      side
      class="relative-position"
    >
      <YouTube
        ref="player"
        width="50"
        height="30"
        class="col-shrink"
        :src="id"
        :vars="vars"
        @ready="atReady"
        @state-change="atStateChange"
      />
      <div class="z-top absolute-full" />
    </q-item-section>

    <q-item-section side>
      <q-btn
        v-if="!loaded"
        color="warning"
        icon="mdi-play"
        :disable="playing"
        @click="load"
      />

      <q-btn
        v-if="!currentPlaying && loaded"
        color="primary"
        icon="mdi-play"
        :disable="playing || !loaded"
        @click="play"
      />

      <q-btn
        v-if="currentPlaying"
        color="secondary"
        icon="mdi-stop"
        @click="stop"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapWritableState } from 'pinia';
import { useApplicationStore } from 'stores/application';

export default defineComponent({
  name: 'YTPlayer',

  props: {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: '',
    },

    start: {
      type: String,
      default: '0',
    },

    end: {
      type: [String, Boolean],
      default: false,
    },
  },

  setup() {
    const applicationStore = useApplicationStore();
    return { applicationStore };
  },

  data() {
    return {
      loaded: false,
      currentPlaying: false,
      vars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        loop: 0,
        modestbranding: 1,
        rel: 0,
      },
    };
  },

  computed: {
    ...mapWritableState(useApplicationStore, ['playing']),
  },

  methods: {
    ...mapActions(useApplicationStore, ['startPlaying', 'stopPlaying']),

    load() {
      this.loaded = true;
    },

    play() {
      this.$refs.player.seekTo(this.start, true);
      this.startPlaying();
      this.currentPlaying = true;
    },

    stop() {
      this.$refs.player.stopVideo();
      this.stopPlaying();
      this.currentPlaying = false;
      this.loaded = false;
    },

    atReady() {
      this.play();
    },

    atStateChange(event) {
      // End of video
      if (event.data === 0) {
        this.stop();
      }
    },
  },
});
</script>

<style scoped>

</style>
