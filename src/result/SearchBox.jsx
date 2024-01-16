import React, { useState, useEffect } from 'react';
import {
    FaMagnifyingGlass
} from 'react-icons/fa6'

import { FaGlobe } from 'react-icons/fa'

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

import mainLogo from '../assets/google.png'
import hero41 from '../assets/img/hero/hero-4-1.png'
import hero42 from '../assets/img/hero/hero-4-2.png'
import hero43 from '../assets/img/hero/hero-4-3.png'

// Importing payment images 
import paybg from '../assets/img/payment/background.png'
import paycoin1 from '../assets/img/payment/coin-1.png'
import paycoin2 from '../assets/img/payment/coin-2.png'
import paygetpaid from '../assets/img/payment/get-paid.png'
import payhand from '../assets/img/payment/hand.png'
import payimage from '../assets/img/payment/image.png'
import paymessage from '../assets/img/payment/message.png'
import paymobile from '../assets/img/payment/mobile.png'
import paypayment3 from '../assets/img/payment/payment-3.png'
import payplatform1 from '../assets/img/payment/platform-1.png'
import payqr from '../assets/img/payment/qrcode.png'

// importing payment logos 
import paylogomain from '../assets/img/payment-logo/logo-main.png'
import paylogo1 from '../assets/img/payment-logo/logo-1.png'
import paylogo2 from '../assets/img/payment-logo/logo-2.png'
import paylogo3 from '../assets/img/payment-logo/logo-3.png'
import paylogo4 from '../assets/img/payment-logo/logo-4.png'
import paylogo5 from '../assets/img/payment-logo/logo-5.png'
import paylogo6 from '../assets/img/payment-logo/logo-6.png'
import paylogo7 from '../assets/img/payment-logo/logo-7.png'
import paylogo8 from '../assets/img/payment-logo/logo-8.png'
import paylogo9 from '../assets/img/payment-logo/logo-9.png'
import paylogo10 from '../assets/img/payment-logo/logo-10.png'
import paylogo11 from '../assets/img/payment-logo/logo-11.png'
import paylogo12 from '../assets/img/payment-logo/logo-12.png'
import paylogo13 from '../assets/img/payment-logo/logo-13.png'
import paylogo14 from '../assets/img/payment-logo/logo-14.png'
import paylogo15 from '../assets/img/payment-logo/logo-15.png'
import paylogo16 from '../assets/img/payment-logo/logo-16.png'

// import hero images 
import herobrowser1 from '../assets/img/hero/browser-icon-1.png'
import herobrowser2 from '../assets/img/hero/browser-icon-2.png'
import herobrowser3 from '../assets/img/hero/browser-icon-3.png'
import herobrowser4 from '../assets/img/hero/browser-icon-4.png'
import herobrowser5 from '../assets/img/hero/browser-icon-5.png'
import hero5 from '../assets/img/hero/hero-5.svg'
import herobg2 from '../assets/img/hero/hero-bg-2.png'
import herocircle51 from '../assets/img/hero/hero-circle-5-1.png'
import heroslider1 from '../assets/img/hero/hero-slider-icon-1.jpg'
import heroslider2 from '../assets/img/hero/hero-slider-icon-2.jpg'
import heroslider3 from '../assets/img/hero/hero-slider-icon-3.jpg'
import heroslider4 from '../assets/img/hero/hero-slider-icon-4.jpg'
import heroslider5 from '../assets/img/hero/hero-slider-icon-5.jpg'

import { homeItems, pageItems, blogData } from './PageData';

import { Link, useParams, useNavigate } from 'react-router-dom'
import ContactForm from '../New Home/ContactForm';

