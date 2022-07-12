import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { List } from 'vant';
// import installElementPlus from './plugins/element'


// 新增代码：引入全部组件及样式
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'


// Vue.use(List);

createApp(App).use(router).
    use(List).
    use(ElementPlus).
mount('#app')
