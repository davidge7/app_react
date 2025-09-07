function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <p>© {year} MyWebsite | Contact: info@mywebsite.com</p>
        </footer>
    );
}

export default Footer;
