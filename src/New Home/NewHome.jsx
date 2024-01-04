import React, { useEffect, useState } from 'react'

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

import './Style.css'
// @import url('../cdn.jsdelivr.net/npm/bootstrap-icons%401.7.2/font/bootstrap-icons.css');
import logo from '../assets/logo_home6.png'
import handMegaphone from '../assets/hand_megaphone.png'
import target3d from '../assets/target_3d.png'
import headRating from '../assets/head6_rating.png'
import headerLinechart from '../assets/header5_linechart.png'
import rocket from '../assets/rocket.png'
import superman from '../assets/superman_3d.png'
import bubbles from '../assets/about_s6_bubbles.png'
import img16 from '../assets/16.png'
import img15 from '../assets/15.png'
import img14 from '../assets/14.png'
import img17 from '../assets/17.png'
import img18 from '../assets/18.png'
import img19 from '../assets/19.png'
import img20 from '../assets/20.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img7 from '../assets/7.png'
import manArrow from '../assets/man_arrow.png'
import ch4 from '../assets/ch4.png'
import ch5 from '../assets/ch5.png'
import ch6 from '../assets/ch6.png'
import user6 from '../assets/users_6.png'
import smallBubble from '../assets/bubbls.png'
import logo7 from '../assets/logos/7.png'
import logo8 from '../assets/logos/8.png'
import logo9 from '../assets/logos/9.png'
import logo10 from '../assets/logos/10.png'
import logo11 from '../assets/logos/11.png'
import logo12 from '../assets/logos/12.png'
import logo13 from '../assets/logos/13.png'
import logo14 from '../assets/logos/14.png'
import logo15 from '../assets/logos/15.png'
import logo16 from '../assets/logos/16.png'
import team1 from '../assets/team/1.jpg'
import team3 from '../assets/team/3.jpg'
import team4 from '../assets/team/4.jpg'
import team5 from '../assets/team/5.jpg'
import blog9 from '../assets/blog/9.png'
import blog10 from '../assets/blog/10.png'
import blog11 from '../assets/blog/11.png'
import contact1 from '../assets/contact_a.png'
import contactMsg from '../assets/contact_message.png'
import mainLogo from '../assets/google.png'
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ContactForm from './ContactForm'

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

