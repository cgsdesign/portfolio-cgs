import "./footer.css"
import linkedin from "../../assets/images/linkedin.png"
import github from "../../assets/images/github.png"
import codepen from "../../assets/images/codepen.png"

function Footer() {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/catherine-sibley-93677926/" target="_blank" rel="noreferrer">
                <img alt="linkedin link" src={linkedin} />
            </a>
            <a href="https://github.com/cgsdesign" target="_blank" rel="noreferrer">
                <img alt="github link" src={github} />
            </a>   
        </footer>
    )
}

export default Footer;