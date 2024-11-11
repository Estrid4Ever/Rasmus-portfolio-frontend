import "../Styles/footer.css";
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <footer>
                <nav>
                    <Link to={"#"}>Instagram</Link>
                    <Link to={"#"}>Linkedin</Link>
                    <Link to={"#"}>Mail</Link>
                </nav>
            </footer>
        </>
    );
}

export default Footer;
