import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css';
import './assets/css/global.css';
import "leaflet/dist/leaflet.css"
import router from "./router"

createApp(App).use(router).mount('#app')
