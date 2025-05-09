export interface Post {
  name: string; // Название
  calories: number; // Калории
  title?: string; // Заголовок (необязательный)
  tags?: string[]; // Теги (необязательные)
  published?: boolean; // Опубликован ли пост (необязательный)
  body?: string; // Текст поста (необязательный)
  image?: File[]; // Изображение (необязательное)
}
