import Nav from "./components/Nav/Nav.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
