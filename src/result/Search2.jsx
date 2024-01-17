import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Link, useParams, useNavigate } from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

import './Search.css'

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

import manarrow from '../assets/man_arrow.png'
import bubbles from '../assets/about_s6_bubbles.png'
import img16 from '../assets/16.png'
import img15 from '../assets/15.png'
import img14 from '../assets/14.png'
import img17 from '../assets/17.png'
import img18 from '../assets/18.png'
import img19 from '../assets/19.png'
import img20 from '../assets/20.png'

// import hero images 
import heroshape1 from '../assets/img/hero/hero-shape-1.png'
import heroshape2 from '../assets/img/hero/hero-shape-2.png'
import heroframe from '../assets/img/hero/hero-frame.png'
import herolineshape from '../assets/img/hero/hero-line-shape.png'
import herolineshape2 from '../assets/img/hero/hero-line-shape-2.png'

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

// import feature logos 
import featurebgshape1 from '../assets/img/feature/fea-bg-shape-1.png'
import feature51 from '../assets/img/feature/fea-circle-5-1.png'
import feature52 from '../assets/img/feature/fea-circle-5-2.png'
import feature53 from '../assets/img/feature/fea-circle-5-3.png'
import feature54 from '../assets/img/feature/fea-circle-5-4.png'
import feature55 from '../assets/img/feature/fea-circle-5-5.png'
import feature56 from '../assets/img/feature/fea-circle-5-6.png'
import feature57 from '../assets/img/feature/fea-circle-5-7.png'
import feature58 from '../assets/img/feature/fea-circle-5-8.png'
import feature59 from '../assets/img/feature/fea-circle-5-9.png'
import feature510 from '../assets/img/feature/fea-circle-5-10.png'
import feature511 from '../assets/img/feature/fea-circle-5-11.png'
import feature512 from '../assets/img/feature/fea-circle-5-12.png'
import featureicon1 from '../assets/img/feature/fea-icon-1.png'
import featureicon2 from '../assets/img/feature/fea-icon-2.png'
import featureicon3 from '../assets/img/feature/fea-icon-3.png'

// import services 
import service1 from '../assets/img/service/sv-icon-1.png'
import service2 from '../assets/img/service/sv-icon-2.png'
import service3 from '../assets/img/service/sv-icon-3.png'
import service4 from '../assets/img/service/sv-icon-4.png'
import service5 from '../assets/img/service/sv-icon-5.png'
import servicedashboard from '../assets/img/service/sv-dashbord.png'

// Importing project images 
import project1 from '../assets/img/project/project-img-1.jpg'
import project2 from '../assets/img/project/project-img-2.jpg'
import project3 from '../assets/img/project/project-img-3.jpg'
import project4 from '../assets/img/project/project-img-4.jpg'
import projectbrand1 from '../assets/img/project/project-brand-1.png'
import projectbrand2 from '../assets/img/project/project-brand-2.png'
import projectbrand4 from '../assets/img/project/project-brand-4.png'

// importing about /
import about1 from '../assets/img/about/about-1.jpg'
import about2 from '../assets/img/about/about-2.jpg'
import about3 from '../assets/img/about/about-3.jpg'
import about5 from '../assets/img/about/about-5.png'
import aboutbgshape from '../assets/img/about/about-bg-shape.png'

import mainLogo from '../assets/google.png'

