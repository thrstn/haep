<template>
  <q-page padding>
    <q-list separator>
      <YTPlayer
        v-for="a in audio"
        :id="a.id"
        :key="a.id"
        :title="a.title"
        :start="a.start"
      />
    </q-list>
  </q-page>
</template>

<script>
import database from 'assets/database.json';

import { defineComponent } from 'vue';
import { useApplicationStore } from 'stores/application';
import YTPlayer from 'components/YTPlayer.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { YTPlayer },

  setup() {
    const applicationStore = useApplicationStore();
    return { applicationStore };
  },

  data() {
    return {
      audio: null,
    };
  },

  created() {
    this.audio = database;
  },
});
</script>
