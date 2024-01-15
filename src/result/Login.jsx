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

import mainLogo from '../assets/google.png'

const Login = () => {
  return (
    <body>

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
               <img src={mainLogo} alt=""/>
            </a>
         </div>
         <div className="mobile-menu"></div>
         <div className="tpoffcanvas__instagram text-center">
            <div className="tpoffcanvas__instagram-title">
               <h4>instagram</h4>
            </div>
            <a href="#"><img src="assets/img/project/project-inner-4.jpg" alt=""/></a>
            <a href="#"><img src="assets/img/project/project-inner-5.jpg" alt=""/></a>
            <a href="#"><img src="assets/img/project/project-inner-6.jpg" alt=""/></a>
            <a href="#"><img src="assets/img/project/project-inner-7.jpg" alt=""/></a>
         </div>
         <div className="tpoffcanvas__info text-center">
            <h4 className="offcanva-title">we are here</h4>
            <a href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank">
               27 Division St, New York, <br/>
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

   <header>
      <div className="header-signin-area header-bottom__transparent header-signin-ptb z-index-5">
         <div className="container-fluid">
            <div className="row align-items-center">
               <div className="col-6">
                  <div className="header-signin-logo">
                     <a href="index.html"><img src="assets/img/logo/logo-inner.html" alt=""/></a>
                  </div>
               </div>
               <div className="col-6">
                  <div className="header-signin-bar text-end tp-menu-bar">
                     <button>
                        <i>
                           <span></span>
                           <span></span>
                           <span></span>
                        </i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="header-bottom__area header-bottom__transparent header-bottom__bdr z-index-5 d-none">
         <div className="container">
            <div className="row g-0 align-items-center">
               <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                  <div className="header-bottom__logo">
                     <a href="index.html"><img src="assets/img/logo/logo-inner.html" alt=""/></a>
                  </div>
               </div>
               <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                  <div className="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner">
                     <nav id="mobile-menu-2">
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
                                 <li><a href="price.html">Price</a></li>
                                 <li><a href="register.html">Register</a></li>
                                 <li><a href="sign-in.html">Signin</a></li>
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
               <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                  <div className="header-bottom__right d-flex align-items-center justify-content-end">
                     <div className="header-bottom__action header-bottom__action-4">
                        <a className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="register.html">
                           <span>Log In</span>
                        </a>
                     </div>
                     <div className="header-bottom__btn d-flex align-items-center">
                        <a className="tp-btn-yellow d-none d-md-inline-block inner-color" href="#">Get in Touch</a>
                        <a className="header-bottom__bar tp-menu-bar d-lg-none" href="#"><i className="fal fa-bars"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>

   <div id="smooth-wrapper">
      <div id="smooth-content">

         <main>
         <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
            <div className="signin-banner-left-box signin-banner-bg p-relative" data-background="assets/img/login/login-bg-shape.png">
               <div className="signin-banner-bottom-shape">
                  <img src="assets/img/login/login-shape-1.png" alt=""/>
               </div>
               <div className="signin-banner-left-wrap">
                  <div className="signin-banner-title-box mb-100">
                     <h4 className="signin-banner-title tp-char-animation">Welcome To <br/>
                        Your Softec System.</h4>
                  </div>
                  <div className="signin-banner-img-box position-relative">
                     <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
                        <img src="assets/img/login/login-2.png" alt=""/>
                     </div>
                     <div className="signin-banner-img signin-img-2 d-none d-md-block">
                        <img src="assets/img/login/login-1.png" alt=""/>
                     </div>
                     <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
                        <img src="assets/img/login/login-3.png" alt=""/>
                     </div>
                     <div className="signin-banner-img signin-img-4 d-none d-sm-block">
                        <img src="assets/img/login/login-4.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="signin-banner-from d-flex justify-content-center align-items-center">
               <div className="signin-banner-from-wrap">
                  <div className="signin-banner-title-box">
                     <h4 className="signin-banner-from-title">Register Account</h4>
                  </div>
                  <div className="signin-banner-login-browser">
                     <a href="#">
                        <svg className="mr-10" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M21.5642 11.7235C21.5642 10.8961 21.4957 10.2924 21.3474 9.66626H11.707V13.4005H17.3657C17.2517 14.3285 16.6356 15.7261 15.2665 16.6652L15.2473 16.7902L18.2954 19.1044L18.5066 19.125C20.4461 17.3696 21.5642 14.7869 21.5642 11.7235" fill="#4285F4"/>
                           <path d="M11.7039 21.5625C14.4761 21.5625 16.8035 20.668 18.5034 19.1251L15.2633 16.6653C14.3963 17.2579 13.2326 17.6716 11.7039 17.6716C8.98861 17.6716 6.68407 15.9163 5.86257 13.4901L5.74215 13.5001L2.5727 15.9039L2.53125 16.0168C4.21972 19.3039 7.68797 21.5625 11.7039 21.5625Z" fill="#34A853"/>
                           <path d="M5.86404 13.4901C5.64728 12.864 5.52183 12.1931 5.52183 11.5C5.52183 10.8067 5.64728 10.1359 5.85263 9.50984L5.84689 9.37649L2.63771 6.93405L2.53271 6.983C1.83681 8.34704 1.4375 9.87881 1.4375 11.5C1.4375 13.1212 1.83681 14.6528 2.53271 16.0169L5.86404 13.4901" fill="#FBBC05"/>
                           <path d="M11.7039 5.32831C13.632 5.32831 14.9325 6.14448 15.6741 6.82654L18.5719 4.05375C16.7922 2.43257 14.4762 1.4375 11.7039 1.4375C7.688 1.4375 4.21973 3.69595 2.53125 6.98301L5.85118 9.50985C6.6841 7.08367 8.98865 5.32831 11.7039 5.32831" fill="#EB4335"/>
                        </svg>
                        Continue with Google
                     </a>
                     <a href="#">
                        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M19.4955 7.84499C19.3857 7.90906 16.7714 9.26107 16.7714 12.2588C16.8946 15.6775 20.0705 16.8764 20.125 16.8764C20.0705 16.9405 19.6455 18.5097 18.3866 20.1545C17.3875 21.5714 16.2786 23 14.5946 23C12.9928 23 12.4178 22.0557 10.5696 22.0557C8.58479 22.0557 8.02318 23 6.50354 23C4.8196 23 3.62853 21.4949 2.57495 20.0913C1.2062 18.2542 0.0428056 15.3713 0.00173411 12.6032C-0.0259445 11.1364 0.275842 9.69455 1.04192 8.46983C2.12317 6.76006 4.05353 5.59941 6.16157 5.56113C7.77675 5.51038 9.21426 6.59449 10.2 6.59449C11.1446 6.59449 12.9107 5.56113 14.9089 5.56113C15.7714 5.56197 18.0714 5.80408 19.4955 7.84499ZM10.0634 5.26827C9.77587 3.92874 10.5696 2.58921 11.3089 1.73473C12.2536 0.701382 13.7455 0 15.0321 0C15.1143 1.33953 14.5937 2.65327 13.6634 3.61008C12.8286 4.64343 11.391 5.42136 10.0634 5.26827Z" fill="#202124"/>
                        </svg>
                     </a>
                  </div>
                  <div className="signin-banner-from-box">
                     <h5 className="signin-banner-from-subtitle">Or Sign In with email</h5>
                     <form action="#">
                        <div className="row">
                           <div className="col-12">
                              <div className="postbox__comment-input mb-30">
                                 <input type="text" className="inputText" required/>
                                 <span className="floating-label">Full Name</span>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="postbox__comment-input mb-30">
                                 <input type="text" className="inputText" required/>
                                 <span className="floating-label">Your Email</span>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="postbox__comment-input mb-30">
                                 <input id="myInput" className="inputText password" type="password" required/>
                                 <span className="floating-label">Password</span>
                                 <span id="click" className="eye-btn">
                                    <span className="eye-on">
                                       <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path opacity="0.5" d="M2.1474 11.1661C1.38247 10.1723 1 9.67544 1 8.2C1 6.72456 1.38247 6.22767 2.1474 5.2339C3.67477 3.2496 6.2363 1 10 1C13.7637 1 16.3252 3.2496 17.8526 5.2339C18.6175 6.22767 19 6.72456 19 8.2C19 9.67544 18.6175 10.1723 17.8526 11.1661C16.3252 13.1504 13.7637 15.4 10 15.4C6.2363 15.4 3.67477 13.1504 2.1474 11.1661Z" stroke="#1C274C" stroke-width="1.5"/>
                                       <path d="M12.6969 8.2C12.6969 9.69117 11.488 10.9 9.99687 10.9C8.50571 10.9 7.29688 9.69117 7.29688 8.2C7.29688 6.70883 8.50571 5.5 9.99687 5.5C11.488 5.5 12.6969 6.70883 12.6969 8.2Z" stroke="#1C274C" stroke-width="1.5"/>
                                       </svg>
                                    </span>
                                    <span className="eye-off">
                                       <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clip-path="url(#clip0_2547_24206)">
                                          <path d="M18.813 18.9113C17.1036 20.2143 15.0222 20.9362 12.873 20.9713C5.87305 20.9713 1.87305 12.9713 1.87305 12.9713C3.11694 10.6532 4.84218 8.62795 6.93305 7.03134M10.773 5.21134C11.4614 5.05022 12.1661 4.96968 12.873 4.97134C19.873 4.97134 23.873 12.9713 23.873 12.9713C23.266 14.1069 22.5421 15.1761 21.713 16.1613M14.993 15.0913C14.7184 15.3861 14.3872 15.6225 14.0192 15.7865C13.6512 15.9504 13.2539 16.0386 12.8511 16.0457C12.4483 16.0528 12.0482 15.9787 11.6747 15.8278C11.3011 15.6769 10.9618 15.4524 10.6769 15.1675C10.392 14.8826 10.1674 14.5433 10.0166 14.1697C9.86567 13.7962 9.79157 13.3961 9.79868 12.9932C9.80579 12.5904 9.89396 12.1932 10.0579 11.8252C10.2219 11.4572 10.4583 11.126 10.753 10.8513" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M1.87305 1.97131L23.873 23.9713" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                          </g>
                                          <defs>
                                          <clipPath id="clip0_2547_24206">
                                          <rect width="24" height="24" fill="white" transform="translate(0.873047 0.971313)"/>
                                          </clipPath>
                                          </defs>
                                       </svg>
                                    </span>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </form>
                     <div className="signin-banner-form-remember">
                        <div className="row">
                           <div className="col-6">
                              <div className="postbox__comment-agree">
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                       Remember me
                                    </label>
                                 </div>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="postbox__forget text-end">
                                 <a href="#">Forgot password ?</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="signin-banner-from-btn mb-20">
                        <button className="signin-btn ">Register</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </main>
      </div>
   </div>

</body>
  )
}

export default Login