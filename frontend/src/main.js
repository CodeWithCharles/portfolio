import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.mount('#app')
const API_URL = import.meta.env.VITE_API_URL;
console.log("Backend API URL:", API_URL);
