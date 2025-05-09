<script lang="ts" setup>
import { ref } from 'vue';
import PostForm from '@/components/PostForm.vue';

interface Post {
  name: string;
  calories: number;
}

const posts = ref<Post[]>([
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

const selectedPosts = ref<string[]>([]);
const searchQuery = ref('');
const postFormRef = ref();
</script>

<template>
  <h2>Posts</h2>
  <!-- {{ selected }} -->
  <v-text-field
    v-model="searchQuery"
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
    v-model="selectedPosts"
    :search="searchQuery"
  >
    <template #item.name="{ item }">
      <v-dialog max-width="80%">
        <template #activator="{ props: activatorProps }">
          <button v-bind="activatorProps">{{ item.name }}</button>
        </template>
        <template #default="{ isActive }">
          <v-card title="Edit Post">
            <v-card-text>
              <PostForm ref="postFormRef" :post="item" />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
              <v-btn
                color="blue"
                variant="flat"
                text="Save Post"
                @click="
                  try {
                    postFormRef.submit();
                    isActive.value = false;
                  } catch (error) {
                    console.error('Error during form submission:', error);
                  }
                "
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-data-table>
</template>
