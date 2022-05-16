import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetMini from '@unocss/preset-mini'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetWind(),
        presetMini(),
        presetUno(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      rules: [
      ],
      shortcuts: {
        'grid-layout': 'grid grid-cols-2 gap-4 px-2 pt-3 pb-5',
        'flex-layout': 'flex flex-col px-2 pb-5', 
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@stores": resolve(__dirname, "src/stores"),
      "@assets": resolve(__dirname, "src/assets"),
      "@utils": resolve(__dirname, "src/utils"),
      "@models": resolve(__dirname, "src/models"),
      "@hooks": resolve(__dirname, "src/hooks"),
    }
  }
})
