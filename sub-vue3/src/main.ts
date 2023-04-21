import { createApp } from 'vue'
// import './public-path';
import './style.css'
import App from './App.vue'

// 定义渲染函数
function render(props: any) {
    const { container } = props;
    // 挂载应用
    createApp(App).mount(container);
}

// 导出生命周期方法
export async function bootstrap() {
    console.log('Vue app1 is bootstrapping...');
}

export async function mount(props: any) {
    console.log('Vue app1 is mounting...', props);
    render(props);
}

export async function unmount(props: any) {
    console.log('Vue app1 is unmounting...', props);
}
