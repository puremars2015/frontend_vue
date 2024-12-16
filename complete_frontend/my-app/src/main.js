import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



  
const app = createApp(App)

// 在開發模式下強制啟用 devtools
app.config.devtools = true;

app.use(router).mount('#app');

if (process.env.NODE_ENV === 'development') {
    console.log('Vue DevTools is enabled');
  }
  