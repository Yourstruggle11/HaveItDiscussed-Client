export const darkModeReducer = (
    state = {
        isDark: false
    },
    action
) => {
    const { type, payload } = action

    switch (type) {
        case 'DARK':
            return { ...state, isDark: payload }
        default:
            return state
    }
}
