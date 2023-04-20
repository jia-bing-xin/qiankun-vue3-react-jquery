import locales from "./index"
const _locales: any = { ...locales }
const reducer = (state = { ..._locales.state }, action: { type: string }) => {
    let newState = JSON.parse(JSON.stringify(state))
    for (let key in _locales.actionNames) {
        if (action.type === _locales.actionNames[key]) {
            _locales.actions[action.type](newState, action)
            break
        }
    }
    return newState
}

export default reducer