const Search2 = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        },
    }

    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

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

            <div className="search__popup">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="search__wrapper">
                                <div className="search__top d-flex justify-content-between align-items-center">
                                    <div className="search__logo">
                                        <a href="home-main.html">
                                            <img src={mainLogo} alt="" />
                                        </a>
                                    </div>
                                    <div className="search__close">
                                        <button type="button" className="search__close-btn search-close-btn">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="search__form">
                                    <form onSubmit={handleSearch} method='post'>
                                        <div className="search__input">
                                            <input className="search-input-field" type="text" name='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Type here to search..." />
                                            <span className="search-focus-border"></span>
                                            <button type="submit">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                                <a href="#">Pages</a>
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
                                                <a href="blog-details.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="blog-details-2.html">Blog Details 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="project-details.html">Projects</a>
                                                <ul className="submenu">
                                                    <li><a href="project.html">Project</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                                    <div className="header-bottom__action">
                                        <a className="d-none d-md-inline-block search-open-btn" href="javascript:void(0)">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z"
                                                    stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M16.9999 17L15.3999 15.4" stroke="#292D32" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                        <a className="d-none d-lg-inline-block last-child" href="/login">
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <span>Log In</span>
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
                    <div className="mobile-menu"></div>
                    <div className="tpoffcanvas__instagram text-center">
                        <div className="tpoffcanvas__instagram-title">
                            <h4>instagram</h4>
                        </div>
                        <a href="#"><img src="assets/img/project/project-inner-4.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-5.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-6.jpg" alt="" /></a>
                        <a href="#"><img src="assets/img/project/project-inner-7.jpg" alt="" /></a>
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

                    <main className="fix">

                        <div className="tp-hero__area tp-hero__pl-pr">
                            <div className="tp-hero__bg p-relative">
                                <div className="tp-hero-bg tp-hero-bg-single">
                                    <img src={heroframe} alt="" />
                                </div>
                                <div className="tp-hero-shape">
                                    <img className="tp-hero-shape-1" src={herolineshape} alt="" />
                                    <img className="tp-hero-shape-2" src={herolineshape2} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-10">
                                            <div className="tp-hero__content-box text-center z-index-3">
                                                <div className="tp-hero__title-box p-relative">
                                                    <h2 className="tp-hero__hero-title tp-title-anim">
                                                        <img src={mainLogo} />
                                                    </h2>
                                                    <div className="tp-hero__title-shape d-none d-sm-block">
                                                        <svg width="491" height="24" viewBox="0 0 491 26" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path className="line1" fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M208.549 3.29849C185.59 4.08616 162.901 5.05468 140.776 6.11351C109.455 7.61138 78.1462 9.16091 47.0261 11.6143C37.2302 12.3891 27.2823 12.8797 17.5476 13.8482C11.4368 14.4551 3.334 15.3201 2.27061 15.5009C1.71441 15.6042 1.47176 15.7593 1.39336 15.8109C0.842061 16.1725 0.942652 16.521 1.25383 16.7921C1.37879 16.9084 1.69478 17.1925 2.57195 17.2313C61.2348 19.8784 121.221 14.7133 179.955 14.171C281.81 13.2413 386.752 16.9343 487.799 24.9918C488.681 25.0564 489.539 24.7334 489.661 24.2557C489.808 23.7908 489.171 23.3389 488.289 23.2743C387.071 15.2039 281.957 11.498 179.906 12.4406C125.168 12.9442 69.3499 17.4766 14.5363 15.9271C15.7957 15.798 17.0307 15.6688 18.1578 15.5526C27.8533 14.5841 37.7594 14.1064 47.5162 13.3316C78.5701 10.8782 109.815 9.32872 141.095 7.84376C179.906 5.98434 220.408 4.38316 261.228 3.63423C275.831 3.75044 290.386 3.86671 304.94 4.00875C336.425 4.31865 368.057 5.22254 399.469 6.43633C408.927 6.8108 418.385 7.19814 427.842 7.53387C430.979 7.65009 439.064 7.98576 440.191 7.95993C441.588 7.93411 441.857 7.31436 441.882 7.21106C441.955 6.97863 441.906 6.65579 441.22 6.38463C441.147 6.34589 440.706 6.21668 439.726 6.13921C382.611 1.56813 321.626 0.806405 261.277 1.90398C197.621 1.42621 133.719 1.21951 70.2247 1C69.3157 1 68.5733 1.38744 68.5659 1.8652C68.561 2.34297 69.2935 2.73042 70.2026 2.74333C116.178 2.89828 162.387 3.05315 208.549 3.29849Z"
                                                                fill="none" stroke="none" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="tp-hero__input p-relative wow tpfadeUp" data-wow-duration=".9s"
                                                    data-wow-delay=".5s">
                                                    <form onSubmit={handleSearch} method='post'>
                                                        <div className="p-relative">
                                                            <input type="text" placeholder="Type here to search" name='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                                            <FaMagnifyingGlass />
                                                        </div>
                                                        <button type='submit' className="tp-btn tp-btn-hover alt-color-black">
                                                            <span>Search</span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tp-hero__bottom z-index-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-10">
                                            <div className="tp-hero__thumb-wrapper-main p-relative">
                                                <div className="tp-hero__shape-img-1 d-none d-xl-block">
                                                    <img src={heroshape1} alt="" />
                                                </div>
                                                <div className="tp-hero__shape-img-2 d-none d-xl-block">
                                                    <img src={heroshape2} alt="" />
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-payment-method__area tp-payment-method__space" style={{ paddingBottom: '100px' }}>
                            <div className="container-fluid g-0">
                                <div className="row g-0 justify-content-center">
                                    <div className="col-xl-7">
                                        <div className="tp-payment-method__title-box text-center mb-20">
                                            <h3 className="tp-section-title-lg pb-10">All major <br />
                                                payment methods</h3>
                                            <p>We've got all your payments covered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="tp-payment-method__wrapper text-center p-relative">
                                            <div className="tp-payment-method__main-circle p-relative z-index">
                                                <div className="tp-payment-method__main-img z-index-3">
                                                    <img src={paylogomain} alt="" />
                                                </div>
                                                <div className="tp-payment-method__line-1">
                                                    <div className="tp-payment-method__circle circle-1"></div>
                                                    <span><img src={paylogo1} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-2 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-2"></div>
                                                    <span><img src={paylogo2} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-3">
                                                    <div className="tp-payment-method__circle circle-3"></div>
                                                    <span><img src={paylogo3} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-4 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-4"></div>
                                                    <span><img src={paylogo4} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-5">
                                                    <div className="tp-payment-method__circle circle-5"></div>
                                                    <span><img src={paylogo5} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-6 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-6"></div>
                                                    <span><img src={paylogo6} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-7">
                                                    <div className="tp-payment-method__circle circle-7"></div>
                                                    <span><img src={paylogo7} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-8 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-8"></div>
                                                    <span><img src={paylogo16} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-9">
                                                    <div className="tp-payment-method__circle circle-9"></div>
                                                    <span><img src={paylogo15} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-10 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-10"></div>
                                                    <span><img src={paylogo14} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-11">
                                                    <div className="tp-payment-method__circle circle-11"></div>
                                                    <span><img src={paylogo13} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-12 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-12"></div>
                                                    <span><img src={paylogo12} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-13">
                                                    <div className="tp-payment-method__circle circle-13"></div>
                                                    <span><img src={paylogo11} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-14 d-none d-lg-block">
                                                    <div className="tp-payment-method__circle circle-14"></div>
                                                    <span><img src={paylogo10} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-15">
                                                    <div className="tp-payment-method__circle circle-15"></div>
                                                    <span><img src={paylogo9} alt="" /></span>
                                                </div>
                                                <div className="tp-payment-method__line-16">
                                                    <div className="tp-payment-method__circle circle-16"></div>
                                                    <span><img src={paylogo8} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-about__area tp-about__pt-pb pb-160" style={{ paddingTop: '100px' }}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                                        <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                                            <div className="tp-about__bg-shape">
                                                <img src={bubbles} alt="" />
                                            </div>
                                            <div className="tp-about__main-img z-index">
                                                <img src={manarrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                                        <div className="tp-about__right">
                                            <div className="tp-about__section-box">
                                                <h4 className="tp-section-title" style={{ marginBottom: '20px' }}>Why <span style={{ backgroundColor: 'blue', padding: '5px', color: 'white', borderRadius: '10px' }}>Bsearch</span>?
                                                </h4>
                                                <p>We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out</p>
                                            </div>
                                            <div className="tp-about__list">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Affordable Price.</li>
                                                    <li><i className="fal fa-check"></i>Top-Notch Experts Consulting.</li>
                                                    <li><i className="fal fa-check"></i>Dedicated Support 24/7.</li>
                                                </ul>
                                            </div>
                                            <div className="tp-about__btn">
                                                <a className="tp-btn tp-btn-hover alt-color-black" href="about.html">
                                                    <span>About Us</span>
                                                    <b></b>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-service__area p-relative fix">
                            <div className="tp-service__grey-shape grey-bg"></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="tp-service__section-box mb-50 text-center tp-title-anim">
                                            <h2 className="tp-section-title">Discover our top services</h2>
                                            <p>More than 15,000 companies trust and choose Itech</p>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="content" style={{marginBottom:'80px'}}>
                                    <div className="services-slider position-relative style-6">
                                        <div className="swiper-container">
                                            <Carousel
                                                responsive={responsive}
                                                showDots={false}
                                                autoPlay={true}
                                                autoPlaySpeed={2000}
                                                infinite={true}
                                                arrows={false}
                                            >
                                                {/* <div className="swiper-wrapper"> */}

                                                <div className="swiper-slide">
                                                    <a
                                                        href="page-services-5.html"
                                                        className="service-card style-6"
                                                    >
                                                        <div className="icon">
                                                            <img src={img16} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>Content Strategy</h5>
                                                            <div className="text">
                                                                You can provide the answers that your potential
                                                                customers are trying to find, so you can become the
                                                                industry.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="swiper-slide">
                                                    <a
                                                        href="page-services-5.html"
                                                        className="service-card style-6"
                                                    >
                                                        <div className="icon">
                                                            <img src={img15} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>Google/FB Ads</h5>
                                                            <div className="text">
                                                                Get more website traffic, more customers &amp; more
                                                                online visibility with powerful SEO services.
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="page-services-5.html"
                                                        className="service-card style-6"
                                                    >
                                                        <div className="icon">
                                                            <img src={img14} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>Email Marketing</h5>
                                                            <div className="text">
                                                                Your website has to impress your visitors within
                                                                just a few seconds
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="page-services-5.html"
                                                        className="service-card style-6"
                                                    >
                                                        <div className="icon">
                                                            <img src={img17} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>Social Media</h5>
                                                            <div className="text">
                                                                Get more website traffic, more customers for your
                                                                social chanel
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="page-services-5.html"
                                                        className="service-card style-6"
                                                    >
                                                        <div className="icon">
                                                            <img src={img18} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>Website Design and Development</h5>
                                                            <div className="text">
                                                                Your website has to impress your visitors within
                                                                just a few seconds. If it runs slow, if it feels
                                                                outdated
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="page-services-5.html"
                                                        className="service-card style-6"
                                                    >
                                                        <div className="icon">
                                                            <img src={img19} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>TVC/ Viral Clip</h5>
                                                            <div className="text">
                                                                Optimized your website on google result with PPC
                                                                Marketing
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="page-services-5.html"
                                                        className="service-card style-6"
                                                    >
                                                        <div className="icon">
                                                            <img src={img20} alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <h5>PPC Ads</h5>
                                                            <div className="text">
                                                                Optimized your website on google result with PPC
                                                                Marketing
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                                {/* </div> */}
                                            </Carousel>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a
                                            href="page-services-5.html"
                                            className="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold me-3"
                                        >
                                            <span>
                                                See All Our Services
                                                <i className="bi bi-arrow-right ms-1" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tp-rank__area pb-200">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 order-1 order-lg-1">
                                        <div className="tp-rank__section-box pb-25 wow tpfadeUp" data-wow-duration=".9s"
                                            data-wow-delay=".3s">
                                            <h4 className="tp-section-subtitle">Key Benefits</h4>
                                            <h3 className="tp-section-title">Get more Sales <br /> by Improving <br /> Results
                                            </h3>
                                        </div>
                                        <div className="tp-rank__btn wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                            <a className="tp-btn tp-btn-hover alt-color-black" href="service-details.html">
                                                <span>Explore More</span>
                                                <b></b>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 order-0 order-lg-2">
                                        <div className="tp-rank__wrapper p-relative">
                                            <div className="tp-rank__circle-shape-1 d-none d-sm-block wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay=".3s">
                                                <img src="assets/img/rank/sky-circle.png" alt="" />
                                            </div>
                                            <div className="tp-rank__circle-shape-2 d-none d-sm-block wow tpfadeLeft" data-wow-duration=".9s"
                                                data-wow-delay=".5s">
                                                <img src="assets/img/rank/yellow-circle.png" alt="" />
                                            </div>
                                            <div className="tp-rank__circle-shape-3 d-none d-sm-block wow tpfadeRight"
                                                data-wow-duration=".9s" data-wow-delay=".4s">
                                                <img src="assets/img/rank/black-circle.png" alt="" />
                                            </div>
                                            <div className="tp-rank__circle-shape-4 d-none d-sm-block wow tpfadeIn" data-wow-duration=".9s"
                                                data-wow-delay=".7s">
                                                <img src="assets/img/rank/black-sm-circle.png" alt="" />
                                            </div>
                                            <div className="tp-rank__circle-shape-5 d-none d-sm-block wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay=".9s">
                                                <img src="assets/img/rank/black-sm-circle.png" alt="" />
                                            </div>
                                            <div className="tp-rank__circle-shape-6 d-none d-sm-block wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay=".2s">
                                                <img src="assets/img/rank/black-sm-circle.png" alt="" />
                                            </div>
                                            <div className="tp-rank__circle-shape-7 d-none d-sm-block wow tpfadeIn" data-wow-duration=".9s"
                                                data-wow-delay="1s">
                                                <img src="assets/img/rank/black-sm-circle.png" alt="" />
                                            </div>
                                            <div className="tp-rank__bg-shape">
                                                <img className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay="1.2s"
                                                    src="assets/img/rank/rank-bg-shape.png" alt="" />
                                            </div>
                                            <div className="tp-rank__rank-card wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                                                <div className="tp-rank__item active p-relative z-index">
                                                    <div className="tp-rank__cup">
                                                        <span><img src="assets/img/rank/rank-cup.png" alt="" /></span>
                                                    </div>
                                                    <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                                        <i>#</i>
                                                        <span>1</span>
                                                    </div>
                                                    <div className="tp-rank__company">
                                                        <span><img src="assets/img/rank/amazon.png" alt="" /></span>
                                                    </div>
                                                    <div className="tp-rank__company-info">
                                                        <a href="#">amazon.com</a>
                                                        <span>2.4B Visits</span>
                                                    </div>
                                                </div>
                                                <div className="tp-rank__item p-relative">
                                                    <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                                        <i>#</i>
                                                        <span>2</span>
                                                    </div>
                                                    <div className="tp-rank__company">
                                                        <span><img src="assets/img/rank/ebay.png" alt="" /></span>
                                                    </div>
                                                    <div className="tp-rank__company-info">
                                                        <a href="#">ebay.com</a>
                                                        <span>700.2M Visits</span>
                                                    </div>
                                                </div>
                                                <div className="tp-rank__item p-relative z-index">
                                                    <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                                        <i>#</i>
                                                        <span>3</span>
                                                    </div>
                                                    <div className="tp-rank__company">
                                                        <span><img src="assets/img/rank/walmart.png" alt="" /></span>
                                                    </div>
                                                    <div className="tp-rank__company-info">
                                                        <a href="#">walmart.com</a>
                                                        <span>489.6M Visits</span>
                                                    </div>
                                                </div>
                                                <div className="tp-rank__item p-relative">
                                                    <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                                        <i>#</i>
                                                        <span>4</span>
                                                    </div>
                                                    <div className="tp-rank__company">
                                                        <span><img src="assets/img/rank/shopify.png" alt="" /></span>
                                                    </div>
                                                    <div className="tp-rank__company-info">
                                                        <a href="#">shopify.com</a>
                                                        <span>386.6M Visits</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tp-price__area tp-price__pl-pr p-relative pt-110 pb-80">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-7 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                        <div className="tp-price__section-box text-center mb-35">
                                            <h2 className="tp-section-title">Deliver End-To-End Retail
                                                Billing & Solutions</h2>
                                            <p>Choose a plan tailored to your needs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                    <div className="col-12">
                                        <div className="tp-price__btn-box p-relative mb-50 d-flex justify-content-center">
                                            <div className="tp-price-offer-badge-wrap d-none d-sm-block">
                                                <div className="price-shape-line">
                                                    <svg width="80" height="42" viewBox="0 0 80 42" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M78.5938 8.78059C59.0829 45.2801 2.05127 -8.72021 27.0652 32.28C52.079 73.2801 48.5771 -41.2195 0.550438 18.7821"
                                                            stroke="#FF3C82" stroke-dasharray="3 3" />
                                                    </svg>
                                                </div>
                                                <div className="price-offer-badge">
                                                    <span>SAVE <br />
                                                        35%</span>
                                                </div>
                                            </div>
                                            <nav>
                                                <div className="nav nav-tab tp-price__btn-bg" id="nav-tab" role="tablist">
                                                    <button className="nav-link active monthly" id="nav-home-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                                        aria-selected="true">Monthly</button>
                                                    <button className="nav-link yearly" id="nav-profile-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                                        aria-selected="false">Yearly</button>
                                                    <span className="test"></span>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-tab-content">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                            aria-labelledby="nav-home-tab" tabindex="0">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                                    <div className="tp-price__item p-relative">
                                                        <div className="tp-price__icon">
                                                            <img src="assets/img/price/price-icon-1.png" alt="" />
                                                        </div>
                                                        <div className="tp-price__title-box">
                                                            <h4 className="tp-price__title-sm">Personal Plan</h4>
                                                            <p>Customized anything in anytime</p>
                                                        </div>
                                                        <div className="tp-price__feature">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Easy To Track AI Data
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    100+ Ready Boots
                                                                </li>
                                                                <li className="inactive">
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Best Data Plan & Package
                                                                </li>
                                                                <li className="inactive">
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    24/7 Online Support
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tp-price__btn tp-btn-price">
                                                            <span>Price: 146.00</span>
                                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                                    <div className="tp-price__item active p-relative">
                                                        <div className="tp-price__icon">
                                                            <img src="assets/img/price/price-icon-2.png" alt="" />
                                                        </div>
                                                        <div className="tp-price__title-box">
                                                            <h4 className="tp-price__title-sm">Advanced</h4>
                                                            <p>Customized anything in anytime</p>
                                                        </div>
                                                        <div className="tp-price__feature">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Easy To Track AI Data
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    100+ Ready Boots
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span> Best Data Plan & Package
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    24/7 Online Support
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tp-price__btn tp-btn-price">
                                                            <span>Price: 159.00</span>
                                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                                    <div className="tp-price__item p-relative">
                                                        <div className="tp-price__icon">
                                                            <img src="assets/img/price/price-icon-3.png" alt="" />
                                                        </div>
                                                        <div className="tp-price__title-box">
                                                            <h4 className="tp-price__title-sm">For Team</h4>
                                                            <p>Customized anything in anytime</p>
                                                        </div>
                                                        <div className="tp-price__feature">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Easy To Track AI Data
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    100+ Ready Boots
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Best Data Plan & Package
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    24/7 Online Support
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tp-price__btn tp-btn-price">
                                                            <span>Price: 289.00</span>
                                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                                            tabindex="0">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                                    <div className="tp-price__item p-relative">
                                                        <div className="tp-price__icon">
                                                            <img src="assets/img/price/price-icon-1.png" alt="" />
                                                        </div>
                                                        <div className="tp-price__title-box">
                                                            <h4 className="tp-price__title-sm">Personal Plan</h4>
                                                            <p>Customized anything in anytime</p>
                                                        </div>
                                                        <div className="tp-price__feature">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Easy To Track AI Data
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    100+ Ready Boots
                                                                </li>
                                                                <li className="inactive">
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Best Data Plan & Package
                                                                </li>
                                                                <li className="inactive">
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    24/7 Online Support
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tp-price__btn tp-btn-price">
                                                            <span>Price: 99.00</span>
                                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                                    <div className="tp-price__item active p-relative">
                                                        <div className="tp-price__icon">
                                                            <img src="assets/img/price/price-icon-2.png" alt="" />
                                                        </div>
                                                        <div className="tp-price__title-box">
                                                            <h4 className="tp-price__title-sm">Advanced</h4>
                                                            <p>Customized anything in anytime</p>
                                                        </div>
                                                        <div className="tp-price__feature">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Easy To Track AI Data
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    100+ Ready Boots
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span> Best Data Plan & Package
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    24/7 Online Support
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tp-price__btn tp-btn-price">
                                                            <span>Price: 199.00</span>
                                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                                    <div className="tp-price__item p-relative">
                                                        <div className="tp-price__icon">
                                                            <img src="assets/img/price/price-icon-3.png" alt="" />
                                                        </div>
                                                        <div className="tp-price__title-box">
                                                            <h4 className="tp-price__title-sm">For Team</h4>
                                                            <p>Customized anything in anytime</p>
                                                        </div>
                                                        <div className="tp-price__feature">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Easy To Track AI Data
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    100+ Ready Boots
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    Best Data Plan & Package
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path className="price-path-1"
                                                                                d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-2"
                                                                                d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
                                                                                fill="currentcolor" />
                                                                            <path className="price-path-3"
                                                                                d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
                                                                                fill="currentcolor" />
                                                                        </svg>
                                                                    </span>
                                                                    24/7 Online Support
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tp-price__btn tp-btn-price">
                                                            <span>Price: 299.00</span>
                                                            <a href="price.html">Purchase Now <i className="fal fa-arrow-right"></i></a>
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

                    <footer className="pb-50">
                        <div className="tp-footer__pl-pr p-relative">
                            <div className="footer-black-bg tp-gsap-bg"></div>
                            <div className="tp-footer__area pt-50">
                                <div className="container">
                                    <div className="tp-footer__border-bottom">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                                <div className="tp-footer__top-text">
                                                    <span>Get Our Latest's News <br />
                                                        & Updates</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                                <div className="tp-footer__input p-relative">
                                                    <form action="#">
                                                        <input type="text" placeholder="Business email adress" />
                                                        <span>
                                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                                                                    stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path opacity="0.4"
                                                                    d="M13 5.39993L10.496 7.39993C9.672 8.05593 8.32 8.05593 7.496 7.39993L5 5.39993"
                                                                    stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <button>
                                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor"
                                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-footer__top-space">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-7 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay=".5s">
                                                <div className="tp-footer__widget footer-col-1">
                                                    <a href="index.html" className="tp-footer__widget-logo mb-10">
                                                        <img src="assets/img/logo/logo-white.png" alt="" />
                                                    </a>
                                                    <div className="tp-footer__text">
                                                        <p>Our highly skilled development teams <br />
                                                            specialized in data analysis.</p>
                                                    </div>
                                                    <div className="tp-footer__social">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-5 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay=".7s">
                                                <div className="tp-footer__widget footer-col-2">
                                                    <h4 className="tp-footer__widget-title">What We Do</h4>
                                                    <div className="tp-footer__content">
                                                        <ul>
                                                            <li><a href="#">Business</a></li>
                                                            <li><a href="#">Technology</a></li>
                                                            <li><a href="#">Online Marketing</a></li>
                                                            <li><a href="#">Advertising Strategy</a></li>
                                                            <li><a href="#">Strategy</a></li>
                                                            <li><a href="#">Development</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay=".9s">
                                                <div className="tp-footer__widget footer-col-3">
                                                    <h4 className="tp-footer__widget-title">Other Pages</h4>
                                                    <div className="tp-footer__content">
                                                        <ul>
                                                            <li><a href="#">About</a></li>
                                                            <li><a href="#">Services</a></li>
                                                            <li><a href="#">How It Works</a></li>
                                                            <li><a href="#">Pricing Plan</a></li>
                                                            <li><a href="#">Blog</a></li>
                                                            <li><a href="#">Contact</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s"
                                                data-wow-delay="1s">
                                                <div className="tp-footer__widget footer-col-4">
                                                    <h4 className="tp-footer__widget-title">Contact Us</h4>
                                                    <div className="tp-footer__contact-info tp-footer__icon-space">
                                                        <ul>
                                                            <li>
                                                                <span>
                                                                    <svg width="22" height="22" viewBox="0 0 26 26" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M14.332 1C14.332 1 17.2651 1.26664 20.9981 4.99966C24.7311 8.73267 24.9978 11.6658 24.9978 11.6658"
                                                                            stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                                                                        <path
                                                                            d="M14.6079 5.71289C14.6079 5.71289 15.9277 6.08998 17.9075 8.06971C19.8872 10.0494 20.2643 11.3693 20.2643 11.3693"
                                                                            stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                                                                        <path opacity="0.5"
                                                                            d="M9.04943 5.42369L9.91471 6.97413C10.6956 8.37332 10.3821 10.2088 9.15225 11.4387C9.15225 11.4387 9.15225 11.4387 9.15225 11.4387C9.15213 11.4388 7.66057 12.9306 10.3652 15.6352C13.0692 18.3392 14.561 16.849 14.5618 16.8482C14.5618 16.8482 14.5618 16.8482 14.5618 16.8482C15.7917 15.6183 17.6271 15.3049 19.0263 16.0857L20.5768 16.951C22.6896 18.1301 22.9391 21.0931 21.082 22.9502C19.9661 24.0661 18.599 24.9344 17.0878 24.9917C14.5439 25.0882 10.2236 24.4443 5.88985 20.1106C1.55612 15.7769 0.912294 11.4566 1.00873 8.91261C1.06602 7.40143 1.93432 6.03439 3.05023 4.91848C4.90734 3.06137 7.87031 3.31089 9.04943 5.42369Z"
                                                                            stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>
                                                                <a href="tel:+806(000)8899">+806 (000) 88 99</a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 10.2797 1.30049 11.4893 1.83477 12.562C1.97675 12.847 2.02401 13.1729 1.94169 13.4805L1.46521 15.2613C1.25836 16.0344 1.96561 16.7416 2.73868 16.5348L4.51951 16.0583C4.82715 15.976 5.15297 16.0233 5.43802 16.1652C6.51069 16.6995 7.72025 17 9 17Z"
                                                                            stroke="#FF3C82" stroke-width="1.5" />
                                                                        <path opacity="0.5" d="M5.7998 7.80078H12.1998" stroke="#FF3C82"
                                                                            stroke-width="1.5" stroke-linecap="round" />
                                                                        <path opacity="0.5" d="M5.7998 10.6006H10.1998" stroke="#FF3C82"
                                                                            stroke-width="1.5" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>
                                                                <a href="mailto:contact@info.com">contact@info.com</a>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.5"
                                                                            d="M3.7002 6.86317C3.7002 3.62503 6.5208 1 10.0002 1C13.4796 1 16.3002 3.62503 16.3002 6.86317C16.3002 10.0759 14.2895 13.8249 11.1523 15.1656C10.4209 15.4781 9.57947 15.4781 8.84814 15.1656C5.71094 13.8249 3.7002 10.0759 3.7002 6.86317Z"
                                                                            stroke="#FF3C82" stroke-width="1.5" />
                                                                        <path
                                                                            d="M11.8002 7.3C11.8002 8.29411 10.9943 9.1 10.0002 9.1C9.00608 9.1 8.2002 8.29411 8.2002 7.3C8.2002 6.30589 9.00608 5.5 10.0002 5.5C10.9943 5.5 11.8002 6.30589 11.8002 7.3Z"
                                                                            stroke="#FF3C82" stroke-width="1.5" />
                                                                        <path
                                                                            d="M18.0645 13.1504C18.6633 13.6926 19 14.3038 19 14.9504C19 17.1871 14.9706 19.0004 10 19.0004C5.02944 19.0004 1 17.1871 1 14.9504C1 14.3038 1.33671 13.6926 1.93552 13.1504"
                                                                            stroke="#FF3C82" stroke-width="1.5" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>
                                                                <a href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                                                                    target="_blank">1234 North Avenue Luke Lane, South Bend,</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-copyright__area pt-20 pb-20">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                            <div className="tp-copyright__text">
                                                <span>Full Copyright & Design By <a href="#">@Theme pure</a> – 2023</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                            <div
                                                className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-start">
                                                <div className="tp-copyright__lang">
                                                    <ul>
                                                        <li>
                                                            <a id="tp-copyright__lang-toggle" href="javascript:void(0)">
                                                                <span>English (US)<i className="fal fa-angle-down"></i></span>
                                                            </a>
                                                            <ul className="tp-copyright__lang-submenu">
                                                                <li>
                                                                    <a href="#">Arabic</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Spanish</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Mandarin</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
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

export default Search2