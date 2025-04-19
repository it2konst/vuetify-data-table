<script lang="ts" setup>
import { ref } from 'vue';
const drawer = ref(false);
</script>

<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>
          <router-link to="/" class="text-decoration-none on-surface text-subtitle-1"> Home </router-link>
        </v-toolbar-title>
      </template>
      <template #append>
        <v-menu>
          <template #activator="{ props }">
            <!--#prepend --- variant="tonal" -->
            <v-avatar v-bind="props" color="primary" size="40" rounded="lg">
              <span class="text-h5">KB</span>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in ['Profile', 'Settings', 'Logout']"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover rail v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-note-outline" title="Posts" to="/posts"> </v-list-item>
        <v-list-item prepend-icon="mdi-comment-outline" title="Comments" to="/comments"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" height="300">
      <router-view />
    </v-main>
  </v-layout>
</template>
