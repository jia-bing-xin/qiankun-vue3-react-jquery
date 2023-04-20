// 初始化样式
import "@/plugins/normalize"
import { createApp } from 'vue'
import qiankunStart from "@/plugins/qiankun";
//引入国际化组件
import i18n from '@/plugins/vueI18n';

import App from './App.vue'

const app = createApp(App)
qiankunStart()
app.use(i18n).mount('#app')