import React from 'react'

import './../assets/css/bootstrap.min.css'
import './../assets/css/animate.css'
import './../assets/css/custom-animation.css'
import './../assets/css/slick.css'
import './../assets/css/nice-select.css'
import './../assets/css/flaticon.css'
import './../assets/css/swiper-bundle.css'
import './../assets/css/meanmenu.css'
import './../assets/css/font-awesome-pro.css'
import './../assets/css/magnific-popup.css'
import './../assets/css/spacing.css'
import './../assets/css/style.css'
import './../New Home/Style.css'

import logo from '../assets/google.png'
import projectinner4 from '../assets/img/project/project-inner-4.jpg'
import projectinner5 from '../assets/img/project/project-inner-5.jpg'
import projectinner6 from '../assets/img/project/project-inner-6.jpg'
import projectinner7 from '../assets/img/project/project-inner-7.jpg'

// importing breadcrumb 
import breadcrumbshape1 from '../assets/img/breadcrumb/breadcrumb-shape-1.png'
import breadcrumbshape2 from '../assets/img/breadcrumb/breadcrumb-shape-2.png'

// importing contact 
import contactsm1 from '../assets/img/contact/contact-icon-sm-1.png'
import contactsm2 from '../assets/img/contact/contact-icon-sm-2.png'
import contactsm3 from '../assets/img/contact/contact-icon-sm-3.png'
import contactsm4 from '../assets/img/contact/contact-icon-sm-4.png'
import contactsm5 from '../assets/img/contact/contact-icon-sm-5.png'
import contactsm6 from '../assets/img/contact/contact-icon-sm-6.png'
import contactsm7 from '../assets/img/contact/contact-icon-sm-7.png'
import contactbanner from '../assets/img/contact/contact-banner.jpg'

// importing footer 
import footerinner1 from '../assets/img/footer/footer-inner-1.png'
import footerinner2 from '../assets/img/footer/footer-inner-2.png'

// importing cta 
import ctabg from '../assets/img/cta/cta-bg.jpg'
import Footer from './Footer'

