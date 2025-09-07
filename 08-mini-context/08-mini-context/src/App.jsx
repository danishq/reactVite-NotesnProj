import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

    return (
        <div className='flex flex-col justify-center items-center h-dvh bg-gray-900'>
            < UserContextProvider >
                <Login />
                <Profile />
            </UserContextProvider>
        </div>
    )
}

export default App
