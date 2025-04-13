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
        <v-avatar
          image="https://cdn.vuetifyjs.com/images/john.jpg"
          size="72"
        ></v-avatar>
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
