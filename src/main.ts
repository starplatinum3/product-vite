import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { List } from 'vant';

// Vue.use(List);

createApp(App).use(router).
    use(List).
mount('#app')
