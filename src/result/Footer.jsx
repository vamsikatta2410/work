import React from 'react'
import {FaTwitter,FaFacebookF,FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="style-6 border-top brd-gray">
            <div className="container">
                <div className="row gx-0 justify-content-between">
                    <div className="col-lg-3 col-sm-6">
                        <div className="items">
                            <div className="title">
                                Bsearch
                                {/* - Best for SEO/Marketing */}
                            </div>
                            <ul>
                                <li className="color-666 mb-2">
                                    <i className="bi bi-house me-1" />
                                    <small>223 Thatcher Road St, Manhattan</small>
                                </li>
                                <li className="color-666 mb-2">
                                    <i className="bi bi-phone me-1" />
                                    <small>+031 5689 89 98</small>
                                </li>
                                <li className="color-666 mb-2">
                                    <i className="bi bi-envelope me-1" />
                                    <small>contact@itecksolution.co</small>
                                </li>
                            </ul>
                            <div className="socail-icons">
                                <a
                                    href="twiter.html"
                                    className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="facebook.html"
                                    className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="instagram.html"
                                    className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="items">
                            <div className="title">Services</div>
                            <ul>
                                <li>
                                    <a href="#">SEO Analysis</a>
                                </li>
                                <li>
                                    <a href="#">Content Strategy</a>
                                </li>
                                <li>
                                    <a href="#">Growth Hacking</a>
                                </li>
                                <li>
                                    <a href="#">Social Media</a>
                                </li>
                                <li>
                                    <a href="#">Web Design &amp; Develoment</a>
                                </li>
                                <li>
                                    <a href="#">Google/FB Ads</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="items">
                            <div className="title">Information</div>
                            <ul>
                                <li>
                                    <a href="page-about-5.html"> About Bsearch </a>
                                </li>
                                <li>
                                    <a href="#"> Investors </a>
                                </li>
                                <li>
                                    <a href="page-blog-5.html"> Blog </a>
                                </li>
                                <li>
                                    <a href="page-contact-5.html"> Contact </a>
                                </li>
                                <li>
                                    <a href="page-about-5.html"> How It Works </a>
                                </li>
                                <li>
                                    <a href="#"> Pricing Plan </a>
                                </li>
                                <li>
                                    <a href="#"> Covid-19 Update </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="items">
                            <div className="title">Newsletter</div>
                            <small className="color-666">
                                Register now to get latest updates on <br /> promotions
                                &amp; coupons.{' '}
                            </small>
                            {/* <form action="https://iteck-html.themescamp.com/contact.php" className="form mt-30" method="post">
<div className="form-group">
  <span className="icon">
    <i className="bi bi-envelope" />
  </span>
  <input type="text" placeholder="Enter your email" />
  <button> <i className="bi bi-send" /> </button>
</div>
</form>
<small className="color-666 fst-italic mt-20">By subscribing, you accepted our <a href="#" className="fst-normal text-dark">Policy.</a> </small> */}
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            {/* <div className="logo">
<img src={logo} alt="" />
</div> */}
                        </div>
                        <div className="col-lg-6">
                            <small className="small d-flex justify-content-center">
                                <p>
                                    © 2023 Copyrights by{' '}
                                    <span className="fw-bold text-decoration-underline">
                                        {' '}
                                        Bsearch{' '}
                                    </span>{' '}
                                    All Rights Reserved.
                                </p>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer