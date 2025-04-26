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
</script>
<template>
  <h2>Posts</h2>
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
      { title: 'Name', align: 'center', key: 'name' },
      { title: 'Calories', align: 'center', key: 'calories' },
    ]"
    :items="posts"
  />
</template>
