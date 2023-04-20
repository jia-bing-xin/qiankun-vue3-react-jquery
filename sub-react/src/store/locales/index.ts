import zh from 'antd/locale/zh_CN';
import en from 'antd/locale/en_GB';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en-gb';
export default {
    state: {
        lang: en,
        num: 23
    },
    actions: {
        handleChange(state: { lang: object, num: number }, action: any) {
            switch (action.data) {
                case 'zh': state.lang = zh
                case 'en': state.lang = en
            }
            state.num++
        }
    },
    actionNames: {
        handleChange: 'handleChange'
    },
    asyncActions: {
        async asyncChange(a: any, b: any, c: any) {
            console.log(a, b, c)
        }
    }
}