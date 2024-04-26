import { Link } from "react-router-dom"
import { Outlet, } from "react-router-dom"

export default function NavBar() {
    return <nav>
        <ul>
            <li><Link to={'/home'} >HOME</Link></li>
            <li><Link to={'/contact'} >CONTACT</Link></li>
        </ul>
        <Outlet />
    </nav>
}