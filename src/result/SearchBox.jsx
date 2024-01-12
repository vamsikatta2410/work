import React,{useState,useEffect} from 'react';
import {
    FaFacebookF,
    FaGlobe,
    FaInstagram,
    FaQuoteRight,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaArrowRight,
} from 'react-icons/fa'

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
import mainLogo from '../assets/google.png'

import {Link,useParams,useNavigate} from 'react-router-dom'
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
        <>
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
                                            <img src="assets/img/logo/logo-white.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="search__close">
                                        <button type="button" className="search__close-btn search-close-btn">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="search__form">
                                    <form action="#">
                                        <div className="search__input">
                                            <input className="search-input-field" type="text" placeholder="Type here to search..." />
                                            <span className="search-focus-border"></span>
                                            <button type="submit">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                                {/* <div className="header-top__link">
                                    <span></span>
                                    <a href="#">
                                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.40918 9L5.591 5L1.40918 1" stroke="white" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div> */}
                            </div>
                            <div className="col-6">
                                <div className="header-top__support text-end">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky" className="header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="header-bottom__logo">
                                    <a href="index.html"><img src="assets/img/logo/logo-black.png" alt="" /></a>
                                </div>
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
                                        <a className="d-none d-lg-inline-block last-child" href="register.html">
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15" stroke="currentColor"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>Log In</span>
                                        </a>
                                    </div>
                                    <div className="header-bottom__btn d-flex align-items-center">
                                        <a className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block" href="service-details.html">
                                            <span className="white-text">Get Started</span>
                                            <b></b>
                                        </a>
                                        <a className="header-bottom__bar d-lg-none tp-menu-bar" href="javascript:void(0)"><i className="fal fa-bars"></i></a>
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
                            <img src="assets/img/logo/logo-white.png" alt="" />
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
                                    <img src="assets/img/hero/hero-frame.png" alt="" />
                                </div>
                                <div className="tp-hero-shape">
                                    <img className="tp-hero-shape-1" src="assets/img/hero/hero-line-shape.png" alt="" />
                                    <img className="tp-hero-shape-2" src="assets/img/hero/hero-line-shape-2.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-10">
                                            <div className="tp-hero__content-box text-center z-index-3">
                                                <div className="tp-hero__title-box p-relative">
                                                    <h2 className="tp-hero__hero-title tp-title-anim">
                                                        <img src={mainLogo}/>
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
                                                <div className="tp-hero__input p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                                    <form onSubmit={handleSearch} method='post'>
                                                        <div className="p-relative">
                                                            <input type="text" placeholder="Search" name='search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
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
                                                        </div>
                                                        <button type='submit' className="tp-btn tp-btn-hover alt-color-black">
                                                            <span>Search</span>
                                                            <b></b>
                                                        </button>
                                                    </form>
                                                </div>
                                                <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">We are not going to save your data</p>
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
                                                    <img src="assets/img/hero/hero-shape-1.png" alt="" />
                                                </div>
                                                <div className="tp-hero__shape-img-2 d-none d-xl-block">
                                                    <img src="assets/img/hero/hero-shape-2.png" alt="" />
                                                </div>
                                                <div>
                                                    <div className="tp-hero__thumb-wrapper d-none d-md-block p-relative">
                                                        <div className="row">
                                                            <div className="col-8">
                                                                <div className="tp-hero__thumb-box">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="tp-hero__thumb mb-20">
                                                                                <img className="w-100" src="assets/img/hero/hero-sm-1.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            <div className="tp-hero__thumb tp-hero__sm-img">
                                                                                <img className="w-100" src="assets/img/hero/hero-sm-3.png" alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <div className="tp-hero__thumb">
                                                                                <img className="w-100" src="assets/img/hero/hero-sm-4.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="tp-hero__thumb-box">
                                                                    <div className="tp-hero__thumb">
                                                                        <img className="w-100" src="assets/img/hero/hero-sm-2.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
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
                </div>
            </div>
        </>

    )
}

export default SearchBox