import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
const API_URL = import.meta.env.VITE_API_URL;
console.log("Backend API URL:", API_URL);
