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
  <!-- <v-table :height="300" :fixed-header="true" density="comfortable" :hover="true">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in posts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table> -->
  <!-- sortable: false -->
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
  />

  <!-- :item-value="(item) => item.name + item.calories" -->
  <!-- v-model="selected" -->
</template>