export default function NewHome() {
  // const { name } = useParams('');
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    // Redirect to the result page with the search query as a slug
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
      <div>
        <header className="style-6">
          <div className="content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="info">
                    <img style={{ height: '10rem' }} src={mainLogo} alt="" />
                    {/* </div> */}
                    <div>
                      <form
                        onSubmit={handleSearch}
                        className="form"
                        method="post"
                      >
                        <div className="form-group">
                          <FaGlobe size={20} />
                          <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="btn rounded-pill butn-blue6 hover-blue2 sm-butn fw-bold"
                          >
                            <span>
                              Search <i className="bi bi-arrow-right ms-1" />
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={handMegaphone} alt="" className="hand-mega slide_up_down" />
          <img src={target3d} alt="" className="target-3d rotate-center" />
          <img src={rocket} alt="" className="head6-rocket" />
        </header>
        <main>
          <section className="services section-padding style-6">
            <div className="container">
              <div className="section-head mb-40 text-center style-6">
                <h2 className="mb-20">
                  Discover our top
                  <span>
                    {' '}
                    <small>services</small>{' '}
                  </span>
                </h2>
                <p>
                  Our strategy includes consistently evolving, to ensure we’re
                  producing exceptional SEO for business.
                </p>
              </div>
            </div>
            <div className="content">
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
          </section>
          {/* ====== end services ====== */}
          {/* ====== start projects ====== */}
          {/* <section className="projects style-6">
            <div className="content section-padding">
              <div className="container">
                <div className="section-head mb-40 d-flex justify-content-between align-items-center style-6">
                  <h2 className="mb-20">
                    Features
                    <span> <small>Projects</small> </span>
                  </h2>
                  <a href="page-portfolio-5.html" className="small text-decoration-underline text-uppercase">See All Projects</a>
                </div>
                <div className="slider-3items slider-style-6">
                  <div className="swiper-container pb-70">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="project-card style-6">
                          <div className="img">
                            <img src={img4} alt="" />
                          </div>
                          <div className="info">
                            <h3 className="title">
                              <a href="page-single-project-5.html">Okpay E-Wallet Optimized</a>
                            </h3>
                            <small className="color-blue6">
                              <a href="#">SEO analysis</a>
                            </small>
                            <div className="text">
                              Trust our top minds to eliminate workflow pain points, implement new
                              tech &amp; app.
                            </div>
                            <div className="tags">
                              <span>
                                <a href="#">SEO Analysis</a>
                              </span>
                              <span>
                                <a href="#">Content Strategy</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-card style-6">
                          <div className="img">
                            <img src={img5} alt="" />
                          </div>
                          <div className="info">
                            <h3 className="title">
                              <a href="page-single-project-5.html">e-Commerce Dashboard</a>
                            </h3>
                            <small className="color-blue6"> <a href="#">website design</a> &amp; <a href="#">develoment</a> </small>
                            <div className="text">
                              Trust our top minds to eliminate workflow pain points, implement new
                              tech &amp; app.
                            </div>
                            <div className="tags">
                              <span><a href="#">WordPress</a></span>
                              <span><a href="#">PHP</a></span>
                              <span><a href="#">HTML/CSS</a></span>
                              <span><a href="#">Figma</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-card style-6">
                          <div className="img">
                            <img src={img7} alt="" />
                          </div>
                          <div className="info">
                            <h3 className="title"><a href="page-single-project-5.html">MLB Store Instagram</a></h3>
                            <small className="color-blue6"><a href="#">social media</a></small>
                            <div className="text">
                              Trust our top minds to eliminate workflow pain points, implement new
                              tech &amp; app.
                            </div>
                            <div className="tags">
                              <span><a href="#">Social</a></span>
                              <span><a href="#">Instagram</a></span>
                              <span><a href="#">Followers</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-card style-6">
                          <div className="img">
                            <img src={img5} alt="" />
                          </div>
                          <div className="info">
                            <h3 className="title"><a href="page-single-project-5.html">e-Commerce Dashboard</a></h3>
                            <small className="color-blue6"><a href="#">website design</a> &amp; <a href="#">develoment</a></small>
                            <div className="text">
                              Trust our top minds to eliminate workflow pain points, implement new
                              tech &amp; app.
                            </div>
                            <div className="tags">
                              <span><a href="#">WordPress</a></span>
                              <span><a href="#">PHP</a></span>
                              <span><a href="#">HTML/CSS</a></span>
                              <span><a href="#">Figma</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="swiper-pagination" />
                 
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
              </div>
            </div>
          </section> */}
          {/* ====== end projects ====== */}
          {/* ====== start choose us ====== */}
          <section className="choose-us section-padding style-6">
            <div className=" content container">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <div className="img">
                    <img src={manArrow} alt="" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="info">
                    <div className="section-head mb-20 style-6">
                      <h2>
                        {' '}
                        Why choose
                        <span>
                          {' '}
                          <small> Bsearch </small>{' '}
                        </span>
                      </h2>
                    </div>
                    <div className="text mb-50">
                      We are passionate about our work. Our designers stay ahead
                      of the curve to provide engaging and user-friendly website
                      designs to make your business stand out
                    </div>
                    <ul>
                      <li className="d-flex mb-40">
                        <small className="icon-60 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-4 flex-shrink-0">
                          <img src={ch4} alt="" />
                        </small>
                        <div className="inf">
                          <h5>Affordable Price</h5>
                          <p className="fs-12px color-666 mt-2">
                            Nanotechnology immersion along the information high
                            will close the loop on focusing solely
                          </p>
                        </div>
                      </li>
                      <li className="d-flex mb-40">
                        <small className="icon-60 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-4 flex-shrink-0">
                          <img src={ch5} alt="" />
                        </small>
                        <div className="inf">
                          <h5>Top-notch Experts Consulting</h5>
                          <p className="fs-12px color-666 mt-2">
                            Our top-notch Experts with much years of experience
                            certail will give best solutions for your business
                          </p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <small className="icon-60 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-4 flex-shrink-0">
                          <img src={ch6} alt="" />
                        </small>
                        <div className="inf">
                          <h5>Dedicated Support 24/7</h5>
                          <p className="fs-12px color-666 mt-2">
                            Customer support is always our number one priority.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <img src={bubbles} alt="" className="bubbles rotate-center" />
          </section>
          {/* ====== end choose us ====== */}
          {/* ====== start testimonials ====== */}
          <div className="testimonials style-6">
            <div className="container">
              <div className="row gx-0 align-items-center justify-content-between">
                <div className="col-lg-5">
                  <div className="testi-slider style-6 slider-style-6">
                    <div className="icon mb-50">
                      <FaQuoteRight />
                    </div>
                    <div className="swiper-container">
                      <Carousel
                        responsive={responsive1}
                        showDots={false}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        infinite={true}
                        arrows={false}
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testi-card">
                              <div className="text">
                                I don’t know what else to say, this is something
                                that you haven’t seen before. Unique design,
                                lightweight, and outstanding support. Bsearch
                                always a pleasure to work!
                              </div>
                              <div className="author mt-30">
                                <span className="color-000 fw-bold text-capitalize">
                                  Conor Martinelli
                                </span>
                                <p className="fs-10px">
                                  {' '}
                                  Director at{' '}
                                  <a
                                    href="#"
                                    className="text-decoration-underline color-blue6"
                                  >
                                    {' '}
                                    Ecoland Resort &amp; Hotel{' '}
                                  </a>{' '}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                    {/* <div className="swiper-button-next" />
                    <div className="swiper-button-prev" /> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img">
                    <img src={user6} alt="" />
                    <img
                      src={smallBubble}
                      alt=""
                      className="bubbls rotate-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ====== end testimonials ====== */}
          {/* ====== start clients ====== */}
          <section className="clients style-5">
            <div className="container">
              <div className="section-head mb-70 style-6 text-center">
                <h2 className="mb-20">
                  {' '}
                  Trusted by thoudsands
                  <span>
                    {' '}
                    <small> Businesss </small>{' '}
                  </span>
                </h2>
                <p className="color-666">
                  More 15,000 Companies &amp; partners trusted &amp; choice
                  Bsearch
                </p>
              </div>
              <div className="content d-flex flex-wrap">
                <a href="#" className="img img-card">
                  <img src={logo7} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo8} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo9} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo10} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo11} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo12} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo13} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo14} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo15} alt="" />
                </a>
                <a href="#" className="img img-card">
                  <img src={logo16} alt="" />
                </a>
              </div>
            </div>
          </section>
          {/* ====== end clients ====== */}
          {/* ====== start numbers ====== */}
          <section className="numbers section-padding style-6">
            <div className="container">
              <div className="content">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="number-card style-6">
                      <h2 className="me-4">
                        <span className="counter">12</span> +
                      </h2>
                      <div className="text">
                        Years <br /> of Experience
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="number-card style-6">
                      <h2 className="me-4">
                        <span className="counter">1565</span>
                      </h2>
                      <div className="text">
                        Projects <br /> completed
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="number-card style-6 border-0">
                      <h2 className="me-4">
                        <span className="counter">265</span>
                      </h2>
                      <div className="text">
                        Satisfied clients on <br /> 24 countries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ====== end numbers ====== */}
          {/* ====== start team ====== */}
          <section className="team section-padding style-6">
            <div className="content">
              <div className="container">
                <div className="row items align-items-end mb-50">
                  <div className="col-lg-7">
                    <div className="section-head mb-0 style-6">
                      <h2 className="mb-0">
                        {' '}
                        Our
                        <span>
                          {' '}
                          <small> Leaders </small>{' '}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-5 text-end">
                    <a
                      className="text-decoration-underline text-uppercase mb-4"
                      href="#"
                    >
                      See All our team
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-card mb-30 mb-lg-0 style-6">
                      <div className="img img-cover">
                        <img src={team1} alt="" />
                        <div className="social-icons">
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaFacebookF />
                          </a>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                          <a href="#">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                      <div className="info">
                        <a className="d-block" href="#">
                          <h6>Michael Edwards</h6>
                        </a>
                        <small>CEO Founder</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-card mb-30 mb-lg-0 style-6">
                      <div className="img img-cover">
                        <img src={team5} alt="" />
                        <div className="social-icons">
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaFacebookF />
                          </a>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                          <a href="#">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                      <div className="info">
                        <a className="d-block" href="#">
                          <h6>Bobby Kane</h6>
                        </a>
                        <small>CTO</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-card mb-30 mb-lg-0 style-6">
                      <div className="img img-cover">
                        <img src={team3} alt="" />
                        <div className="social-icons">
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaFacebookF />
                          </a>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                          <a href="#">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                      <div className="info">
                        <a className="d-block" href="#">
                          <h6>Robert Downey Jr</h6>
                        </a>
                        <small>Project Manager</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-card style-6">
                      <div className="img img-cover">
                        <img src={team4} alt="" />
                        <div className="social-icons">
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaFacebookF />
                          </a>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                          <a href="#">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                      <div className="info">
                        <a className="d-block" href="#">
                          <h6>Andrew Robertson</h6>
                        </a>
                        <small>Marketing Leader</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ====== end team ====== */}
          {/* ====== start blog ====== */}
          <section className="blog section-padding style-6">
            <div className="container">
              <div className="section-head mb-70 style-6 text-center">
                <h2 className="mb-20">
                  {' '}
                  Latest from our
                  <span>
                    {' '}
                    <small> magazine </small>{' '}
                  </span>
                </h2>
                <p className="color-666">
                  Get the latest articles from our press, discuss &amp; share
                </p>
              </div>
              <div className="content">
                <div className="blog-card style-6">
                  <a
                    href="page-single-post-5.html"
                    className="img img-cover d-block"
                  >
                    <img src={blog9} alt="" />
                  </a>
                  <div className="info">
                    <div className="date">
                      <a
                        href="#"
                        className="small color-blue6 fs-12px pe-3 border-end brd-gray text-uppercase fw-bold me-3"
                      >
                        {' '}
                        news{' '}
                      </a>
                      <small className="op-6 fs-12px">
                        {' '}
                        <i className="far fa-clock" /> Posted on{' '}
                      </small>
                      <a href="#" className="fs-12px">
                        3 Days ago
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <a href="page-single-post-5.html">
                        Workflow Strategy for E-shop
                      </a>
                    </h4>
                    <div className="text">
                      If there’s one way that wireless technology has changed
                      the way we work, it’s that will everyone is now connected
                      [...]
                    </div>
                    <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                      <div className="l_side d-flex align-items-center">
                        <span className="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2  text-white">
                          a
                        </span>
                        <a href="#">
                          <small className="text-muted">By</small> David
                        </a>
                      </div>
                      <div className="r-side mt-1">
                        <i className="bi bi-chat-left-text me-1" />
                        <a href="#">24</a>
                        <i className="bi bi-eye ms-4 me-1" />
                        <a href="#">774k</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-card card-center style-6">
                  <a
                    href="page-single-post-5.html"
                    className="img img-cover d-block"
                  >
                    <img src={blog10} alt="" />
                  </a>
                  <div className="info">
                    <div className="date">
                      <a
                        href="#"
                        className="small color-blue6 fs-12px pe-3 border-end brd-gray text-uppercase fw-bold me-3"
                      >
                        {' '}
                        news{' '}
                      </a>
                      <small className="op-6 fs-12px">
                        {' '}
                        <i className="far fa-clock" /> Posted on{' '}
                      </small>
                      <a href="#" className="fs-12px">
                        12 Days ago
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <a href="page-single-post-5.html">
                        6 Tips To Help You Build Your Social Media Effeciency
                      </a>
                    </h4>
                    <div className="text">
                      If there’s one way that wireless technology has changed
                      the way we work, it’s that will everyone is now connected
                      [...]
                    </div>
                    <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                      <div className="l_side d-flex align-items-center">
                        <span className="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2  text-white">
                          a
                        </span>
                        <a href="#">
                          <small className="text-muted">By</small> David
                        </a>
                      </div>
                      <div className="r-side mt-1">
                        <i className="bi bi-chat-left-text me-1" />
                        <a href="#">24</a>
                        <i className="bi bi-eye ms-4 me-1" />
                        <a href="#">774k</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-card style-6">
                  <a
                    href="page-single-post-5.html"
                    className="img img-cover d-block"
                  >
                    <img src={blog11} alt="" />
                  </a>
                  <div className="info">
                    <div className="date">
                      <a
                        href="#"
                        className="small color-blue6 fs-12px pe-3 border-end brd-gray text-uppercase fw-bold me-3"
                      >
                        {' '}
                        news{' '}
                      </a>
                      <small className="op-6 fs-12px">
                        {' '}
                        <i className="far fa-clock" /> Posted on{' '}
                      </small>
                      <a href="#" className="fs-12px">
                        12 Days ago
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <a href="page-single-post-5.html">
                        The Trend of Marketing With Tiktok, Should or not?
                      </a>
                    </h4>
                    <div className="text">
                      If there’s one way that wireless technology has changed
                      the way we work, it’s that will everyone is now connected
                      [...]
                    </div>
                    <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
                      <div className="l_side d-flex align-items-center">
                        <span className="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2  text-white">
                          a
                        </span>
                        <a href="#">
                          <small className="text-muted">By</small> David
                        </a>
                      </div>
                      <div className="r-side mt-1">
                        <i className="bi bi-chat-left-text me-1" />
                        <a href="#">24</a>
                        <i className="bi bi-eye ms-4 me-1" />
                        <a href="#">774k</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ====== end blog ====== */}
          {/* ====== start contact ====== */}
          <section className="contact section-padding style-6">
            <div className="container">
              <div className="section-head mb-60 style-6 text-center">
                <h2 className="mb-20">
                  {' '}
                  Submit your
                  <span>
                    {' '}
                    <small> website </small>{' '}
                  </span>
                </h2>
                <p className="color-666">
                  We will contact again after receive your request in 24h
                </p>
              </div>
              <div className="content">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <ContactForm />
                    {/* <form action="https://script.google.com/macros/s/AKfycbyP84To_S3DA0AnYz8TPBLkiuessY-rwqrM7LodWwUrAYaXqIvYWYv4NbYo-6hQcjlNiA/exec" className="form" method="post">
                      <p className="text-center text-danger fs-12px mb-30">The field is required mark as *</p>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group mb-20">
                            <input type="text" name="Name" className="form-control" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-20">
                            <input type="text" name="Email" className="form-control" placeholder="Email Address *" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-20">
                            <input type="text" name="Phone" className="form-control" placeholder="Phone Number (option)" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-20">
                            <input type="text" name="Website" className="form-control" placeholder="Your Website (option)" />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea name="Message" rows={10} className="form-control" placeholder="How can we help you?" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-lg-12 text-center">
                          <div className="form-check d-inline-flex mt-30 mb-30">
                            <input className="form-check-input me-2 mt-0" type="checkbox" defaultValue="flexCheckDefault" />
                            <label className="form-check-label small" htmlFor="flexCheckDefault">
                              By submitting, i’m agreed to the <a href="#" className="text-decoration-underline">Terms &amp; Conditons</a>
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-12 text-center">
                          <input onSubmit={handleSubmit()} type="submit" defaultValue="Send Your Request" className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light" />
                        </div>
                      </div>
                    </form> */}
                  </div>
                </div>
                <img src={contact1} alt="" className="contact_a" />
                <img src={contactMsg} alt="" className="contact_message" />
              </div>
            </div>
          </section>
          {/* ====== end contact ====== */}
        </main>
        {/*End-Contents*/}

        <section className="chat-banner style-7">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-3 col-sm-6 d-none d-lg-block">
                <div className="img img1">
                  <img src={vector1} alt="" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="info">
                  <p> Hire Us For Your Project </p>
                  <h3> Lets Work Together </h3>
                  <div className="btns mt-50">
                    <a
                      href="#0"
                      className="btn btn-icon-circle rounded-pill bg-black fw-bold text-white me-4 mb-3 mb-lg-0"
                    >
                      <small>
                        {' '}
                        Estimate Project <FaArrowRight />{' '}
                      </small>
                    </a>
                    <a
                      href="#0"
                      className="btn btn-icon-circle rounded-pill fw-bold brd-light text-white hover-blue7"
                    >
                      <small>
                        {' '}
                        Contact Us <FaArrowRight />{' '}
                      </small>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img img2">
                  <img src={vector2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== start footer ====== */}
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
        {/* ====== end footer ====== */}
        {/* ====== start to top button ====== */}
        <a
          href="#"
          className="to_top bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"
        >
          <i className="bi bi-chevron-up fs-6 text-dark" />
        </a>
        {/* ====== end to top button ====== */}
        {/* ====== request ====== */}
        {/*  */}
        {/* Mirrored from iteck-html.themescamp.com/home-marketing-startup.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Mar 2023 18:19:31 GMT */}
      </div>
      );
    </>
  )
}