const SearchBox = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/result/${searchQuery}`)
    }

    const handleSubmit = (e) => {
        const scriptURL = ''
        const form = document.forms['formName']

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then((response) =>
                    alert('Thank you! your form is submitted successfully.')
                )
                .then(() => {
                    window.location.reload()
                })
                .catch((error) => console.error('Error!', error.message))
        })
    }

    return (

        <body>

            <button className="scroll-top scroll-to-target" data-target="html">
                <i className="far fa-angle-double-up"></i>
            </button>

            <header className="tp-header-height">
                <div id="header-sticky" className="header-bottom__area header-blur header-bottom__transparent header-bottom__plr-4 z-index-3">
                    <div className="container-fluid p-0">
                        <div className="row g-0 align-items-center">

                            {/* Display logo  */}
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="header-bottom__logo">
                                    <Link to='/home'><img src={mainLogo} alt="" /></Link>
                                </div>
                            </div>

                            {/* Navbar items   */}
                            <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                                <div className="header-bottom__main-menu header-bottom__main-menu-4">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li>
                                                <a href="index.html">Home</a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Data analytics</a></li>
                                                    <li><a href="index-2.html">Payment Gateway</a></li>
                                                    <li><a href="index-3.html">CRM Software</a></li>
                                                    <li><a href="index-4.html">Security Software</a></li>
                                                    <li><a href="index-5.html">Saas</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Page</a>
                                                <ul className="submenu">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="service.html">Service</a></li>
                                                    <li><a href="service-details.html">Service Details</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                    <li><a href="career.html">Career</a></li>
                                                    <li><a href="career-details.html">Career Details</a></li>
                                                    <li><a href="integrations.html">Integrations</a></li>
                                                    <li><a href="register.html">Register</a></li>
                                                    <li><a href="sign-in.html">Signin</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="project-details.html">Portfoilo</a>
                                                <ul className="submenu">
                                                    <li><a href="project.html">Project</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="price.html">Pricing</a></li>
                                            <li>
                                                <a href="blog-details.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="blog-details-2.html">Blog Details 02</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* Login and get in touch  */}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                    <div className="header-bottom__action header-bottom__action-4">
                                        <a className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="register.html">
                                            <span><Link to='/login'>Log In</Link></span>
                                        </a>
                                    </div>
                                    <div className="header-bottom__btn d-flex align-items-center">
                                        <a className="tp-btn-yellow tp-btn-hover alt-color-white d-none d-md-inline-block" href="contact.html">
                                            <span>Get in Touch</span>
                                            <b></b>
                                        </a>
                                        <a className="header-bottom__bar tp-menu-bar d-lg-none" href="javascript:void(0)"><i className="fal fa-bars"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="tpoffcanvas-area">
                <div className="tpoffcanvas">
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                        <a href="index.html">
                            <img src={mainLogo} alt="" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="body-overlay"></div>

            <div id="smooth-wrapper">
                <div id="smooth-content">

                    <main className="fix">
                        <div className="tp-hero-area tp-hero-overlay blue-bg pt-200 pb-115 p-relative">
                            <div className="tp-hero-glob-img">
                                <img src={hero43} alt="" />
                            </div>

                            <div className="container">
                                <div className="row mt-10">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="tp-hero-4-section-box pt-10 z-index-3">

                                            {/* Search box form  */}
                                            <form onSubmit={handleSearch} method="post" style={{ display: 'flex', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
                                                <div style={{ flex: '1', border: '1px solid #dfe1e5', borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingLeft: '16px' }}>
                                                    <FaGlobe size={20} style={{ color: '#70757a', marginRight: '12px' }} />
                                                    <input
                                                        type="text"
                                                        name="search"
                                                        placeholder="Search Google"
                                                        value={searchQuery}
                                                        style={{
                                                            flex: '1',
                                                            border: 'none',
                                                            padding: '12px',  // Increase the padding for more space
                                                            outline: 'none',
                                                            fontSize: '16px',
                                                            boxShadow: 'none',  // Remove the default input box shadow
                                                        }}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                    />
                                                </div>
                                                <div style={{ marginLeft: '8px' }}>
                                                    <button type="submit" style={{ backgroundColor: '#4285f4', color: '#ffffff', border: '1px solid #4285f4', borderRadius: '24px', padding: '12px 16px', cursor: 'pointer' }}>
                                                        <span>
                                                            Search <i className="bi bi-arrow-right ms-1" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="tp-hero-4-img-wrapper p-relative">
                                            <div className="tp-hero-4-main-img text-center z-index-3">
                                                <img src={hero41} alt="" />
                                            </div>
                                            <div className="tp-hero-4-sub-img z-index-3">
                                                <img src={hero42} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-md-6 mb-30">
                                                <div className="tp-payment__item tp-payment__bg-color-2 p-relative z-index wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                                    <div className="tp-payment__shape-4">
                                                        <img src={payqr} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-5">
                                                        <img src={paymobile} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-6">
                                                        <img src={payhand} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-7">
                                                        <img src={paycoin1} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-8">
                                                        <img src={paycoin2} alt="" />
                                                    </div>
                                                    <div className="tp-payment__content">
                                                        <h3 className="tp-payment__title">Scan & Go</h3>
                                                        <p>Transform your payment link into a QR code
                                                            that customers can scan with their <br />
                                                            phone to pay.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-30">
                                                <div className="tp-payment__item tp-payment__bg-color-3 p-relative z-index wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                                    <div className="tp-payment__shape-9">
                                                        <img src={paypayment3} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-11">
                                                        <img src={paymessage} alt="" />
                                                    </div>
                                                    <div className="tp-payment__content">
                                                        <h3 className="tp-payment__title">Easily Send Requesrs
                                                            vai e-mail or SMS</h3>
                                                        <p>... or copy-paste the link</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 mb-30">
                                        <div className="tp-payment__item p-relative z-index wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                            <div className="tp-payment__shape-1">
                                                <img src={paybg} alt="" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="tp-payment__content tp-payment__content-space">
                                                        <h3 className="tp-payment__title">Online Billing & <br /> Invoicing Payments.</h3>
                                                        <p>Get paid faster with Online Invoicing <br /> and the Virtual Terminal.</p>
                                                        <a href="service-details.html">Explore Invoicing Tools<i className="far fa-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tp-payment__shape-2">
                                                        <img src={payimage} alt="" />
                                                    </div>
                                                    <div className="tp-payment__shape-3 d-none d-sm-block">
                                                        <img src={paygetpaid} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tp-payment-method__area tp-payment-method__space">
                                    <div className="container-fluid g-0">
                                        <div className="row g-0 justify-content-center">
                                            <div className="col-xl-7">
                                                <div className="tp-payment-method__title-box text-center mb-20" style={{color:'white'}}>
                                                    <h3 className="tp-section-title-lg pb-10" style={{color:'white'}}>All major <br/>
                                                        payment methods</h3>
                                                    <p style={{color:'white'}}>We've got all your payments covered</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-0">
                                            <div className="col-12">
                                                <div className="tp-payment-method__wrapper text-center p-relative">
                                                    <div className="tp-payment-method__main-circle p-relative z-index">
                                                        <div className="tp-payment-method__main-img z-index-3">
                                                            <img src={paylogomain} alt=""/>
                                                        </div>
                                                        <div className="tp-payment-method__line-1">
                                                            <div className="tp-payment-method__circle circle-1"></div>
                                                            <span><img src={paylogo1} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-2 d-none d-lg-block">
                                                            <div className="tp-payment-method__circle circle-2"></div>
                                                            <span><img src={paylogo2} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-3">
                                                            <div className="tp-payment-method__circle circle-3"></div>
                                                            <span><img src={paylogo3} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-4 d-none d-lg-block">
                                                            <div className="tp-payment-method__circle circle-4"></div>
                                                            <span><img src={paylogo4} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-5">
                                                            <div className="tp-payment-method__circle circle-5"></div>
                                                            <span><img src={paylogo5} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-6 d-none d-lg-block">
                                                            <div className="tp-payment-method__circle circle-6"></div>
                                                            <span><img src={paylogo6} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-7">
                                                            <div className="tp-payment-method__circle circle-7"></div>
                                                            <span><img src={paylogo7} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-8 d-none d-lg-block">
                                                            <div className="tp-payment-method__circle circle-8"></div>
                                                            <span><img src={paylogo16} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-9">
                                                            <div className="tp-payment-method__circle circle-9"></div>
                                                            <span><img src={paylogo15} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-10 d-none d-lg-block">
                                                            <div className="tp-payment-method__circle circle-10"></div>
                                                            <span><img src={paylogo14} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-11">
                                                            <div className="tp-payment-method__circle circle-11"></div>
                                                            <span><img src={paylogo13} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-12 d-none d-lg-block">
                                                            <div className="tp-payment-method__circle circle-12"></div>
                                                            <span><img src={paylogo12} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-13">
                                                            <div className="tp-payment-method__circle circle-13"></div>
                                                            <span><img src={paylogo11} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-14 d-none d-lg-block">
                                                            <div className="tp-payment-method__circle circle-14"></div>
                                                            <span><img src={paylogo10} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-15">
                                                            <div className="tp-payment-method__circle circle-15"></div>
                                                            <span><img src={paylogo9} alt=""/></span>
                                                        </div>
                                                        <div className="tp-payment-method__line-16">
                                                            <div className="tp-payment-method__circle circle-16"></div>
                                                            <span><img src={paylogo8} alt=""/></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-barnd-area tp-barnd-plr blue-bg z-index-3 fix">
                            <div className="tp-barnd-main-wrapper p-relative">
                                <div className="tp-barnd-shape-1">
                                    <img src="../assets/img/brand/image_01.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-4 col-lg-4">
                                            <div className="tp-barnd-left-item d-flex align-items-center">
                                                <div className="tp-barnd-icon">
                                                    <img src={heroslider1} alt="" />
                                                </div>
                                                <h5 className="tp-barnd-title-sm">2k Companies <br /> Trusted in the world</h5>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8">
                                            <div className="tp-barnd-slider-wrapper">
                                                <div className="tp-barnd-slider-active p-relative">
                                                    <div className="tp-brand-item">
                                                        <img src={heroslider2} alt="" />
                                                    </div>
                                                    <div className="tp-brand-item">
                                                        <img src={heroslider3} alt="" />
                                                    </div>
                                                    <div className="tp-brand-item">
                                                        <img src={heroslider4} alt="" />
                                                    </div>
                                                    <div className="tp-brand-item">
                                                        <img src={heroslider5} alt="" />
                                                    </div>
                                                    <div className="tp-brand-item">
                                                        <img src={heroslider3} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-service-area blue-bg p-relative pt-115 pb-105">
                            <div className="tp-service-shape-right z-index">
                                <img src="../assets/img/service/service-shape-right.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row align-items-end mb-60">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-service-section-four">
                                            <h5 className="tp-section-subtitle-4 pb-10">WHAT WE DO</h5>
                                            <h3 className="tp-section-title-4">Our Services</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-service-sction-content pb-15 d-flex justify-content-md-start justify-content-end">
                                            <p>Softec provides all customer management <br /> service within one software.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-service-4-border-top  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-1">
                                            <div className="tp-service-4-item z-index">
                                                <div className="tp-service-4-icon">
                                                    <img src="../assets/img/service/sv-icon-4-1.png" alt="" />
                                                </div>
                                                <div className="tp-service-4-content">
                                                    <span>Cloud Backup</span>
                                                    <h4 className="tp-service-4-title"><a href="service-details.html">Cyber Security Solustions</a></h4>
                                                    <a className="tp-btn-service" href="service-details.html">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-2">
                                            <div className="tp-service-4-item z-index">
                                                <div className="tp-service-4-icon">
                                                    <img src="../assets/img/service/sv-icon-4-2.png" alt="" />
                                                </div>
                                                <div className="tp-service-4-content">
                                                    <span>Cloud Backup</span>
                                                    <h4 className="tp-service-4-title"><a href="service-details.html">AI Data Cloud Solution</a></h4>
                                                    <a className="tp-btn-service" href="service-details.html">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-3">
                                            <div className="tp-service-4-item z-index">
                                                <div className="tp-service-4-icon">
                                                    <img src="../assets/img/service/sv-icon-4-3.png" alt="" />
                                                </div>
                                                <div className="tp-service-4-content">
                                                    <span>Cloud Backup</span>
                                                    <h4 className="tp-service-4-title"><a href="service-details.html">Managed <br /> Web Application</a></h4>
                                                    <a className="tp-btn-service" href="service-details.html">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 mb-50 tp-service-4-border-right service-border-trang-">
                                            <div className="tp-service-4-item z-index">
                                                <div className="tp-service-4-icon">
                                                    <img src="assets/img/service/sv-icon-4-4.png" alt="" />
                                                </div>
                                                <div className="tp-service-4-content">
                                                    <span>Cloud Backup</span>
                                                    <h4 className="tp-service-4-title"><a href="service-details.html">24//7 Customer Support</a></h4>
                                                    <a className="tp-btn-service" href="service-details.html">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-about-area pb-135 blue-bg p-relative">
                            <div className="tp-about-top-img-2">
                                <img src="assets/img/about/about-4-3.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                        <div className="tp-about-left-img text-md-center p-relative text-start z-index">
                                            <img src="assets/img/about/about-4-1.png" alt="" />
                                            <div className="tp-about-top-img">
                                                <img src="assets/img/about/about-4-2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-security-section-wrapper">
                                            <div className="tp-security-section-box mb-45">
                                                <h5 className="tp-section-subtitle-4 pb-10">Who we are</h5>
                                                <h3 className="tp-section-title-4 pb-25">Confidence in Your Security</h3>
                                                <p>These cyberattacks are usually aimed at accessing,
                                                    changing,or destroying sensitive information
                                                    normal business processes.!
                                                </p>
                                            </div>
                                            <div className="tp-security-feature">
                                                <ul>
                                                    <li><i className="far fa-check"></i>High-Performance <br /> Solutions</li>
                                                    <li><i className="far fa-check"></i>Best Cyber Security <br /> Solutions.</li>
                                                </ul>
                                            </div>
                                            <div className="tp-security-btn">
                                                <a className="tp-btn-yellow-border" href="about.html">About Us <i className="far fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-fun-fact-area pb-75 blue-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br">
                                        <div className="tp-fun-fact-item tp-fun-fact-space-1 d-flex align-items-center">
                                            <h4><span data-purecounter-duration="1" data-purecounter-end="23" className="purecounter">0</span>+</h4>
                                            <p>Years <br /> Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br">
                                        <div className="tp-fun-fact-item tp-fun-fact-space-2 d-flex align-items-center">
                                            <h4><span data-purecounter-duration="1" data-purecounter-end="300" className="purecounter">0</span>%</h4>
                                            <p>Year on <br /> year Growth</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br">
                                        <div className="tp-fun-fact-item tp-fun-fact-space-3 d-flex align-items-center">
                                            <h4><span data-purecounter-duration="1" data-purecounter-end="12" className="purecounter">0</span>+</h4>
                                            <p>Countries <br /> Of Operation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-platform-area border-tb blue-bg pt-115 pb-105 p-relative z-index">
                            <div className="tp-platform-bg-shape">
                                <img src="assets/img/Platform/p-bg.html" alt="" />
                            </div>
                            <div className="container">
                                <div className="row align-items-end mb-40">
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="tp-platform-section-box">
                                            <h5 className="tp-section-subtitle-4 pb-10">What we offer</h5>
                                            <h3 className="tp-section-title-4">Our Platform</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-platform-text">
                                            <p>Explore how Avalance can help you toassess security
                                                controls continuously.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2 d-none d-xl-block">
                                        <div className="tp-platform-img-box">
                                            <img src="assets/img/payment/platform-1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-12">
                                        <div className="row-custom-wrapper">
                                            <div className="row-custom">
                                                <div className="col-custom">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>01.</span>
                                                            <h4 className="tp-panel-title child-one">Firewall & VPN</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>01.</span>
                                                            <h4 className="tp-panel-title-2">Live Security</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-custom">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>02.</span>
                                                            <h4 className="tp-panel-title child-two">Hack Protection</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>02.</span>
                                                            <h4 className="tp-panel-title-2">Hack Protection</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-custom active">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>03.</span>
                                                            <h4 className="tp-panel-title child-three">Live Security</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>03.</span>
                                                            <h4 className="tp-panel-title-2">Live Security</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-custom">
                                                    <div className="tp-panel-item">
                                                        <div className="tp-panel-content">
                                                            <span>04.</span>
                                                            <h4 className="tp-panel-title child-four">Online Support</h4>
                                                        </div>
                                                    </div>
                                                    <div className="tp-panel-item-2">
                                                        <div className="tp-panel-content-2">
                                                            <span>04.</span>
                                                            <h4 className="tp-panel-title-2">Online Support</h4>
                                                            <p>Blocks infected website tracking
                                                                programs and annoying.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-price-area pt-120 pb-145 blue-bg">
                            <div className="container">
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="tp-price-sction-box text-center mb-30">
                                            <h5 className="tp-section-subtitle-4 both pb-10">Who we are</h5>
                                            <h3 className="tp-section-title-4 pb-25">Confidence in Your Security</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-price-table">
                                    <div className="tp-price-table-wrapper">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-4">
                                                <div className="tp-price-header">
                                                    <div className="tp-price-header-img">
                                                        <img src="assets/img/price/price-4.1.png" alt="" />
                                                    </div>
                                                    <div className="tp-price-header-content">
                                                        <p>You pay <span>$59.00/mo</span> today Renews <br />
                                                            April 2024 For <span>$69.00/mo</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="tp-price-top-wrapper">
                                                    <div className="tp-price-top-item text-center">
                                                        <div className="tp-price-top-tag-wrapper">
                                                            <span>STARTER</span>
                                                            <p>Collect more submissions, <br /> access most of the features</p>
                                                        </div>
                                                        <div className="tp-price-top-title-wrapper">
                                                            <h4><em>$</em>18 <span>/mo</span></h4>
                                                            <p>Billed monthly</p>
                                                            <a className="tp-btn-service" href="price.html">Get Started</a>
                                                        </div>
                                                    </div>
                                                    <div className="tp-price-top-item text-center active">
                                                        <div className="tp-price-top-tag-wrapper">
                                                            <span>Advance</span>
                                                            <p>Collect more submissions, <br /> access most of the features</p>
                                                        </div>
                                                        <div className="tp-price-top-title-wrapper">
                                                            <h4><em>$</em>19 <span>/mo</span></h4>
                                                            <p>Billed monthly</p>
                                                            <a className="tp-btn-service" href="price.html">Get Started</a>
                                                        </div>
                                                    </div>
                                                    <div className="tp-price-top-item text-center">
                                                        <div className="tp-price-top-tag-wrapper">
                                                            <span>Team Plan</span>
                                                            <p>Collect more submissions, <br /> access most of the features</p>
                                                        </div>
                                                        <div className="tp-price-top-title-wrapper">
                                                            <h4><em>$</em>14 <span>/mo</span></h4>
                                                            <p>Billed monthly</p>
                                                            <a className="tp-btn-service" href="price.html">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-price-feature-wrapper">
                                            <div className="row g-0">
                                                <div className="col-4">
                                                    <div className="tp-price-feature-box">
                                                        <div className="tp-price-feature-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>Team</span>
                                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <circle opacity="0.5" cx="8" cy="8" r="7" stroke="white" stroke-width="1.5" />
                                                                        <path d="M8 11.5V7.3" stroke="white" stroke-width="1.5"
                                                                            stroke-linecap="round" />
                                                                        <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19966)" fill="white" />
                                                                    </svg>
                                                                    <div className="tp-price-feature-tooltip">
                                                                        <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tp-price-feature-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>Installed Agent</span>
                                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <circle opacity="0.5" cx="8" cy="8" r="7" stroke="white" stroke-width="1.5" />
                                                                        <path d="M8 11.5V7.3" stroke="white" stroke-width="1.5"
                                                                            stroke-linecap="round" />
                                                                        <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19966)" fill="white" />
                                                                    </svg>
                                                                    <div className="tp-price-feature-tooltip">
                                                                        <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tp-price-feature-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>Real-Time Feedback</span>
                                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <circle opacity="0.5" cx="8" cy="8" r="7" stroke="white" stroke-width="1.5" />
                                                                        <path d="M8 11.5V7.3" stroke="white" stroke-width="1.5"
                                                                            stroke-linecap="round" />
                                                                        <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19966)" fill="white" />
                                                                    </svg>
                                                                    <div className="tp-price-feature-tooltip">
                                                                        <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tp-price-feature-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>Adding Time Manually</span>
                                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <circle opacity="0.5" cx="8" cy="8" r="7" stroke="white" stroke-width="1.5" />
                                                                        <path d="M8 11.5V7.3" stroke="white" stroke-width="1.5"
                                                                            stroke-linecap="round" />
                                                                        <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19966)" fill="white" />
                                                                    </svg>
                                                                    <div className="tp-price-feature-tooltip">
                                                                        <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tp-price-feature-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>Adding Time Manually</span>
                                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <circle opacity="0.5" cx="8" cy="8" r="7" stroke="white" stroke-width="1.5" />
                                                                        <path d="M8 11.5V7.3" stroke="white" stroke-width="1.5"
                                                                            stroke-linecap="round" />
                                                                        <circle r="0.7" transform="matrix(1 0 0 -1 7.99883 5.19966)" fill="white" />
                                                                    </svg>
                                                                    <div className="tp-price-feature-tooltip">
                                                                        <p>Add gradient heading, button, pricing table testimonial etc.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="tp-price-feature-info-item">
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>02</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>12</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>Limited</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>100</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>Limited</span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-price-feature-info-item active">
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>02</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>12</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>Limited</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>100</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>Limited</span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-price-feature-info-item">
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>02</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>12</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>Limited</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>100</span>
                                                        </div>
                                                        <div className="tp-price-feature-info text-center">
                                                            <span>Limited</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-team-area blue-bg pb-95">
                            <div className="container">
                                <div className="tp-team-section-wrapper mb-70">
                                    <div className="row align-items-end">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="tp-team-section-box">
                                                <h5 className="tp-section-subtitle-4 pb-10">THE TEAM</h5>
                                                <h3 className="tp-section-title-4">Our Leaders</h3>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                            <div className="tp-team-top-content d-flex justify-content-md-start justify-content-end">
                                                <p>Our clients are the companies and startups who <br /> make the world go round,!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-1">
                                        <div className="tp-team-item text-center z-index">
                                            <div className="tp-team-img tp-tilt-effect">
                                                <img src="assets/img/team/team-4-1.png" alt="" />
                                            </div>
                                            <div className="tp-team-content">
                                                <h4 className="tp-team-title-sm"><a href="team-details.html">Alexa Montes</a></h4>
                                                <span>Partner & COO</span>
                                            </div>
                                            <div className="tp-team-social">
                                                <a className="icon-color-1 box" href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-2 box" href="#">
                                                    <i className="fab fa-instagram"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-3 box" href="#">
                                                    <i className="fab fa-twitter"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-4 box" href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                    <span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-2">
                                        <div className="tp-team-item text-center z-index">
                                            <div className="tp-team-img">
                                                <img src="assets/img/team/team-4-2.png" alt="" />
                                            </div>
                                            <div className="tp-team-content">
                                                <h4 className="tp-team-title-sm"><a href="team-details.html">Ravi Ganatra</a></h4>
                                                <span>Designer</span>
                                            </div>
                                            <div className="tp-team-social">
                                                <a className="icon-color-1" href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-2" href="#">
                                                    <i className="fab fa-instagram"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-3" href="#">
                                                    <i className="fab fa-twitter"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-4" href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                    <span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-3">
                                        <div className="tp-team-item text-center z-index">
                                            <div className="tp-team-img">
                                                <img src="assets/img/team/team-4-3.png" alt="" />
                                            </div>
                                            <div className="tp-team-content">
                                                <h4 className="tp-team-title-sm"><a href="team-details.html">Imdat Cimsit</a></h4>
                                                <span>CEO & Founder</span>
                                            </div>
                                            <div className="tp-team-social">
                                                <a className="icon-color-1" href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-2" href="#">
                                                    <i className="fab fa-instagram"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-3" href="#">
                                                    <i className="fab fa-twitter"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-4" href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                    <span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 tp-team-border-right tp-border-after-4">
                                        <div className="tp-team-item text-center z-index">
                                            <div className="tp-team-img">
                                                <img src="assets/img/team/team-4-4.png" alt="" />
                                            </div>
                                            <div className="tp-team-content">
                                                <h4 className="tp-team-title-sm"><a href="team-details.html">Imdat Cimsit</a></h4>
                                                <span>PHP Developer</span>
                                            </div>
                                            <div className="tp-team-social">
                                                <a className="icon-color-1" href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-2" href="#">
                                                    <i className="fab fa-instagram"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-3" href="#">
                                                    <i className="fab fa-twitter"></i>
                                                    <span></span>
                                                </a>
                                                <a className="icon-color-4" href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                    <span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-security-area blue-bg pb-180 fix z-index">
                            <div className="container-fluid g-0">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <div className="tp-security-section-box text-center pb-100">
                                            <h5 className="tp-section-subtitle-4 both pb-10 wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay=".3s">Explore Our Level</h5>
                                            <h3 className="tp-section-title-4">Security by Industry</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-security-slider-wrapper wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                    <div className="tp-security-slider-active">
                                        <div className="tp-security-main">
                                            <div id="slideshow"
                                                className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                                <div className="tp-security-item d-flex align-items-center">
                                                    <div className="tp-security-img">
                                                        <img src="assets/img/security/security-1.png" alt="" />
                                                    </div>
                                                    <div className="tp-security-content">
                                                        <h4 className="tp-security-title-sm">Business <br /> Security</h4>
                                                    </div>
                                                </div>
                                                <div className="tp-security-link">
                                                    <a href="#">
                                                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-security-main">
                                            <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                                <div className="tp-security-item d-flex align-items-center">
                                                    <div className="tp-security-img">
                                                        <img src="assets/img/security/security-2.png" alt="" />
                                                    </div>
                                                    <div className="tp-security-content">
                                                        <h4 className="tp-security-title-sm">Logistics <br /> Security</h4>
                                                    </div>
                                                </div>
                                                <div className="tp-security-link">
                                                    <a href="#">
                                                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-security-main">
                                            <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                                <div className="tp-security-item d-flex align-items-center">
                                                    <div className="tp-security-img">
                                                        <img src="assets/img/security/security-3.png" alt="" />
                                                    </div>
                                                    <div className="tp-security-content">
                                                        <h4 className="tp-security-title-sm">Education <br /> Security</h4>
                                                    </div>
                                                </div>
                                                <div className="tp-security-link">
                                                    <a href="#">
                                                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-security-main">
                                            <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                                <div className="tp-security-item d-flex align-items-center">
                                                    <div className="tp-security-img">
                                                        <img src="assets/img/security/security-4.png" alt="" />
                                                    </div>
                                                    <div className="tp-security-content">
                                                        <h4 className="tp-security-title-sm">Food <br /> & Beverage</h4>
                                                    </div>
                                                </div>
                                                <div className="tp-security-link">
                                                    <a href="#">
                                                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-security-main">
                                            <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                                <div className="tp-security-item d-flex align-items-center">
                                                    <div className="tp-security-img">
                                                        <img src="assets/img/security/security-5.png" alt="" />
                                                    </div>
                                                    <div className="tp-security-content">
                                                        <h4 className="tp-security-title-sm">Media & <br /> Entertainment</h4>
                                                    </div>
                                                </div>
                                                <div className="tp-security-link">
                                                    <a href="#">
                                                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-security-main">
                                            <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                                <div className="tp-security-item d-flex align-items-center">
                                                    <div className="tp-security-img">
                                                        <img src="assets/img/security/security-3.png" alt="" />
                                                    </div>
                                                    <div className="tp-security-content">
                                                        <h4 className="tp-security-title-sm">Business <br /> Security</h4>
                                                    </div>
                                                </div>
                                                <div className="tp-security-link">
                                                    <a href="#">
                                                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-blog-area blue-bg pb-90">
                            <div className="container">
                                <div className="row align-items-end tp-blog-four-section-space">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="tp-blog-four-section-box">
                                            <h5 className="tp-section-subtitle-4 pb-10">News Feeds</h5>
                                            <h3 className="tp-section-title-4">Blog & Insights</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <div className="tp-blog-four-btn text-start text-lg-end">
                                            <a className="tp-btn-yellow-border" href="blog.html">Show More <i className="far fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s"
                                        data-wow-delay=".7s">
                                        <div className="tp-blog-four-item p-relative fix">
                                            <div className="tp-blog-four-img fix">
                                                <a href="blog-details.html"><img src="assets/img/blog/blog-4-1.jpg" alt="" /></a>
                                            </div>
                                            <div className="tp-blog-four-content-wrapper">
                                                <div className="tp-blog-four-meta">
                                                    <span className="child-1">Blog</span>
                                                    <span className="child-2">10 min</span>
                                                </div>
                                                <div className="tp-blog-four-info">
                                                    <h4 className="tp-blog-four-title-sm"><a href="blog-details.html">Building for the real world</a></h4>
                                                    <p>How friends from college went on to build one powerful
                                                        platform (hint: it was ours).</p>
                                                </div>
                                                <div className="tp-blog-four-btn">
                                                    <a className="tp-btn-service" href="blog-details.html">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s"
                                        data-wow-delay=".9s">
                                        <div className="tp-blog-four-item fix">
                                            <div className="tp-blog-four-img fix">
                                                <a href="blog-details.html"><img src="assets/img/blog/blog-4-2.jpg" alt="" /></a>
                                            </div>
                                            <div className="tp-blog-four-content-wrapper">
                                                <div className="tp-blog-four-meta">
                                                    <span className="child-1">Blog</span>
                                                    <span className="child-2">24 min</span>
                                                </div>
                                                <div className="tp-blog-four-info">
                                                    <h4 className="tp-blog-four-title-sm"><a href="blog-details.html">High Returns on Investment</a></h4>
                                                    <p>How friends from college went on to build one powerful
                                                        platform (hint: it was ours).</p>
                                                </div>
                                                <div className="tp-blog-four-btn">
                                                    <a className="tp-btn-service" href="blog-details.html">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-contact-area tp-contact-overlay pt-120 pb-120 blue-bg z-index p-relative fix">
                            <div className="tp-contact-glob-img">
                                <img src="assets/img/hero/hero-4-3.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-12 z-index-3">
                                        <div className="tp-contact-section-box pb-25">
                                            <h5 className="tp-section-subtitle-4 pb-10 ">CONTACT US</h5>
                                            <h3 className="tp-section-title-4">Request Free Consultancy</h3>
                                        </div>
                                        <div className="tp-contact-info-box tp-title-anim">
                                            <ul>
                                                <li>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.2227 1C13.2227 1 15.9115 1.24444 19.3336 4.66659C22.7558 8.08874 23.0002 10.7776 23.0002 10.7776"
                                                            stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                        <path
                                                            d="M13.4756 5.32031C13.4756 5.32031 14.6855 5.666 16.5004 7.48087C18.3152 9.29574 18.6609 10.5056 18.6609 10.5056"
                                                            stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                        <path
                                                            d="M1.00801 8.25232C0.919597 10.5844 1.50981 14.545 5.48265 18.5178C6.44111 19.4762 7.39885 20.2378 8.33317 20.8405M2.8795 4.59079C4.58196 2.88834 7.29819 3.11708 8.37912 5.05393L9.17234 6.47526C9.88818 7.75793 9.60081 9.44058 8.47337 10.568C8.47337 10.568 8.47337 10.568 8.47337 10.568C8.47325 10.5681 7.10592 11.9357 9.58533 14.4151C12.0641 16.8939 13.4316 15.5279 13.4324 15.5271C13.4324 15.527 13.4324 15.5271 13.4325 15.527C14.5599 14.3996 16.2425 14.1123 17.5252 14.8281L18.9465 15.6213C20.8834 16.7023 21.1121 19.4185 19.4097 21.1209C18.3867 22.1439 17.1335 22.9399 15.7481 22.9924C14.7532 23.0302 13.4619 22.9444 11.9998 22.5251"
                                                            stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <a href="tel:(+806)0008899">(+806) 000 88 99</a>
                                                </li>
                                                <li>
                                                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6.6 8.99922C6.6 9.44105 6.24183 9.79922 5.8 9.79922C5.35817 9.79922 5 9.44105 5 8.99922C5 8.55739 5.35817 8.19922 5.8 8.19922C6.24183 8.19922 6.6 8.55739 6.6 8.99922Z"
                                                            fill="#F8FF35" />
                                                        <path
                                                            d="M9.8 8.99922C9.8 9.44105 9.44183 9.79922 9 9.79922C8.55817 9.79922 8.2 9.44105 8.2 8.99922C8.2 8.55739 8.55817 8.19922 9 8.19922C9.44183 8.19922 9.8 8.55739 9.8 8.99922Z"
                                                            fill="#F8FF35" />
                                                        <path
                                                            d="M13 8.99922C13 9.44105 12.6418 9.79922 12.2 9.79922C11.7582 9.79922 11.4 9.44105 11.4 8.99922C11.4 8.55739 11.7582 8.19922 12.2 8.19922C12.6418 8.19922 13 8.55739 13 8.99922Z"
                                                            fill="#F8FF35" />
                                                        <path
                                                            d="M13 2.07026C11.8233 1.38958 10.4571 1 9 1C4.58172 1 1 4.58172 1 9C1 10.2797 1.30049 11.4893 1.83477 12.562C1.97675 12.847 2.02401 13.1729 1.94169 13.4805L1.46521 15.2613C1.25836 16.0344 1.96561 16.7416 2.73868 16.5348L4.51951 16.0583C4.82715 15.976 5.15297 16.0233 5.43802 16.1652C6.51069 16.6995 7.72025 17 9 17C13.4183 17 17 13.4183 17 9C17 7.54285 16.6104 6.17669 15.9297 5"
                                                            stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <a href="mailto:contact@info.com">contact@info.com</a>
                                                </li>
                                                <li>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.69922 6.86317C3.69922 3.62503 6.51983 1 9.99922 1C13.4786 1 16.2992 3.62503 16.2992 6.86317C16.2992 10.0759 14.2885 13.8249 11.1513 15.1656C10.4199 15.4781 9.57849 15.4781 8.84716 15.1656C5.70996 13.8249 3.69922 10.0759 3.69922 6.86317Z"
                                                            stroke="#F8FF35" stroke-width="1.5" />
                                                        <path
                                                            d="M11.7992 7.3C11.7992 8.29411 10.9933 9.1 9.99922 9.1C9.00511 9.1 8.19922 8.29411 8.19922 7.3C8.19922 6.30589 9.00511 5.5 9.99922 5.5C10.9933 5.5 11.7992 6.30589 11.7992 7.3Z"
                                                            stroke="#F8FF35" stroke-width="1.5" />
                                                        <path
                                                            d="M18.0645 13.1504C18.6633 13.6926 19 14.3038 19 14.9504C19 17.1871 14.9706 19.0004 10 19.0004C5.02944 19.0004 1 17.1871 1 14.9504C1 14.3038 1.33671 13.6926 1.93552 13.1504"
                                                            stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <a href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853"
                                                        target="_blank">1811 Silverside Rd, Wilmington, <br /> DE 19810, USA</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-12 ">
                                        <div className="tp-contact-input-wrapperrr p-relative">
                                            <div className="tp-contact-shape">
                                                <img src="assets/img/contact/shape-4-1.png" alt="" />
                                            </div>
                                            <div className="tp-contact-input-wrapper p-relative">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="tp-contact-input mb-20">
                                                            <input type="text" placeholder="Full name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="tp-contact-input mb-20">
                                                            <input type="email" placeholder="Email address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="tp-contact-select">
                                                            <div className="tp-select-icon">
                                                                <select>
                                                                    <option>Hack Protection</option>
                                                                    <option>Online Support</option>
                                                                    <option>Live Security</option>
                                                                    <option>Hack Protection</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="tp-contact-input mb-20">
                                                            <textarea placeholder="Enter your message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <div className="tp-contact-btn">
                                                            <button type="submit" className="tp-btn-yellow-lg yellow-bg w-100">Get a free consultation</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>

                    <footer>

                        <div className="tp-footer__pl-pr blue-bg z-index">
                            <div className="tp-footer__area tp-footer__border-bottom-4 fix">
                                <div className="tp-footer-bottom-shape">
                                    <img src="assets/img/footer/footer-bottom-shape-4-1.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                            <div className="tp-footer__widget footer-widget-4 footer-col-4-1">
                                                <div className="tp-footer__logo mb-25">
                                                    <a href="index.html">
                                                        <img src="assets/img/logo/logo-white.png" alt="" />
                                                    </a>
                                                </div>
                                                <h3 className="footer-subtitle-3">SUBSCRIBE TO OUR NEWSLETTER</h3>
                                                <div className="tp-footer-subscribe mb-15">
                                                    <form action="#">
                                                        <div className="tp-footer-subscribe-input-box">
                                                            <div className="tp-footer-subscribe-input">
                                                                <input type="email" placeholder="Enter your e-mail" />
                                                                <span>
                                                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17 7.4C17 10.417 17 11.9255 16.0627 12.8627C15.1255 13.8 13.617 13.8 10.6 13.8H7.4C4.38301 13.8 2.87452 13.8 1.93726 12.8627C1 11.9255 1 10.417 1 7.4C1 4.38301 1 2.87452 1.93726 1.93726C2.87452 1 4.38301 1 7.4 1H10.6C13.617 1 15.1255 1 16.0627 1.93726C16.5853 2.4598 16.8165 3.15991 16.9188 4.2" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" />
                                                                        <path d="M13.7992 4.19922L12.0721 5.63848C10.6028 6.86291 9.86814 7.47512 8.99922 7.47512C8.47978 7.47512 8.00832 7.25634 7.39922 6.81877M4.19922 4.19922L4.91922 4.79922L5.63922 5.39922" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <button type="submit">
                                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <p>By subscribing, you accepted the our <a href="#">Policy</a></p>
                                                <div className="tp-team-social">
                                                    <a className="icon-color-1" href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                        <span></span>
                                                    </a>
                                                    <a className="icon-color-2" href="#">
                                                        <i className="fab fa-instagram"></i>
                                                        <span></span>
                                                    </a>
                                                    <a className="icon-color-3" href="#">
                                                        <i className="fab fa-twitter"></i>
                                                        <span></span>
                                                    </a>
                                                    <a className="icon-color-4" href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                        <span></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-5 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                            <div className="tp-footer__widget footer-widget-4 footer-col-4-2">
                                                <h4 className="tp-footer__widget-title">Platform</h4>
                                                <div className="tp-footer__content">
                                                    <ul>
                                                        <li><a href="#">Demo page</a></li>
                                                        <li><a href="#">FAQ</a></li>
                                                        <li><a href="#">About</a></li>
                                                        <li><a href="#">Pricing Plan</a></li>
                                                        <li><a href="#">Integrations</a></li>
                                                        <li><a href="#">Blog</a></li>
                                                        <li><a href="#">Contact</a></li>
                                                        <li><a href="#">Tools & Integrations</a></li>
                                                        <li><a href="#">Security</a></li>
                                                        <li><a href="#">Customers</a></li>
                                                        <li><a href="#">Career</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 pb-45 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                            <div className="tp-footer__widget footer-widget-4 footer-col-4-3">
                                                <h4 className="tp-footer__widget-title">Contact Info</h4>
                                                <div className="tp-contact-info-box">
                                                    <ul>
                                                        <li>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.2227 1C13.2227 1 15.9115 1.24444 19.3336 4.66659C22.7558 8.08874 23.0002 10.7776 23.0002 10.7776"
                                                                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                                <path
                                                                    d="M13.4756 5.32031C13.4756 5.32031 14.6855 5.666 16.5004 7.48087C18.3152 9.29574 18.6609 10.5056 18.6609 10.5056"
                                                                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                                <path
                                                                    d="M1.00801 8.25232C0.919597 10.5844 1.50981 14.545 5.48265 18.5178C6.44111 19.4762 7.39885 20.2378 8.33317 20.8405M2.8795 4.59079C4.58196 2.88834 7.29819 3.11708 8.37912 5.05393L9.17234 6.47526C9.88818 7.75793 9.60081 9.44058 8.47337 10.568C8.47337 10.568 8.47337 10.568 8.47337 10.568C8.47325 10.5681 7.10592 11.9357 9.58533 14.4151C12.0641 16.8939 13.4316 15.5279 13.4324 15.5271C13.4324 15.527 13.4324 15.5271 13.4325 15.527C14.5599 14.3996 16.2425 14.1123 17.5252 14.8281L18.9465 15.6213C20.8834 16.7023 21.1121 19.4185 19.4097 21.1209C18.3867 22.1439 17.1335 22.9399 15.7481 22.9924C14.7532 23.0302 13.4619 22.9444 11.9998 22.5251"
                                                                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                            </svg>
                                                            <a href="tel:(+806)0008899">(+806) 000 88 99</a>
                                                        </li>
                                                        <li>
                                                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M6.6 8.99922C6.6 9.44105 6.24183 9.79922 5.8 9.79922C5.35817 9.79922 5 9.44105 5 8.99922C5 8.55739 5.35817 8.19922 5.8 8.19922C6.24183 8.19922 6.6 8.55739 6.6 8.99922Z"
                                                                    fill="#F8FF35" />
                                                                <path
                                                                    d="M9.8 8.99922C9.8 9.44105 9.44183 9.79922 9 9.79922C8.55817 9.79922 8.2 9.44105 8.2 8.99922C8.2 8.55739 8.55817 8.19922 9 8.19922C9.44183 8.19922 9.8 8.55739 9.8 8.99922Z"
                                                                    fill="#F8FF35" />
                                                                <path
                                                                    d="M13 8.99922C13 9.44105 12.6418 9.79922 12.2 9.79922C11.7582 9.79922 11.4 9.44105 11.4 8.99922C11.4 8.55739 11.7582 8.19922 12.2 8.19922C12.6418 8.19922 13 8.55739 13 8.99922Z"
                                                                    fill="#F8FF35" />
                                                                <path
                                                                    d="M13 2.07026C11.8233 1.38958 10.4571 1 9 1C4.58172 1 1 4.58172 1 9C1 10.2797 1.30049 11.4893 1.83477 12.562C1.97675 12.847 2.02401 13.1729 1.94169 13.4805L1.46521 15.2613C1.25836 16.0344 1.96561 16.7416 2.73868 16.5348L4.51951 16.0583C4.82715 15.976 5.15297 16.0233 5.43802 16.1652C6.51069 16.6995 7.72025 17 9 17C13.4183 17 17 13.4183 17 9C17 7.54285 16.6104 6.17669 15.9297 5"
                                                                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                            </svg>
                                                            <a href="mailto:contact@info.com">contact@info.com</a>
                                                        </li>
                                                        <li>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M3.69922 6.86317C3.69922 3.62503 6.51983 1 9.99922 1C13.4786 1 16.2992 3.62503 16.2992 6.86317C16.2992 10.0759 14.2885 13.8249 11.1513 15.1656C10.4199 15.4781 9.57849 15.4781 8.84716 15.1656C5.70996 13.8249 3.69922 10.0759 3.69922 6.86317Z"
                                                                    stroke="#F8FF35" stroke-width="1.5" />
                                                                <path
                                                                    d="M11.7992 7.3C11.7992 8.29411 10.9933 9.1 9.99922 9.1C9.00511 9.1 8.19922 8.29411 8.19922 7.3C8.19922 6.30589 9.00511 5.5 9.99922 5.5C10.9933 5.5 11.7992 6.30589 11.7992 7.3Z"
                                                                    stroke="#F8FF35" stroke-width="1.5" />
                                                                <path
                                                                    d="M18.0645 13.1504C18.6633 13.6926 19 14.3038 19 14.9504C19 17.1871 14.9706 19.0004 10 19.0004C5.02944 19.0004 1 17.1871 1 14.9504C1 14.3038 1.33671 13.6926 1.93552 13.1504"
                                                                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                                                            </svg>
                                                            <a href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853"
                                                                target="_blank">1811 Silverside Rd, <br /> Wilmington, DE 19810, USA</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-copyright__area pt-20 pb-20 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="tp-copyright__text tp-copyright__text-4 text-center">
                                                <span>Full Copyright & Design By <a href="#">@Theme pure</a> – 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </footer>
                </div>
            </div>


        </body>

    )
}

export default SearchBox