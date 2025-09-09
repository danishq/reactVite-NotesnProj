import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'

function App() {

    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }
    const darkTheme = () => {
        setThemeMode("dark")
    }

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className='bg-gray-900 flex justify-center items-center h-screen'>
                <h1 className='text-4xl text-blue-200'>Theme Switch</h1>
            </div>
        </ThemeProvider>
    )
}

export default App
