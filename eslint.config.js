// export { default } from 'eslint-config-vuetify/index.ts.mjs'

// Импортируем базовую конфигурацию ESLint от Vuetify 3
import vuetifyConfig from 'eslint-config-vuetify/index.ts.mjs';

export default [
  // Распаковываем настройки Vuetify (чтобы сохранить все стандартные правила)
  ...vuetifyConfig,

  // Дополнительные кастомные правила/переопределения
  {
    rules: {
      // Отключает требование самозакрывающихся тегов для Vue-компонентов
      // Теперь можно писать как <MyComponent></MyComponent>, так и <MyComponent />
      'vue/html-self-closing': 'off',

      // Отключает проверку порядка атрибутов в тегах
      // Пример: больше не будет ругаться, если `title` идет перед `link`
      'vue/attributes-order': 'off',

      // Отключает проверку языка в блоках <script>/<style>
      // Теперь не требует явного указания lang="ts" или lang="scss"
      'vue/block-lang': 'off',

      // Отключает требование многословных имён компонентов
      // Разрешает имена из одного слова (например, "Home" вместо "HomeView")
      'vue/multi-word-component-names': 'off',

      // Отключает проверку отступов в секции <script>
      // Теперь можно использовать любые отступы (0, 2, 4 пробела и т. д.)
      'vue/script-indent': 'off',
    },
  },
];
