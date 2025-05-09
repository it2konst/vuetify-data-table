<script lang="ts" setup>
import { ref } from 'vue';
import PostForm from '@/components/PostForm.vue';
import type { Post } from '@/types/post';

// Интерфейс для заголовков таблицы (если тип VDataTable недоступен)
interface DataTableHeader {
  title: string;
  key: string;
  align?: 'start' | 'center' | 'end';
}

// Список постов (в будущем можно брать из API)
const posts = ref<Post[]>([
  { name: 'Шоколадный торт', calories: 420 },
  { name: 'Клубничный мусс', calories: 180 },
  { name: 'Ванильное мороженое', calories: 250 },
  { name: 'Малиновый пирог', calories: 320 },
  { name: 'Карамельный пудинг', calories: 280 },
  { name: 'Лимонный чизкейк', calories: 360 },
  { name: 'Ореховое печенье', calories: 200 },
  { name: 'Тирамису', calories: 450 },
  { name: 'Яблочный сок', calories: 310 },
  { name: 'Кокосовый макарун', calories: 160 },
  { name: 'Банановый кекс', calories: 290 },
  { name: 'Мятный сироп', calories: 140 },
  { name: 'Кофейный эклер', calories: 270 },
  { name: 'Персиковый торт', calories: 340 },
  { name: 'Маршмеллоу', calories: 120 },
]);

// Выбранные посты
const selectedPosts = ref<string[]>([]);
// Поле для поиска
const searchQuery = ref('');
// Ссылка на компонент формы
const postFormRef = ref<InstanceType<typeof PostForm> | null>(null);

// Сохранение формы и закрытие окна
const handleSave = async (isActive: any) => {
  try {
    postFormRef.value?.submit(); // Отправляем форму
    isActive.value = false; // Закрываем окно
  } catch (error) {
    console.error('Ошибка при сохранении:', error);
    // TODO: Показать пользователю ошибку (например, всплывающее сообщение)
  }
};

// Заголовки таблицы с явной типизацией
const headers: DataTableHeader[] = [
  { title: 'Название', align: 'start', key: 'name' },
  { title: 'Калории', align: 'start', key: 'calories' },
];
</script>

<template>
  <h2>Посты</h2>
  <!-- Поле для поиска -->
  <v-text-field
    v-model="searchQuery"
    append-icon="mdi-magnify"
    label="Поиск"
    single-line
    hide-details
    class="mb-4"
  />

  <!-- Таблица с постами -->
  <v-data-table
    :headers="headers"
    :items="posts"
    :search="searchQuery"
    show-select
    item-value="name"
    v-model="selectedPosts"
  >
    <!-- Колонка с названием поста -->
    <template #item.name="{ item }">
      <v-dialog max-width="80%" aria-label="Редактировать пост">
        <template #activator="{ props: activatorProps }">
          <button v-bind="activatorProps" class="text-primary">
            {{ item.name }}
          </button>
        </template>
        <template #default="{ isActive }">
          <v-card title="Редактировать пост">
            <v-card-text>
              <PostForm ref="postFormRef" :post="item" />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text="Отмена" @click="isActive.value = false" />
              <v-btn
                color="primary"
                variant="flat"
                text="Сохранить"
                @click="handleSave(isActive)"
              />
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-data-table>
</template>

<style lang="scss" scoped>
.text-primary {
  font-size: 1rem;
  color: var(--v-theme-primary);
}
</style>
