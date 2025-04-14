<!-- <template>
  <HelloWorld />
</template>

<script lang="ts" setup>
  //
</script> -->

<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar title="Application bar">
      <template #append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-avatar v-bind="props" size="50" color="surface-variant">
              <span>DK</span>
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

    <v-navigation-drawer>
      <v-list nav>
        <v-list-item title="Navigation drawer" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" height="300">
      <RouterView />
    </v-main>
  </v-layout>
</template>
