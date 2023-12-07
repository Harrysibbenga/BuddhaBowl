/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../assets/css/style.css'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#CBDD4D',
          secondary: '#724B8',
          accent: '#698E32',
          error: '#C2331C',
          info: '#EFB630',
          success: '#CBDD4D',
          warning: '#EB5A27',
          black: '#243010',
          white: '#E8DBD2'
        },
      },
    },
  },
})
