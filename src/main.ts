import './assets/main.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Menubar', Menubar);
app.component('Button', Button);

app.mount('#app')
