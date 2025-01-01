import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import mdiVue from 'mdi-vue/v3'
import * as mdiJs from '@mdi/js'
import './index.css'

const app = createApp(App)
app.use(mdiVue, { icons: mdiJs })
app.use(createPinia())
app.use(router)

app.mount('#app')
