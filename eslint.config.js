// export { default } from 'eslint-config-vuetify/index.ts.mjs'

import vuetify from 'eslint-config-vuetify/index.ts.mjs';

export default [
  ...vuetify, // Распаковываем настройки из eslint-config-vuetify
  {
    rules: {
      'vue/html-self-closing': 'off', // Отключаем правило, чтобы пользовательские компоненты Vue.js (например, <v-avatar>) были самозакрывающимися.
    },
  },
];
