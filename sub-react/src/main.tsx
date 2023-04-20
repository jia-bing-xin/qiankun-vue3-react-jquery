//引入初始化css reset、antd
import '@/plugins/reset'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//引入route
import { BrowserRouter } from 'react-router-dom'
// 初始化多语言
import '@/plugins/i18next'
//引入antd国际化组件
import zh from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en-gb';
import { ConfigProvider } from 'antd'
//状态管理
import { Provider } from "react-redux";
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zh}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider >
  </React.StrictMode>
)
