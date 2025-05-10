<script lang="ts" setup>
import { ref } from 'vue';
const drawer = ref(true);
</script>

<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>
          <router-link to="/" class="text-decoration-none on-surface"> Home </router-link>
        </v-toolbar-title>
      </template>
      <template #append>
        <v-menu>
          <template #activator="{ props }">
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

    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-note-outline" title="Posts" to="/posts"> </v-list-item>
        <v-list-item
          prepend-icon="mdi-comment-outline"
          title="Comments"
          to="/comments"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-information-box-outline"
          title="About"
          to="/about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main height="300">
      <div class="pa-5">
        <router-view />
      </div>
    </v-main>
  </v-layout>
</template>
