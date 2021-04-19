/*
 * @Author: your name
 * @Date: 2021-04-19 09:27:47
 * @LastEditTime: 2021-04-19 14:09:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'


createApp(App).use(router).use(store).mount('#app')
