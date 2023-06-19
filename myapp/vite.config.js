import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 它可以自动引入组件，并按需引入组件的样式。
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
