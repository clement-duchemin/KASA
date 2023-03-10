import logo from "../../assets/LOGO.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="headerWrapper">
            <div className="headerWrapper__logo">
                <img src={logo} alt="logo Kasa" />
            </div>
        <nav className="nav-header">
			<Link to="/kasa/" className="nav-header_link-home">
				Accueil
			</Link>
			<Link to="/about" className="nav-header_link-about">
				A Propos
			</Link>
		</nav>
        </header>
    )
}

export default Header;