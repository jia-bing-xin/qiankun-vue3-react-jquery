import React from 'react'
import ReactDOM from 'react-dom/client'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App from './App'

let instance: ReactDOM.Root | null

function render(props: any = {}) {
  const { container } = props;
  const target: HTMLElement = container
    ? container.querySelector('#root')
    : document.querySelector('#root');
  instance = ReactDOM.createRoot(target)
  instance.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}
renderWithQiankun({
  mount(props) {
    console.log("viteapp mount");
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount() {
    console.log("vite被卸载了");
    instance!.unmount();
    instance = null
  },
  update: function (): void | Promise<void> {
    throw new Error('Function not implemented.');
  }
});
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
  console.log('我不是作为子应用运行')
}