import { App, createApp } from 'vue'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper';
import './style.css'
import App from './App.vue'

// 定义渲染函数
// function render(props: any) {
//     const { container } = props;
//     // 挂载应用
// createApp(App).mount(container);
// }

let instance: App<Element> | null = null;
function render(props = {}) {
    const { container } = props;
    instance = createApp(App);
    //   instance.use(store);
    instance.mount(container ? container.querySelector('#app') : document.getElementById("app"));
    if (qiankunWindow.__POWERED_BY_QIANKUN__) {
        console.log('我正在作为子应用运行')
    }
}
renderWithQiankun({
    mount(props) {
        console.log("viteapp mount");
        render(props);
        // console.log(instance.config.globalProperties.$route,"444444444");
    },
    bootstrap() {
        console.log('bootstrap');
    },
    unmount() {
        console.log("vite被卸载了");
        instance.unmount();
        // instance._container.innerHTML = '';
        instance = null;
    },
    update: function (props: QiankunProps): void | Promise<void> {
        throw new Error('Function not implemented.');
    }
});
