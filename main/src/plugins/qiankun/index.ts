import {
    registerMicroApps,
    start,
    setDefaultMountApp,
    runAfterFirstMounted,
    addGlobalUncaughtErrorHandler
} from 'qiankun';
import store from "@/store";

const microApps = [
    {
        name: 'sub-vue3',
        entry: '//localhost:10066',
        activeRule: '/sub-vue3',
    },
    {
        name: 'sub-react',
        entry: '//localhost:10088',
        activeRule: '/sub-react',
    },
    {
        name: 'sub-jquery',
        entry: '//localhost:10055',
        activeRule: '/sub-jquery',
    },
];

// 初始化qiankun
const qiankunStart = () => {
    // 注册微应用的基础配置信息
    const apps = microApps.map(item => ({
        ...item,
        container: "#container", // 子应用挂载的div
        props: {
            routerBase: item.activeRule, // 下发基础路由
            getGlobalState: store['getGlobalState'], // 下发getGlobalState方法
        },
    }))
    const lifeCycles = {
        beforeLoad: async (app) => {
            //添加全局的未捕获异常处理器
            addGlobalUncaughtErrorHandler((event) => console.log('addGlobalUncaughtErrorHandler', event))
            // 设置主应用启动后默认进入的微应用
            setDefaultMountApp("/sub-vue3");
            console.log('before load', app.name, app)
        },
        beforeMount: [async (app) => {
            console.log('before mount', app.name)
        }],
        afterMount: async (app) => console.log('afterMount', app.name),
        beforeUnmount: async (app) => {
            console.log('beforeUnmount', app.name)
        },
        afterUnmount: async (app) => console.log('afterUnmount', app.name)
    }
    registerMicroApps(apps, lifeCycles)

    // 手动加载一个微应用
    // loadMicroApp(apps, lifeCycles)

    // 手动预加载指定的微应用静态资源
    // prefetchApps([
    //     {
    //         name: 'sub-vue3',
    //         entry: '//localhost:10066',
    //     },
    //     {
    //         name: 'sub-react',
    //         entry: '//localhost:10088',
    //     },
    // ])

    // 启动 qiankun
    const startOpts = {
        prefetch: true, //第一个微应用 mount后预加载其他微应用的静态资源
        sandbox: {   //为子应用样式限定其影响范围
            // strictStyleIsolation: true,
            experimentalStyleIsolation: true
        },
        singular: true, //是否为单实例场景
        fetch(url, options) {
            if (url.startsWith('/api')) {
                return fetch(`https://api.example.com${url}`, options);
            }
            return fetch(url, options);
        },
    }
    start(startOpts)

    // 第一个微应用 mount 后调用的方法
    runAfterFirstMounted(() => {
        console.log('runAfterFirstMounted');
    })
}
export default qiankunStart
