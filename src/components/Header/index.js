import Navtabs from "../Navtabs"
import logo from "./logo.png"
import "./header.css"

function Header() {
return (
<header>
<div className="logozone">
<img src={logo} alt="logo"/>
<h2>CG Sibey Design</h2>
</div>
<Navtabs></Navtabs>
</header>
)};

export default Header;
