import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from '../src/store'
createApp(App)
    .use(store)
    .use(router)
    .use(Antd)
    .use(ElementPlus)
    .mount('#app')