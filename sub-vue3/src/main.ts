// 初始化样式
import "@/plugins/normalize"
import { createApp } from 'vue'
import type { App as app } from "vue";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App from './App.vue'

let instance: app<Element> | null;
function render(props: any = {}) {
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
    },
    bootstrap() {
        console.log('bootstrap');
    },
    unmount() {
        console.log("vite被卸载了");
        instance?.unmount();
        instance = null;
    },
    update: function (): void | Promise<void> {
        throw new Error('Function not implemented.');
    }
});
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
    console.log('我不是作为子应用运行')
}