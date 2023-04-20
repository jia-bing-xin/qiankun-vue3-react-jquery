import { registerMicroApps, start } from 'qiankun';
const apps = [
    {
        name: 'sub-vue3',
        entry: '//localhost:10066',
        container: '#sub-app-container',
        activeRule: '/sub-vue3',
    },
    {
        name: 'sub-react',
        entry: '//localhost:10088',
        container: '#sub-app-container',
        activeRule: '/sub-react',
    },
];
const qiankunStart = () => {
    registerMicroApps(apps);
    start();
}
export default qiankunStart