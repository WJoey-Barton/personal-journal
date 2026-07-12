import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/planning">Planning</NavLink>
            <NavLink to="/journal">Journal</NavLink>
        </nav>
    );
}

export default NavBar;