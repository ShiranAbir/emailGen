import './assets/main.scss'

import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
const myApp = createApp(App)
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  myApp.mount('#app')
