import Link from "next/link";

export default function FooterAreaSection() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-up">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="/" className="logo">MWCarving</Link>
                            <p>Exceptional Wood Carving Art <br/> Handcrafted by Master Artisans
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5>Studio</h5>
                            <p>Main Workshop- <br/>
                                Address
                            </p>
                            <div className="company-email">
                                <a href="mailto:info@mwcarving.com">info@mwcarving.com</a>
                            </div>
                            <div className="phone-number">
                                <p>+1-503-555-7890</p>
                            </div>

                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <Link href="/about">About</Link>
                                    <Link href="/projects">Gallery</Link>
                                    <Link href="/services">Craftsmanship</Link>
                                    <Link href="/contact">Contact</Link>
                                    <Link href="/faq">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5>Connect</h5>
                            <ul>
                                <li>
                                    <div className="social-area">
                                        <a href="#"><i className="lab la-facebook-f"></i>Facebook</a>
                                        <a href="#"><i className="lab la-instagram"></i>Instagram</a>
                                        <a href="#"><i className="lab la-pinterest"></i>Pinterest</a>
                                        <a href="#"><i className="lab la-youtube"></i>YouTube</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}