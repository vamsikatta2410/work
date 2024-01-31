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
import loginShape1 from '../assets/img/login/login-shape-1.png'
import loginBg from '../assets/img/login/login-bg-shape.png'

import { Link } from 'react-router-dom'

const Login = () => {

   const handleSubmit = async (e) => {
      e.preventDefault();
    
      const formData = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        remember: e.target.elements.remember.checked,
      };

      console.log(formData);
    
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          alert('Registration successful');
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form');
      }
    };
    
    

   return (
      <>

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
                     <img src={mainLogo} alt="" />
                  </a>
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
                           <Link to='/home'><img src={mainLogo} alt="" style={{ height: '130px', width: '300px' }} /></Link>
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
                           <Link to='/home'><img src={mainLogo} alt="" style={{ height: '120px', width: '180px' }} /></Link>
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
                     <div className="signin-banner-left-box signin-banner-bg p-relative" data-background={loginBg} style={{ backgroundColor: '#86A7FC' }}>
                        <div className="signin-banner-bottom-shape">
                           <img src={loginShape1} alt="" />
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
                                    <path d="M21.5642 11.7235C21.5642 10.8961 21.4957 10.2924 21.3474 9.66626H11.707V13.4005H17.3657C17.2517 14.3285 16.6356 15.7261 15.2665 16.6652L15.2473 16.7902L18.2954 19.1044L18.5066 19.125C20.4461 17.3696 21.5642 14.7869 21.5642 11.7235" fill="#4285F4" />
                                    <path d="M11.7039 21.5625C14.4761 21.5625 16.8035 20.668 18.5034 19.1251L15.2633 16.6653C14.3963 17.2579 13.2326 17.6716 11.7039 17.6716C8.98861 17.6716 6.68407 15.9163 5.86257 13.4901L5.74215 13.5001L2.5727 15.9039L2.53125 16.0168C4.21972 19.3039 7.68797 21.5625 11.7039 21.5625Z" fill="#34A853" />
                                    <path d="M5.86404 13.4901C5.64728 12.864 5.52183 12.1931 5.52183 11.5C5.52183 10.8067 5.64728 10.1359 5.85263 9.50984L5.84689 9.37649L2.63771 6.93405L2.53271 6.983C1.83681 8.34704 1.4375 9.87881 1.4375 11.5C1.4375 13.1212 1.83681 14.6528 2.53271 16.0169L5.86404 13.4901" fill="#FBBC05" />
                                    <path d="M11.7039 5.32831C13.632 5.32831 14.9325 6.14448 15.6741 6.82654L18.5719 4.05375C16.7922 2.43257 14.4762 1.4375 11.7039 1.4375C7.688 1.4375 4.21973 3.69595 2.53125 6.98301L5.85118 9.50985C6.6841 7.08367 8.98865 5.32831 11.7039 5.32831" fill="#EB4335" />
                                 </svg>
                                 Continue with Google
                              </a>
                              <a href="#">
                                 <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.4955 7.84499C19.3857 7.90906 16.7714 9.26107 16.7714 12.2588C16.8946 15.6775 20.0705 16.8764 20.125 16.8764C20.0705 16.9405 19.6455 18.5097 18.3866 20.1545C17.3875 21.5714 16.2786 23 14.5946 23C12.9928 23 12.4178 22.0557 10.5696 22.0557C8.58479 22.0557 8.02318 23 6.50354 23C4.8196 23 3.62853 21.4949 2.57495 20.0913C1.2062 18.2542 0.0428056 15.3713 0.00173411 12.6032C-0.0259445 11.1364 0.275842 9.69455 1.04192 8.46983C2.12317 6.76006 4.05353 5.59941 6.16157 5.56113C7.77675 5.51038 9.21426 6.59449 10.2 6.59449C11.1446 6.59449 12.9107 5.56113 14.9089 5.56113C15.7714 5.56197 18.0714 5.80408 19.4955 7.84499ZM10.0634 5.26827C9.77587 3.92874 10.5696 2.58921 11.3089 1.73473C12.2536 0.701382 13.7455 0 15.0321 0C15.1143 1.33953 14.5937 2.65327 13.6634 3.61008C12.8286 4.64343 11.391 5.42136 10.0634 5.26827Z" fill="#202124" />
                                 </svg>
                              </a>
                           </div>
                           <div className="signin-banner-from-box">
                              <h5 className="signin-banner-from-subtitle">Or Sign In with email</h5>
                              <form onSubmit={handleSubmit}>
                                 <div className="row">
                                    <div className="col-12">
                                       <div className="postbox__comment-input mb-30">
                                          <input type="text" className="inputText" name='name' required />
                                          <span className="floating-label">Full Name</span>
                                       </div>
                                    </div>
                                    <div className="col-12">
                                       <div className="postbox__comment-input mb-30">
                                          <input type="text" className="inputText" name='email' required />
                                          <span className="floating-label">Your Email</span>
                                       </div>
                                    </div>
                                    <div className="col-12">
                                       <div className="postbox__comment-input mb-30">
                                          <input id="myInput" className="inputText password" name='password' type="password" required />
                                          <span className="floating-label">Password</span>
                                          <span id="click" className="eye-btn">
                                             <span className="eye-on">
                                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path opacity="0.5" d="M2.1474 11.1661C1.38247 10.1723 1 9.67544 1 8.2C1 6.72456 1.38247 6.22767 2.1474 5.2339C3.67477 3.2496 6.2363 1 10 1C13.7637 1 16.3252 3.2496 17.8526 5.2339C18.6175 6.22767 19 6.72456 19 8.2C19 9.67544 18.6175 10.1723 17.8526 11.1661C16.3252 13.1504 13.7637 15.4 10 15.4C6.2363 15.4 3.67477 13.1504 2.1474 11.1661Z" stroke="#1C274C" stroke-width="1.5" />
                                                   <path d="M12.6969 8.2C12.6969 9.69117 11.488 10.9 9.99687 10.9C8.50571 10.9 7.29688 9.69117 7.29688 8.2C7.29688 6.70883 8.50571 5.5 9.99687 5.5C11.488 5.5 12.6969 6.70883 12.6969 8.2Z" stroke="#1C274C" stroke-width="1.5" />
                                                </svg>
                                             </span>
                                             <span className="eye-off">
                                                <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <g clip-path="url(#clip0_2547_24206)">
                                                      <path d="M18.813 18.9113C17.1036 20.2143 15.0222 20.9362 12.873 20.9713C5.87305 20.9713 1.87305 12.9713 1.87305 12.9713C3.11694 10.6532 4.84218 8.62795 6.93305 7.03134M10.773 5.21134C11.4614 5.05022 12.1661 4.96968 12.873 4.97134C19.873 4.97134 23.873 12.9713 23.873 12.9713C23.266 14.1069 22.5421 15.1761 21.713 16.1613M14.993 15.0913C14.7184 15.3861 14.3872 15.6225 14.0192 15.7865C13.6512 15.9504 13.2539 16.0386 12.8511 16.0457C12.4483 16.0528 12.0482 15.9787 11.6747 15.8278C11.3011 15.6769 10.9618 15.4524 10.6769 15.1675C10.392 14.8826 10.1674 14.5433 10.0166 14.1697C9.86567 13.7962 9.79157 13.3961 9.79868 12.9932C9.80579 12.5904 9.89396 12.1932 10.0579 11.8252C10.2219 11.4572 10.4583 11.126 10.753 10.8513" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                      <path d="M1.87305 1.97131L23.873 23.9713" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                   </g>
                                                   <defs>
                                                      <clipPath id="clip0_2547_24206">
                                                         <rect width="24" height="24" fill="white" transform="translate(0.873047 0.971313)" />
                                                      </clipPath>
                                                   </defs>
                                                </svg>
                                             </span>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="signin-banner-form-remember">
                                 <div className="row">
                                    <div className="col-6">
                                       <div className="postbox__comment-agree">
                                          <div className="form-check">
                                             <input className="form-check-input" name='remember' type="checkbox" value="" id="flexCheckDefault" />
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
                              </form>
                              
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

export default Login