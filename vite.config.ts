import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, ''),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
        require('postcss-import'),
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            },
          },
        },
      ],
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/assets/scss/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        // presets
        'vue',
        'vue-router',
        'pinia',
      ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      dts: true,
      directoryAsNamespace: true,
      globalNamespaces: ['layout'],
      dirs: ['src/layout', 'src/components'],
    }),
    createSvgIconsPlugin({
      // config svg dir that can config multi
      iconDirs: [
        path.resolve(process.cwd(), 'src/components/Icon/common'),
      ],
      // appoint svg icon using mode
      symbolId: 'icon-[dir]-[name]',
    }),
    checker({
      vueTsc: true,
    }),
  ],
})
