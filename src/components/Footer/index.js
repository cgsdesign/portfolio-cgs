import "./footer.css"
import linkedin from "../../assets/images/linkedin.png"
import github from "../../assets/images/github.png"

function Footer() {
    return (
        <footer>
            <a href="https://github.com/cgsdesign" target="_blank">
                <img alt="linkedin link" src={linkedin} />
            </a>
            <a href="https://github.com/cgsdesign" target="_blank">
                <img alt="github link" src={github} />
            </a>   
        </footer>
    )
}

export default Footer;