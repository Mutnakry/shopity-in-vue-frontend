import { createApp } from 'vue'

import App from './App.vue'
import router from './router/Index' 
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; // Import the Toast CSS
// add this
import './index.css'
import 'flowbite';

const app = createApp(App)
app.use(Toast);
app.use(router)
app.mount('#app')
