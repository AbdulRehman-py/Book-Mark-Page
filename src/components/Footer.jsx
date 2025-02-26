import "./footer.css";


const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer-logo">
                    <img src="/public/images/logo-bookmark.svg" className='logo-2' alt="Bookmark Logo"
                   />
                </div>
                <ul className="footer-links">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                </ul>
                <div className="footer-social">
                    <img className='icon' src="/public/images/icon-facebook.svg" alt="Facebook Icon" />
                    <img className='icon' src="/public/images/icon-twitter.svg" alt="Twitter Icon" />
                </div>
           
        </footer>
    );
}

export default Footer;