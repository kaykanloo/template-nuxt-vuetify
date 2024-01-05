import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import terentiaLightTheme from '~/themes/light'
import terentiaDarkTheme from '~/themes/dark'

import { VBtn } from 'vuetify/components/VBtn'

declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    MyVirtualVBtn: typeof import('vuetify/components')['VBtn']
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'terentiaLightTheme',
      themes: {
        terentiaLightTheme,
        terentiaDarkTheme,
      },
    },
    aliases: {
      MyVirtualVBtn: VBtn,
    },
    defaults: {
      global: {
        ripple: false,
      },
      VBtn: {
        color: 'primary',
      },
      VAppBar: {
        VBtn: {
          color: undefined,
        }
      },
      MyVirtualVBtn: {
        rounded: true,
      },
    },
  })
  app.vueApp.use(vuetify)
})
