import './assets/main.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Menubar', Menubar);
app.component('Button', Button);
app.component('Rating', Rating);
app.component('InputText', InputText);
app.component('Textarea', Textarea);

app.mount('#app')
