import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Getstarted from './components/Getstarted/Getstarted.jsx'
import Feedback from './components/Feedback/FeedbackSystem.jsx'

function App() {
    const router = createBrowserRouter([
        {
            path: '/', element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
                {
                    path: "get-started",
                    element: <Getstarted />
                },
                {
                    path: "feedback",
                    element: <Feedback />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App

