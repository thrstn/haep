<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          haep
        </q-toolbar-title>

        <q-btn
          icon="mdi-refresh"
          @click="refresh"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  methods: {
    refresh() {
      document.location.reload(true);
    },
  },
});
</script>
