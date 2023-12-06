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
          primary: '#4CAF50',
          secondary: '#FFC107',
          accent: '#FF5722',
          error: '#F44336',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          black: '#000000',
          white: '#ffffff'
        },
      },
    },
  },
})
