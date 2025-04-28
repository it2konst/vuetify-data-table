<script lang="ts" setup>
import { ref } from 'vue';
const posts = ref([
  { name: 'Frozen Yogurt', calories: 159 },
  { name: 'Ice cream sandwich', calories: 237 },
  { name: 'Eclair', calories: 262 },
  { name: 'Cupcake', calories: 305 },
  { name: 'Gingerbread', calories: 356 },
  { name: 'Jelly bean', calories: 375 },
  { name: 'Lollipop', calories: 392 },
  { name: 'Honeycomb', calories: 408 },
  { name: 'Donut', calories: 452 },
  { name: 'KitKat', calories: 518 },
]);

const selected = ref([]);
const search = ref('');
</script>
<template>
  <h2>Posts</h2>
  <!-- {{ selected }} -->
  <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  ></v-text-field>

  <v-data-table
    :headers="[
      { title: 'Name', align: 'start', key: 'name' },
      { title: 'Calories', align: 'start', key: 'calories' },
    ]"
    :items="posts"
    show-select
    item-value="name"
    v-model="selected"
    :search="search"
  >
    <template #item.name="{ item }">
      <v-dialog max-width="500">
        <template #activator="{ props: activatorProps }">
          <span v-bind="activatorProps"> {{ item.name }}</span>
        </template>

        <template #default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-data-table>
</template>
