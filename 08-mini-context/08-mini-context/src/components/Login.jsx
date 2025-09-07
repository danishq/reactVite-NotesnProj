import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div className='flex flex-col'>
            <h2 className="bg-amber-500 text-5xl text-center p-10">Login</h2>
            <div className='flex flex-col justify-center items-center'>
                <input className="bg-blue-100 p-5" type="text" name="" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
                <input className="bg-fuchsia-300 p-5" type="text" name="" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                <button className='px-10 py-5 bg-gray-500 hover:cursor-pointer hover:bg-amber-900' type="button" onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    )
}
export default Login
