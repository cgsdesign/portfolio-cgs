import Navtabs from "../Navtabs"
import logo from "./logo.png"
import "./header.css"

function Header(props) {
return (
<header>
<div className="logozone">
<img src={logo} alt="logo"/>
<h2>CG Sibley Design</h2>
</div>
<Navtabs currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Navtabs>
</header>
)};

export default Header;
