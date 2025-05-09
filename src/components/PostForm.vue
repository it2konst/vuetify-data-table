<script lang="ts" setup>
import { defineExpose, defineProps, ref } from 'vue';

interface Post {
  title: string;
  tags: string[];
  published: boolean;
  body: string;
  image: File[];
  name: string;
  calories: number;
}

const props = defineProps<{ post: Partial<Post> }>();

const formEl = ref(null);
const form = ref({
  title: '',
  tags: [],
  published: false,
  body: '',
  image: [],
  name: '',
  calories: 0,
  ...props.post,
});

// eslint-disable-next-line @stylistic/space-before-function-paren
function handleSubmit() {
  console.log('submitting', form.value);
}

const submit = () => handleSubmit();

defineExpose({
  submit,
});
</script>

<template>
  <v-form @submit.prevent="handleSubmit" ref="formEl">
    <v-row align="center">
      <v-col cols="3">
        <v-switch v-model="form.published" label="Published"></v-switch>
      </v-col>
      <v-col cols="3">
        <v-checkbox indeterminate v-model="form.published" label="Published"></v-checkbox>
      </v-col>
    </v-row>
    <v-text-field v-model="form.title" label="Title" />
    <v-combobox
      v-model="form.tags"
      :items="['News', 'Tutorial', 'Event']"
      label="Tags"
      multiple
      chips
    ></v-combobox>
    <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Upload a feature Image"
      prepend-icon="mdi-magnify"
      label="Feature Image"
      v-model="form.image"
    ></v-file-input>
    <v-textarea label="Post Body" v-model="form.body"></v-textarea>
    <v-text-field v-model="form.name" label="Name" />
    <v-text-field v-model="form.calories" label="Calories" />
  </v-form>
</template>
