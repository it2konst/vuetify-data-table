<script lang="ts" setup>
import { defineExpose, defineProps, ref } from 'vue';
import type { Post } from '@/types/post';

// Данные из родительского компонента
const props = defineProps<{ post: Partial<Post> }>();

// Данные формы
const form = ref<Partial<Post>>({
  name: '',
  calories: 0,
  title: '',
  tags: [],
  published: false,
  body: '',
  image: [],
  ...props.post,
});

// Варианты тегов
const tagOptions = ['Рецепт', 'Десерт', 'Полезное', 'Быстрое', 'Праздничное'];

// Отправка формы
const handleSubmit = () => {
  console.log('Отправка формы:', form.value);
  // TODO: Сохранить данные (например, отправить на сервер)
  return form.value; // Возвращаем данные для родительского компонента
};

// Доступ к функции отправки
defineExpose({ submit: handleSubmit });
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <!-- Переключатель для "Опубликован" -->
    <v-row align="center" class="mb-4">
      <v-col cols="6">
        <v-switch v-model="form.published" label="Опубликован" color="primary" />
      </v-col>
    </v-row>
    <!-- Поля формы -->
    <v-text-field v-model="form.title" label="Заголовок" class="mb-4" variant="outlined" />
    <v-combobox
      v-model="form.tags"
      :items="tagOptions"
      label="Теги"
      multiple
      chips
      class="mb-4"
      variant="outlined"
    />
    <v-file-input
      v-model="form.image"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Загрузить изображение"
      prepend-icon="mdi-camera"
      label="Изображение"
      class="mb-4"
      variant="outlined"
    />
    <v-textarea v-model="form.body" label="Текст поста" class="mb-4" variant="outlined" />
    <v-text-field
      v-model="form.name"
      label="Название"
      :rules="[(v) => !!v || 'Название обязательно']"
      class="mb-4"
      variant="outlined"
    />
    <v-text-field
      v-model.number="form.calories"
      label="Калории"
      type="number"
      class="mb-4"
      variant="outlined"
    />
  </v-form>
</template>

<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 16px;
}
</style>
