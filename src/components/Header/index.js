import Navtabs from "../Navtabs"
import logo from "./logo.png"
import "./header.css"

function Header(props) {
    const {
        currentPage={currentPage},
        handlePageChange={handlePageChange}
      } = props;
return (
<header>
<div className="logozone">
<img src={logo} alt="logo"/>
<h2>CG Sibey Design</h2>
</div>
<Navtabs currentPage={currentPage} handlePageChange={handlePageChange}></Navtabs>
</header>
)};

export default Header;