const Business = () => {
    return (
        <body>

            <header className="header-bottom__transparent z-index-6 tp-header-height">
                <div className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-6">
                                <div className="header-top__link">
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-top__support text-end">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky"
                    className="header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                                <div className="header-bottom__main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li>
                                                <a href="/home" style={{color:'#fff'}}>Home</a>
                                            </li>
                                            <li>
                                                <a href="#" style={{color:'#fff'}}>Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="service.html">Service</a></li>
                                                    <li><a href="service-details.html">Service Details</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                    <li><a href="career.html">Career</a></li>
                                                    <li><a href="career-details.html">Career Details</a></li>
                                                    <li><a href="integrations.html">Integrations</a></li>
                                                    <li><a href="price.html">Price</a></li>
                                                    <li><a href="register.html">Register</a></li>
                                                    <li><a href="sign-in.html">Signin</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog-details.html" style={{color:'#fff'}}>Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="blog-details-2.html">Blog Details 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="project-details.html" style={{color:'#fff'}}>Projects</a>
                                                <ul className="submenu">
                                                    <li><a href="project.html">Project</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                    <div className="header-bottom__action">
                                        <a className="d-none d-md-inline-block search-open-btn" href="javascript:void(0)" style={{color:'white'}}>

                                        </a>
                                        <a className="d-none d-lg-inline-block last-child" href="/login">
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" color='white'
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <span style={{color:'#fff'}}>Log In</span>
                                        </a>
                                    </div>
                                    <div className="header-bottom__btn d-flex align-items-center">
                                        <a className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block"
                                            href="service-details.html">
                                            <span className="white-text">Get Started</span>
                                            <b></b>
                                        </a>
                                        <a className="header-bottom__bar d-lg-none tp-menu-bar" href="javascript:void(0)"><i
                                            className="fal fa-bars"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="far fa-angle-double-up"></i>
            </button>

            <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                        <a href="index.html">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="mobile-menu"></div>
                    <div className="tpoffcanvas__instagram text-center">
                        <div className="tpoffcanvas__instagram-title">
                            <h4>instagram</h4>
                        </div>
                        <a href="#"><img src={projectinner4} alt="" /></a>
                        <a href="#"><img src={projectinner5} alt="" /></a>
                        <a href="#"><img src={projectinner6} alt="" /></a>
                        <a href="#"><img src={projectinner7} alt="" /></a>
                    </div>
                    <div className="tpoffcanvas__info text-center">
                        <h4 className="offcanva-title">we are here</h4>
                        <a href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank">
                            27 Division St, New York, <br />
                            NY 10002, USA
                        </a>
                    </div>
                    <div className="tpoffcanvas__social">
                        <div className="social-icon text-center">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-dribbble"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay"></div>


            <div id="smooth-wrapper">
                <div id="smooth-content">

                    <main>
                        <div className="about-banner-area p-relative">
                            <div className="about-shape-1 z-index-3">
                                <img src={breadcrumbshape1} alt="" />
                            </div>
                            <div className="about-shape-2 z-index-3">
                                <img src={breadcrumbshape2} alt="" />
                            </div>
                            <div className="about-banner p-relative z-index fix">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="about-banner-content">
                                                <h4 className="about-banner-title" data-parallax='{"y": 1000, "smoothness": 10}'>
                                                    <span>Get In</span> <br />
                                                    <span>Touch</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-img-area mb-100 z-index-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="about-img about-img-height p-relative" style={{ backgroundImage: `url(${contactbanner})` }}>
                                            <div className="about-img-content">
                                                <h4 className="about-img-title" data-parallax='{"y": 1000, "smoothness": 10}'>
                                                    <span>Get In</span> <br />
                                                    <span>Touch</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="contact-info-area pb-90">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="contact-info-item">
                           <div className="contact-info-img">
                              <img src={contactsm5} alt=""/>
                           </div>
                           <div className="contact-info-title-box">
                              <h5 className="contact-info-title-sm"><a href="#">Colombia</a></h5>
                              <p>Bogota D.C., Colombia, b. a 181 <br/>
                                 C No. 930 Ap 202</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="contact-info-item p-relative"> 
                           <div className="contact-info-badge">
                              <span>Main Office</span>
                           </div>
                           <div className="contact-info-img">
                              <img src={contactsm6} alt=""/>
                           </div>
                           <div className="contact-info-title-box">
                              <h5 className="contact-info-title-sm"><a href="#">France</a></h5>
                              <p>9 Pearse Street, Kinsale,Cork, <br/>
                                 P17 AH66, Ireland</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="contact-info-item">
                           <div className="contact-info-img">
                              <img src={contactsm7} alt=""/>
                           </div>
                           <div className="contact-info-title-box">
                              <h5 className="contact-info-title-sm"><a href="#">Egypt</a></h5>
                              <p>Av. Cordoba 1309, 3'A, City of <br/>
                                 Buenos Aires, Egypt</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}

                        <div className="contact-form-area pb-120">
                            <div className="container">
                                <div className="row gx-0">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="contact-form-left">
                                            <div className="contact-form-section-box pb-80">
                                                <h5 className="inner-section-subtitle">CONTACT US</h5>
                                                <h4 className="tp-section-title pb-10">We'd love to <br /> hear From
                                                    <span>
                                                        {/* <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="44" height="44" fill="url(#pattern0)"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_2106_35" transform="translate(-0.425532 -0.170213) scale(0.0212766)"/>
                                    </pattern>
                                    <image id="image0_2106_35" width="83" height="66" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABCCAYAAAArOOo+AAADcklEQVR4nO2bP0wTURzHP5RqQhyMtyJNTCcTnKCLnVhs4sRmHRk10U0WFhcXiQskuDPhxirRQZMagn8WB1gatTqQiMV/qRBM6nB99oDe9Y7+3mvf8T5j03u/yyfv97vvK8dQs9ls4hAh0+8bSBNOpiBOpiBOpiBOpiBOpiBOpiBOpiCnWma1AmvzUK/JrJeVWcYeqhWovoKnDw9/fu1e72ufCplhAhUXLsrUSa3MbgKD5IsyNVMlM4nAIF5Opr71Mk8qUFEoy92LlTJ7FRgkf7X3NRRDtvyeKSkwyKOvcmsN9M6UEuiNQf3z8c8lWxwGUKbkDvTGoHAzfC3JFocBkamjhfNFKC/Ag4no70jSN5m6ZiBAadY/0SxNR39PKhIpjMrUKRD8ti4v+jtubd6vF4b0vAQDMnULVOSLcHu1XbNbPel5CZqiUb0Gb57oF6hQba1qR81JhWQkUmjZmY+nO0cRaYJtrVi52/06HS0OmmTeWm239+sVHRUOt7Wi25z8f62GFgcDJ6B6TV5ssK0V1Ur3p7di7q38kxwMHyd7FduprdW6ceakQse8BBg6OPjbzGaH9aweQVKxndpasTQdr73Bn5flxfj3mYTMyxfv9KzcBS/nH/XKi37blRfCHwyl2XCRceekQte8BBg+N3Lp/tRUgTNn+3eyHDkPo1dg/LovdHTc/2zvB8wsh0uuVmDlTrJaM8u9328Y2efPNtjc/MDE5GV9VRLg5dq7Nop6Lf4DR6ErEiky29vfWF9/r7eKBuLkyaPobHFo/d18a+sjjcae3kqCJJ2TCulfiY6SAah92rZGZpxzdxg6smWQDMDOznd2d3/qrSRE0jmp0D0voSXzT2OP/f0D/dUEKM2e7Drd8xJaMqvVL/z+1dBfTYDJGye7rls6kMC6F7e8XPKWNdHiYKFMSP6SlYkWB0tlerlkMUd3JFJYKROglGB36o5ECmtl5ovxdpypeQkWywQoxHiym5qXYLnMWDvTQCRSWC3Ty0WHeJMtDpbLhOgQb7LFIQUyo0K8qUiksF4mhId4U5FIkQqZnUK86XkJKZEJx0O86XkJKZJ5NMSbjESK1MiEdojvR4tDymTmi61Xr/skcyBew5bCy8Fcf96pAFK2M/uNkymINf9UZQNuZwriZAriZAriZAriZAriZAriZAriZAryD4xxER8vOFEDAAAAAElFTkSuQmCC"/>
                                    </defs>
                                 </svg> */}
                                                    </span>
                                                    you.</h4>
                                                <p>While we're good with smoke signals,
                                                    there <br /> are easier ways to get in touch.</p>
                                            </div>
                                            <div className="contact-form-social-box p-relative">
                                                <div className="contact-form-social-item">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </div>
                                                <div className="contact-form-section-img">
                                                    <img src={contactsm4} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="contact-form-right-warp">
                                            <div className="postbox__comment-form">
                                                <form action="#" className="box">
                                                    <div className="row gx-20">
                                                        <div className="col-12">
                                                            <div className="postbox__comment-input mb-30">
                                                                <input type="text" className="inputText" required />
                                                                <span className="floating-label">Full  Name</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="postbox__comment-input mb-30">
                                                                <input type="text" className="inputText" required />
                                                                <span className="floating-label">Your Email</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="postbox__comment-input mb-35">
                                                                <input type="text" className="inputText" required />
                                                                <span className="floating-label">Phone Number</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="postbox__comment-input mb-35">
                                                                <input type="text" className="inputText" required />
                                                                <span className="floating-label">Website URL</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12">
                                                            <div className="postbox__comment-input mb-30">
                                                                <textarea className="textareaText" required></textarea>
                                                                <span className="floating-label-2">How can we help you ?</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12">
                                                            <div className="postbox__btn-box">
                                                                <button className="submit-btn w-100">Send your Request</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="contact-inner-area pb-130">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="contact-inner-title-sm-wrap text-center mb-50">
                           <h4 className="contact-inner-title-sm">Book a Demo!</h4>
                           <p>We will contact again after receive your request in 24h</p>
                        </div>
                     </div>
                  </div>
                  <div className="contact-inner-wrapper">
                     <div className="row gx-0">
                        <div className="col-xl-4 col-lg-4">
                           <div className="contact-inner-item d-flex align-items-center justify-content-center">
                              <div className="contact-inner-img contact-img-1">
                                 <img src={contactsm1} alt=""/>
                              </div>
                              <div className="contact-inner-link">
                                 <a href="mailto:contact@softuch.com">contact@softuch.com</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                           <div className="contact-inner-item d-flex align-items-center justify-content-center">
                              <div className="contact-inner-img contact-img-2">
                                 <img src={contactsm2} alt=""/>
                              </div>
                              <div className="contact-inner-link">
                                 <a href="tel:12025550144">+1-202-555-0144</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                           <div className="contact-inner-item d-flex align-items-center justify-content-center">
                              <div className="contact-inner-img contact-img-3">
                                 <img src={contactsm3} alt=""/>
                              </div>
                              <div className="contact-inner-link">
                                 <a href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z" target="_blank">35Park Avenue, Uk</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> 
            </div> */}

                        <div className="tp-cta-area p-relative">
                            <div className="tp-cta-grey-bg grey-bg-2"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tp-cta-bg" style={{ backgroundImage: `url(${ctabg})` }}>
                                            <div className="tp-cta-content tp-inner-font text-center">
                                                <h3 className="tp-section-title text-white">Try our service now!</h3>
                                                <p>Eyerything you need to accept cord payments and grow your business <br />
                                                    anywhere on the planet.</p>
                                                <a className="tp-btn-inner white-bg text-black" href="/home">Get Started Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>

                    {/* <footer>
                        <div className="tp-footer__pl-pr grey-bg-2 pt-105">
                            <div className="tp-footer__area p-relative tp-footer__tp-border-bottom">
                                <div className="tp-footer__shape-1 d-none d-xxl-block">
                                    <img src={footerinner1} alt="" />
                                </div>
                                <div className="tp-footer__shape-2 d-none d-xxl-block">
                                    <img src={footerinner2} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                                            <div className="tp-footer__widget tp-footer__input-inner footer-widget-3 footer-col-3-1">
                                                <div className="tp-footer__logo mb-25">
                                                    <a href="index.html">
                                                        <img src={logo} alt="" />
                                                    </a>
                                                </div>
                                                <div className="tp-footer__contact-info">
                                                    <p>Build a modern and creative website with crealand</p>
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.2906 0.249174C12.878 0.211673 12.5132 0.51568 12.4757 0.928192C12.4382 1.3407 12.7422 1.70551 13.1548 1.74301L13.2906 0.249174ZM22.2533 10.8416C22.2908 11.2541 22.6556 11.5581 23.0681 11.5206C23.4806 11.4831 23.7846 11.1183 23.7471 10.7058L22.2533 10.8416ZM13.2227 0.996094C13.1548 1.74301 13.1543 1.74298 13.1539 1.74294C13.1538 1.74293 13.1534 1.74289 13.1532 1.74287C13.1527 1.74283 13.1523 1.74279 13.1519 1.74275C13.1511 1.74267 13.1505 1.74261 13.15 1.74256C13.149 1.74247 13.1487 1.74243 13.1491 1.74247C13.1497 1.74254 13.1529 1.74289 13.1585 1.74361C13.1698 1.74506 13.191 1.74798 13.2216 1.75308C13.2827 1.76327 13.3816 1.78217 13.5144 1.81537C13.7798 1.88173 14.1816 2.0054 14.6902 2.23144C15.7057 2.68274 17.157 3.54668 18.8033 5.19301L19.864 4.13235C18.0881 2.35653 16.484 1.38718 15.2994 0.860723C14.7081 0.597886 14.2238 0.446563 13.8782 0.360151C13.7054 0.316962 13.5674 0.290028 13.4682 0.273485C13.4186 0.265215 13.3786 0.259543 13.3488 0.255735C13.334 0.253832 13.3216 0.252394 13.3119 0.251331C13.307 0.2508 13.3028 0.250362 13.2992 0.250006C13.2975 0.249828 13.2959 0.249671 13.2944 0.249533C13.2937 0.249464 13.293 0.249399 13.2924 0.249339C13.292 0.24931 13.2916 0.249268 13.2914 0.249253C13.291 0.249213 13.2906 0.249174 13.2227 0.996094ZM18.8033 5.19301C20.4496 6.83934 21.3136 8.29066 21.7649 9.30608C21.9909 9.81467 22.1146 10.2165 22.181 10.482C22.2141 10.6148 22.233 10.7136 22.2432 10.7747C22.2483 10.8053 22.2513 10.8265 22.2527 10.8378C22.2534 10.8434 22.2538 10.8466 22.2538 10.8473C22.2539 10.8476 22.2538 10.8473 22.2538 10.8463C22.2537 10.8459 22.2536 10.8452 22.2536 10.8444C22.2535 10.844 22.2535 10.8436 22.2534 10.8431C22.2534 10.8429 22.2534 10.8425 22.2534 10.8424C22.2533 10.842 22.2533 10.8416 23.0002 10.7737C23.7471 10.7058 23.7471 10.7053 23.7471 10.7049C23.747 10.7047 23.747 10.7043 23.747 10.704C23.7469 10.7033 23.7469 10.7026 23.7468 10.7019C23.7466 10.7005 23.7465 10.6988 23.7463 10.6971C23.746 10.6935 23.7455 10.6893 23.745 10.6844C23.7439 10.6747 23.7425 10.6624 23.7406 10.6475C23.7368 10.6177 23.7311 10.5778 23.7228 10.5281C23.7063 10.4289 23.6794 10.2909 23.6362 10.1182C23.5498 9.77251 23.3984 9.28826 23.1356 8.69687C22.6091 7.51234 21.6398 5.90817 19.864 4.13235L18.8033 5.19301Z" fill="#595B62" />
                                                                    <path d="M13.6816 4.59526C13.2834 4.48147 12.8682 4.71209 12.7544 5.11037C12.6406 5.50864 12.8713 5.92376 13.2695 6.03755L13.6816 4.59526ZM17.9398 10.7078C18.0536 11.1061 18.4687 11.3367 18.867 11.2229C19.2652 11.1091 19.4959 10.694 19.3821 10.2957L17.9398 10.7078ZM13.4756 5.31641C13.2695 6.03755 13.2692 6.03745 13.2689 6.03735C13.2688 6.03732 13.2684 6.03723 13.2682 6.03716C13.2678 6.03704 13.2674 6.03692 13.267 6.03681C13.2662 6.03658 13.2655 6.03638 13.2648 6.03619C13.2636 6.03581 13.2626 6.03552 13.2619 6.03531C13.2605 6.03489 13.2603 6.03481 13.2612 6.03511C13.2631 6.03569 13.2695 6.03778 13.2803 6.04163C13.302 6.04932 13.3415 6.0641 13.3976 6.08814C13.5097 6.13618 13.6887 6.22145 13.9254 6.36154C14.3984 6.64147 15.1051 7.14237 15.97 8.00729L17.0307 6.94663C16.0808 5.99669 15.2751 5.41731 14.6894 5.07068C14.3968 4.89749 14.1599 4.7829 13.9884 4.70942C13.9027 4.67269 13.8335 4.64628 13.7819 4.62798C13.7561 4.61884 13.7348 4.61172 13.718 4.60636C13.7096 4.60368 13.7024 4.60143 13.6963 4.5996C13.6933 4.59868 13.6905 4.59786 13.6881 4.59714C13.6869 4.59678 13.6857 4.59644 13.6846 4.59613C13.6841 4.59597 13.6836 4.59582 13.6831 4.59568C13.6828 4.59561 13.6825 4.5955 13.6823 4.59547C13.682 4.59536 13.6816 4.59526 13.4756 5.31641ZM15.97 8.00729C16.835 8.87222 17.3359 9.57894 17.6158 10.0519C17.7559 10.2886 17.8411 10.4677 17.8892 10.5798C17.9132 10.6359 17.928 10.6753 17.9357 10.697C17.9396 10.7079 17.9416 10.7143 17.9422 10.7161C17.9425 10.717 17.9424 10.7168 17.942 10.7154C17.9418 10.7147 17.9415 10.7138 17.9411 10.7125C17.941 10.7118 17.9407 10.7111 17.9405 10.7104C17.9404 10.71 17.9403 10.7096 17.9402 10.7091C17.9401 10.7089 17.94 10.7086 17.94 10.7085C17.9399 10.7081 17.9398 10.7078 18.6609 10.5017C19.3821 10.2957 19.382 10.2953 19.3819 10.295C19.3818 10.2949 19.3817 10.2945 19.3816 10.2943C19.3815 10.2937 19.3814 10.2932 19.3812 10.2927C19.3809 10.2916 19.3805 10.2905 19.3802 10.2892C19.3795 10.2868 19.3787 10.284 19.3777 10.281C19.3759 10.2749 19.3737 10.2677 19.371 10.2593C19.3656 10.2425 19.3585 10.2212 19.3493 10.1954C19.331 10.1438 19.3046 10.0746 19.2679 9.9889C19.1944 9.81744 19.0798 9.58057 18.9067 9.28794C18.56 8.70224 17.9806 7.89658 17.0307 6.94663L15.97 8.00729Z" fill="#595B62" />
                                                                    <path d="M9.17234 6.47135L8.51742 6.83685V6.83685L9.17234 6.47135ZM8.37912 5.05003L7.7242 5.41552V5.41552L8.37912 5.05003ZM1.75747 8.27682C1.77316 7.8629 1.45034 7.51464 1.03642 7.49895C0.622503 7.48326 0.274237 7.80608 0.258546 8.22L1.75747 8.27682ZM5.48265 18.5139L6.01298 17.9836L5.48265 18.5139ZM9.58533 14.4112L10.1157 13.8809L9.58533 14.4112ZM17.5252 14.8242L17.1597 15.4791L17.5252 14.8242ZM18.9465 15.6174L19.312 14.9625L18.9465 15.6174ZM15.7481 22.9885L15.7765 23.738L15.7481 22.9885ZM19.4097 21.117L19.94 21.6474L19.4097 21.117ZM2.34917 4.05656C2.05628 4.34945 2.05628 4.82432 2.34917 5.11722C2.64206 5.41011 3.11694 5.41011 3.40983 5.11722L2.34917 4.05656ZM12.2065 21.8003C11.8083 21.6861 11.393 21.9163 11.2788 22.3145C11.1646 22.7127 11.3949 23.128 11.793 23.2422L12.2065 21.8003ZM7.92664 21.4669C8.27472 21.6914 8.73891 21.5912 8.96344 21.2431C9.18796 20.895 9.08779 20.4309 8.73971 20.2063L7.92664 21.4669ZM8.47337 10.5641L9.00372 11.0944L8.47337 10.5641ZM8.47337 10.5641L9.00371 11.0944L8.47337 10.5641ZM13.4324 15.5232L12.9022 14.9927L13.4324 15.5232ZM13.4325 15.5231L13.9628 16.0535L13.4325 15.5231ZM9.82725 6.10585L9.03403 4.68453L7.7242 5.41552L8.51742 6.83685L9.82725 6.10585ZM0.258546 8.22C0.163585 10.7249 0.808273 14.9002 4.95232 19.0442L6.01298 17.9836C2.21135 14.1819 1.67561 10.4361 1.75747 8.27682L0.258546 8.22ZM10.1157 13.8809C8.97185 12.7371 8.83028 11.9694 8.84863 11.5946C8.86791 11.201 9.07325 11.0249 9.00372 11.0944L7.94302 10.0338C7.87337 10.1035 7.39499 10.6112 7.35043 11.5212C7.30494 12.4501 7.71941 13.6059 9.055 14.9415L10.1157 13.8809ZM17.1597 15.4791L18.581 16.2723L19.312 14.9625L17.8907 14.1693L17.1597 15.4791ZM9.055 14.9415C10.3902 16.2768 11.5458 16.6914 12.4746 16.6461C13.3846 16.6018 13.8925 16.1237 13.9626 16.0537L12.9022 14.9927C12.9715 14.9235 12.7953 15.1287 12.4016 15.1479C12.0267 15.1662 11.2592 15.0244 10.1157 13.8809L9.055 14.9415ZM18.8793 20.5867C17.918 21.548 16.8344 22.1968 15.7197 22.2391L15.7765 23.738C17.4326 23.6752 18.8553 22.732 19.94 21.6474L18.8793 20.5867ZM18.581 16.2723C20.0065 17.0679 20.2947 19.1714 18.8793 20.5867L19.94 21.6474C21.9296 19.6578 21.7603 16.3288 19.312 14.9625L18.581 16.2723ZM13.9628 16.0535C14.8811 15.1352 16.2031 14.9453 17.1597 15.4791L17.8907 14.1693C16.282 13.2715 14.2387 13.6562 12.9021 14.9928L13.9628 16.0535ZM9.03403 4.68453C7.6677 2.23628 4.33875 2.06698 2.34917 4.05656L3.40983 5.11722C4.82517 3.70188 6.92867 3.99006 7.7242 5.41552L9.03403 4.68453ZM9.00371 11.0944C10.3403 9.75784 10.7251 7.71459 9.82725 6.10585L8.51742 6.83685C9.05129 7.79345 8.86133 9.1155 7.94304 10.0338L9.00371 11.0944ZM15.7197 22.2391C14.7923 22.2742 13.5816 22.1945 12.2065 21.8003L11.793 23.2422C13.3423 23.6864 14.7141 23.7783 15.7765 23.738L15.7197 22.2391ZM8.73971 20.2063C7.85142 19.6334 6.93498 18.9056 6.01298 17.9836L4.95232 19.0442C5.94723 20.0391 6.94627 20.8345 7.92664 21.4669L8.73971 20.2063ZM9.00372 11.0944L9.00371 11.0944L7.94304 10.0338L7.94302 10.0338L9.00372 11.0944ZM13.9626 16.0537L13.9628 16.0535L12.9021 14.9928L12.9022 14.9927L13.9626 16.0537Z" fill="#595B62" />
                                                                </svg>
                                                            </span>
                                                            <a className="first-child" href="tel:+806(000)8899">+806 (000) 88 99</a>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M6.6 8.99531C6.6 9.43714 6.24183 9.79531 5.8 9.79531C5.35817 9.79531 5 9.43714 5 8.99531C5 8.55348 5.35817 8.19531 5.8 8.19531C6.24183 8.19531 6.6 8.55348 6.6 8.99531Z" fill="#595B62" />
                                                                    <path d="M9.8 8.99531C9.8 9.43714 9.44183 9.79531 9 9.79531C8.55817 9.79531 8.2 9.43714 8.2 8.99531C8.2 8.55348 8.55817 8.19531 9 8.19531C9.44183 8.19531 9.8 8.55348 9.8 8.99531Z" fill="#595B62" />
                                                                    <path d="M13 8.99531C13 9.43714 12.6418 9.79531 12.2 9.79531C11.7582 9.79531 11.4 9.43714 11.4 8.99531C11.4 8.55348 11.7582 8.19531 12.2 8.19531C12.6418 8.19531 13 8.55348 13 8.99531Z" fill="#595B62" />
                                                                    <path d="M13 2.06635C11.8233 1.38567 10.4571 0.996094 9 0.996094C4.58172 0.996094 1 4.57782 1 8.99609C1 10.2758 1.30049 11.4854 1.83477 12.5581C1.97675 12.8431 2.02401 13.1689 1.94169 13.4766L1.46521 15.2574C1.25836 16.0305 1.96561 16.7377 2.73868 16.5309L4.51951 16.0544C4.82715 15.9721 5.15297 16.0193 5.43802 16.1613C6.51069 16.6956 7.72025 16.9961 9 16.9961C13.4183 16.9961 17 13.4144 17 8.99609C17 7.53895 16.6104 6.17279 15.9297 4.99609" stroke="#595B62" stroke-width="1.5" stroke-linecap="round" />
                                                                </svg>
                                                            </span>
                                                            <a href="mailto:contact@info.com">contact@info.com</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30">
                                            <div className="tp-footer__widget tp-footer__widget-inner footer-widget-3 footer-col-3-2">
                                                <h4 className="tp-footer__widget-title">Navigation</h4>
                                                <div className="tp-footer__content">
                                                    <ul>
                                                        <li><a href="#">Demo page</a></li>
                                                        <li><a href="#">About</a></li>
                                                        <li><a href="#">Pricing Plan</a></li>
                                                        <li><a href="#">Integrations</a></li>
                                                        <li><a href="#">Blog</a></li>
                                                        <li><a href="#">Contact</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-6 pb-30">
                                            <div className="tp-footer__widget tp-footer__widget-inner footer-widget-3 footer-col-3-3">
                                                <h4 className="tp-footer__widget-title">Other Pages</h4>
                                                <div className="tp-footer__content">
                                                    <ul>
                                                        <li><a href="#">Features</a></li>
                                                        <li><a href="#">Team</a></li>
                                                        <li><a href="#">Careers</a></li>
                                                        <li><a href="#">Login</a></li>
                                                        <li><a href="#">Register</a></li>
                                                        <li><a href="#">404 Not found</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 pb-30 z-index-3">
                                            <div className="tp-footer__widget tp-footer__input-inner footer-widget-3 footer-col-3-4">
                                                <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                                                <div className="tp-footer__input mb-35 p-relative">
                                                    <form action="#">
                                                        <input type="text" placeholder="Business email adress" />
                                                        <span>
                                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                                                                    stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path opacity="0.4"
                                                                    d="M13 5.39993L10.496 7.39993C9.672 8.05593 8.32 8.05593 7.496 7.39993L5 5.39993"
                                                                    stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <button>
                                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="tp-footer__social-3">
                                                    <h4>Social media</h4>
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-copyright__area pt-20 pb-20">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="tp-copyright__text tp-copyright__text-3 text-center">
                                                <span>Full Copyright & Design By <a href="#">@Theme pure</a> – 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer> */}
                    <Footer/>

                </div>
            </div>



        </body>
    )
}

export default Business