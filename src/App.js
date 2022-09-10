import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navigator from './Navigator'

function App() {
    const dispatch = useDispatch()
    const { isDark } = useSelector((state) => state.darkMode)
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            dispatch({ type: 'DARK', payload: true })
        } else {
            document.documentElement.classList.remove('dark')
            dispatch({ type: 'DARK', payload: false })
        }
    }, [isDark, dispatch])

    return <Navigator />
}

export default App
