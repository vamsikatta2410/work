import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/google.png'
import globe from '../assets/globe.png'
import cloudhosting from '../assets/cloud-hosting.png'
import vpshosting from '../assets/vps-hosting.png'
import wphosting from '../assets/wp-hosting.png'
import './post-359.css'
import './post-11.css'
import './elementor-widgets.css'
import './post-3.css'
import './swiper.min.css'

const Search3 = () => {

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
            <div>
              <div className="layout-width layout-wide">
                <div id="Top_bar" className="alternate-sticky-header">
                  <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-1078ace {\n\t\t\t\t\tpadding: 27px 0px 27px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-bc-flex-widget .elementor-13 .elementor-element.elementor-element-1f1eb2a.elementor-column .elementor-widget-wrap {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\talign-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a>.elementor-element-populated {\n\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-5c51450 .wdes-logo_link {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-5c51450 .wdes-logo_img {\n\t\t\t\t\theight: 36px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-bc-flex-widget .elementor-13 .elementor-element.elementor-element-29a7238.elementor-column .elementor-widget-wrap {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\talign-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238>.elementor-element-populated {\n\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-horizontal {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical .menu-item-link-top {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical-sub-bottom .menu-item-link-sub {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top {\n\t\t\t\t\tcolor: #5D709D;\n\t\t\t\t\tpadding: 10px 0px 10px 0px !important;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top .wdes-nav-link-text {\n\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\tline-height: 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item:hover>.menu-item-link-top {\n\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item.current-menu-item .menu-item-link-top {\n\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav>.wdes-nav-item {\n\t\t\t\t\tmargin: 0px 40px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top .wdes-nav-arrow {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tmargin-left: 9px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top .wdes-nav-arrow svg {\n\t\t\t\t\twidth: 12px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical-sub-left-side .menu-item-link-top .wdes-nav-arrow {\n\t\t\t\t\tmargin-right: 9px;\n\t\t\t\t\tmargin-left: 0;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-sub {\n\t\t\t\t\twidth: 234px !important;\n\t\t\t\t\tbackground-color: #FFFFFF;\n\t\t\t\t\tborder-style: solid;\n\t\t\t\t\tborder-width: 2px 2px 2px 2px;\n\t\t\t\t\tborder-color: #CAD4EB;\n\t\t\t\t\tborder-radius: 16px 16px 16px 16px;\n\t\t\t\t\tpadding: 27px 32px 27px 32px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-sub>.menu-item:first-child>.menu-item-link {\n\t\t\t\t\tborder-radius: 16px 16px 0 0;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-sub>.menu-item:last-child>.menu-item-link {\n\t\t\t\t\tborder-radius: 0 0 16px 16px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-sub .wdes-nav-link-text {\n\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-sub {\n\t\t\t\t\tcolor: #5D709D;\n\t\t\t\t\tpadding: 5px 0px 11px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item:hover>.menu-item-link-sub {\n\t\t\t\t\tcolor: #7868E5;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-mobile-trigger {\n\t\t\t\t\tbackground-color: #F2F2FF;\n\t\t\t\t\tcolor: #5D709D;\n\t\t\t\t\tborder-radius: 16px 16px 16px 16px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-mobile-close-btn {\n\t\t\t\t\tcolor: #B7B4FF;\n\t\t\t\t\tfont-size: 17px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 {\n\t\t\t\t\twidth: auto;\n\t\t\t\t\tmax-width: auto;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button {\n\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tbackground-color: #1B2E5A;\n\t\t\t\t\tborder-radius: 20px 20px 20px 20px;\n\t\t\t\t\tpadding: 13px 26px 13px 26px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button:hover,\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button:focus {\n\t\t\t\t\tbackground-color: #B49BFC;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 {\n\t\t\t\t\twidth: auto;\n\t\t\t\t\tmax-width: auto;\n\t\t\t\t}\n\n\t\t\t\t@media(max-width:1024px) {\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-1078ace {\n\t\t\t\t\t\tpadding: 27px 15px 27px 15px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav>.wdes-nav-item {\n\t\t\t\t\t\tmargin: 0px 20px 0px 0px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button {\n\t\t\t\t\t\tpadding: 13px 15px 13px 15px;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a {\n\t\t\t\t\t\twidth: 50%;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238 {\n\t\t\t\t\t\twidth: 50%;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-mobile-menu .menu-item-link {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-horizontal {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical .menu-item-link-top {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical-sub-bottom .menu-item-link-sub {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-mobile-menu .wdes-nav-vertical-sub-left-side .menu-item-link-top .wdes-nav-arrow {\n\t\t\t\t\t\tmargin-left: 9px;\n\t\t\t\t\t\tmargin-right: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav {\n\t\t\t\t\t\twidth: 80%;\n\t\t\t\t\t\tpadding: 30px 20px 30px 20px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-mobile-menu-active .wdes-nav {\n\t\t\t\t\t\tbox-shadow: 0px 0px 14px 0px #E7E7E7;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936>.elementor-widget-container {\n\t\t\t\t\t\tmargin: 0px 0px 0px 10px;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media(min-width:768px) {\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a {\n\t\t\t\t\t\twidth: 20%;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238 {\n\t\t\t\t\t\twidth: 79.666%;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t" }} />
                  <div data-elementor-type="wdes_header" data-elementor-id={13} className="elementor elementor-13">
                    <section className="elementor-section elementor-top-section elementor-element elementor-element-1078ace elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1078ace" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1f1eb2a" data-id="1f1eb2a" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-5c51450 elementor-widget elementor-widget-wdes-logo" data-id="5c51450" data-element_type="widget" data-widget_type="wdes-logo.default">
                            </div>
                          </div>
                        </div>
                        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-29a7238" data-id="29a7238" data-element_type="column">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-e088c70 wdes-nav-align-flex-end elementor-widget__width-auto wdes-nav-mobile-align-flex-start elementor-widget elementor-widget-wdes-nav-menu" data-id="e088c70" data-element_type="widget" data-widget_type="wdes-nav-menu.default">
                              <div className="elementor-widget-container">
                                <div className="wdes-nav-wrap wdes-mobile-menu wdes-mobile-menu-left-side" data-mobile-layout="left-side">
                                  <div className="wdes-nav-mobile-trigger wdes-nav-mobile-trigger-align-left">
                                    <span className="wdes-nav-mobile-trigger-open wdes-blocks-icon"><i className="fa-solid fas fa-bars" aria-hidden="true" /></span><span className="wdes-nav-mobile-trigger-close wdes-blocks-icon"><i className="fa-solid fas fa-times" aria-hidden="true" /></span>
                                  </div>
                                  <div className="menu-main-container">
                                    <div className="wdes-nav wdes-nav-horizontal">
                                      <div className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children wdes-nav-item-20 wdes-nav-item wdes-dropdown">
                                        <a href="#" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Hosting</span>
                                          <div className="wdes-nav-arrow"><span className="wdes-menu-icon wdes-menu-align-right fas fa-chevron-down" />
                                          </div>
                                        </a>
                                        <div className="wdes-nav-sub dropdown-content  wdes-global-style wdes-nav-depth-0">
                                          <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-398 wdes-nav-item wdes-nav-item-sub">
                                            <a href="shared-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">Shared
                                                Hosting</span></a></div>
                                          <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-419 wdes-nav-item wdes-nav-item-sub">
                                            <a href="wordpress-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">WordPress
                                                Hosting</span></a></div>
                                          <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-425 wdes-nav-item wdes-nav-item-sub">
                                            <a href="vps-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">VPS
                                                Hosting</span></a></div>
                                          <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-431 wdes-nav-item wdes-nav-item-sub">
                                            <a href="dedicated-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">Dedicated
                                                Hosting</span></a></div>
                                        </div>
                                      </div>
                                      <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-438 wdes-nav-item">
                                        <a href="/" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Domain</span></a></div>
                                      <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-469 wdes-nav-item">
                                        <a href="/company" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Company</span></a></div>
                                      <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-498 wdes-nav-item">
                                        <a href="/blog" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Blog</span></a></div>
                                      <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-485 wdes-nav-item">
                                        <a href="/contact" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Contact</span></a></div>
                                      <div className="wdes-nav-mobile-close-btn wdes-blocks-icon"><i className="fa-solid fas fa-times" aria-hidden="true" /></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-75d4936 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="75d4936" data-element_type="widget" data-widget_type="button.default">
                              <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                  <a className="elementor-button elementor-button-link elementor-size-sm" href="/login">
                                    <span className="elementor-button-content-wrapper">
                                      <span className="elementor-button-text">Login</span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div data-elementor-type="wp-page" data-elementor-id={11} className="elementor elementor-11">
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-90798ca elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="90798ca" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-491772c elementor-hidden-mobile" data-id="491772c" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-d446880 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="d446880" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.18.0 - 20-12-2023 */\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-image {\n\t\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-image a {\n\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-image a img[src$=\".svg\"] {\n\t\t\t\t\t\t\t\t\t\t\twidth: 48px\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-image img {\n\t\t\t\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t" }} /> <img fetchpriority="high" decoding="async" width={556} height={714} src="wp-content/uploads/sites/21/2023/04/hero-thumb-left.png" className="attachment-full size-full wp-image-535" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/hero-thumb-left.png 556w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/hero-thumb-left-234x300.png 234w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/hero-thumb-left-416x534.png 416w" sizes="(max-width: 556px) 100vw, 556px" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9856051" data-id={9856051} data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-b067981 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b067981" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3afa8f2" data-id="3afa8f2" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-fcf7b14 elementor-widget elementor-widget-wdes-section-header-widget" data-id="fcf7b14" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                    <div className="elementor-widget-container">
                                      <section className="widget-content wdes-widget-section-header">
                                        <div className="wdes-widget-inner wdes-text-align-center ">
                                          <img src={logo} style={{width:'80%'}}/>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-18836a3 elementor-widget__width-initial elementor-widget elementor-widget-wdes-forms-widget" data-id="18836a3" data-element_type="widget" data-widget_type="wdes-forms-widget.default">
                                    <div className="elementor-widget-container">
                                      <div className="domain-element-wdes">
                                        <div id="wdes-domain-search">
                                            
                                          <form onSubmit={handleSearch} method='post' className="domain-search-area-main">
                                            <div className="domain-form-wrapper">
                                              <div className="wdes-domain-input-wrapper">
                                                <div className="domain-input-search-label"><i className="fas fa-search" /></div> <input type="hidden" name="token" defaultValue="0811bf819565bf8142cc613d099e85a27ec1204c" />
                                                <input id="wdes-domain" className="sea-dom" name='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search anything ...'/>
                                                <input type="hidden" id="wdes_lup" name="wdes_lup" defaultValue="lup-1" />
                                              </div>
                                              <button id="wdes-search" className="reg-dom" type="submit">Search</button>
                                            </div>
                                            <div id="preloader-resource" data-priority-tlds="[{&quot;tld&quot;:&quot;domain-com&quot;,&quot;price&quot;:&quot;$5&quot;},{&quot;tld&quot;:&quot;domain-net&quot;,&quot;price&quot;:&quot;$5&quot;},{&quot;tld&quot;:&quot;domain-org&quot;,&quot;price&quot;:&quot;$5&quot;},{&quot;tld&quot;:&quot;domain-me&quot;,&quot;price&quot;:&quot;$5&quot;},{&quot;tld&quot;:&quot;domain-info&quot;,&quot;price&quot;:&quot;$5&quot;}]" data-priority-local-tlds="[]" />
                                            {/* Result section*/}
                                            <div id="wdes-domain-results" className="domain-results-box">
                                              {/* Modal */}
                                              <div id="wdesDomainWhois" className="modal micromodal-slide" aria-hidden="true">
                                                <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
                                                  <div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="wdesDomainWhois-title">
                                                    <header className="modal__header">
                                                      <h2 className="modal__title" id="wdesDomainWhoisLabel">Domain
                                                        Whois Lookup</h2>
                                                      <button className="modal__close" data-micromodal-close aria-label="Close this dialog window" />
                                                    </header>
                                                    <main className="modal__content" id="wdesDomainWhois-content" />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div id="more-11" />
                                            <div id="wdes-dc-more-options" className="d-none">
                                              <h2> More Options </h2>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f9fd115 elementor-hidden-mobile" data-id="f9fd115" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-c10fede elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="c10fede" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img decoding="async" width={897} height={947} src="wp-content/uploads/sites/21/2023/04/hero-thumb-right.png" className="attachment-full size-full wp-image-531" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/hero-thumb-right.png 897w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/hero-thumb-right-284x300.png 284w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/hero-thumb-right-768x811.png 768w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/hero-thumb-right-416x439.png 416w" sizes="(max-width: 897px) 100vw, 897px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-a114189 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a114189" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0ace247" data-id="0ace247" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-a8d92c3 elementor-widget elementor-widget-wdes-section-header-widget" data-id="a8d92c3" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner wdes-text-align-center ">
                                  <h1 className="wdes-section-header-primary">Get started with hosting</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-93492f7 elementor-widget elementor-widget-wdes_tabs" data-id="93492f7" data-element_type="widget" data-widget_type="wdes_tabs.default">
                            <div className="elementor-widget-container">
                              <div className="wdes-tabs ">
                                <ul className="nav nav-tabs wdes-general-tabs-position-top wdes-align-tabs-center" id="featuresTab" role="tablist">
                                  <li className="nav-item "><a className="nav-link active wdes-tabs-control-image-left" href="#wdes-b6c4ede" aria-controls="wdes-b6c4ede" role="tab" data-toggle="tab" style={{backgroundColor:'#7868E5'}} ><img decoding="async" className="wdes-tabs-control-image" src={globe} alt="Shared Hosting"/>
                                      <div className="wdes-tabs-control-text">Shared Hosting</div>
                                    </a></li>
                                  <li className="nav-item"><a className="nav-link  wdes-tabs-control-image-left" href="#wdes-59539d1" aria-controls="wdes-59539d1" role="tab" data-toggle="tab" style={{backgroundColor:'#7868E5'}} ><img decoding="async" className="wdes-tabs-control-image" src={cloudhosting} alt="Cloud Hosting" />
                                      <div className="wdes-tabs-control-text">Cloud Hosting</div>
                                    </a></li>
                                  <li className="nav-item "><a className="nav-link  wdes-tabs-control-image-left" href="#wdes-b698c15" aria-controls="wdes-b698c15" role="tab" data-toggle="tab" style={{backgroundColor:'#7868E5'}} ><img decoding="async" className="wdes-tabs-control-image" src={vpshosting} alt="VPS Hosting" />
                                      <div className="wdes-tabs-control-text">VPS Hosting</div>
                                    </a></li>
                                  <li className="nav-item "><a className="nav-link  wdes-tabs-control-image-left" href="#wdes-9d2d9ae" aria-controls="wdes-9d2d9ae" role="tab" data-toggle="tab" style={{backgroundColor:'#7868E5'}} ><img decoding="async" className="wdes-tabs-control-image" src={wphosting} alt="Wordpress Hosting" />
                                      <div className="wdes-tabs-control-text">WordPress Hosting</div>
                                    </a></li>
                                </ul>
                                <div className="tabs-area-features">
                                  <div className="wdes-wrap-tabs-content">
                                    <div id="featuresTabContent" className="tab-content custom">
                                      <div className="tab-pane    animated show active" id="wdes-b6c4ede" role="tabpanel">
                                        <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-163 .elementor-element.elementor-element-3948843.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-3948843.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-3948843>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-1a58198 .wdes-section-header-primary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-1a58198 .wdes-section-header-secondary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 10px 0px 15px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-1a58198 .wdes-section-header-secondary:hover {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-1a58198 .wdes-section-header-description {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #726F91;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 30px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-b05383f .elementor-button {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-b05383f .elementor-button:hover,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-b05383f .elementor-button:focus {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-b05383f>.elementor-widget-container {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 5px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-163 .elementor-element.elementor-element-73bfaa1.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-73bfaa1.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-73bfaa1.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-73bfaa1>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-877647f {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmax-width: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-877647f img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: 277px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tobject-fit: contain;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:1024px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-d357e94 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 15px 0px 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-3948843>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-73bfaa1>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 30px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-163 .elementor-element.elementor-element-877647f {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                        <div data-elementor-type="section" data-elementor-id={163} className="elementor elementor-163">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-d357e94 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d357e94" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3948843" data-id={3948843} data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-1a58198 elementor-widget elementor-widget-wdes-section-header-widget" data-id="1a58198" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                                    <div className="elementor-widget-container">
                                                      <section className="widget-content wdes-widget-section-header">
                                                        <div className="wdes-widget-inner  ">
                                                          <h1 className="wdes-section-header-primary">
                                                            Shared Hosting</h1>
                                                          <h2 className="wdes-section-header-secondary">
                                                            <span className="wdes-head-before">Best-in-class
                                                              word hosting</span>
                                                          </h2>
                                                          <div className="wdes-section-header-description">
                                                            With Phox Shared Hosting
                                                            you get all the
                                                            features, tools, and
                                                            guidance you need to
                                                            build and launch truly
                                                            impressive websites.
                                                          </div>
                                                        </div>
                                                      </section>
                                                    </div>
                                                  </div>
                                                  <div className="elementor-element elementor-element-b05383f elementor-widget elementor-widget-button" data-id="b05383f" data-element_type="widget" data-widget_type="button.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-button-wrapper">
                                                        <a className="elementor-button elementor-button-link elementor-size-sm" style={{backgroundColor:'#B49BFC'}} href="#">
                                                          <span className="elementor-button-content-wrapper">
                                                            <span className="elementor-button-text">Get
                                                              Started</span>
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-73bfaa1" data-id="73bfaa1" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-877647f elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image" data-id="877647f" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="image.default">
                                                    <div className="elementor-widget-container">
                                                      <img loading="lazy" decoding="async" width={712} height={550} src="wp-content/uploads/sites/21/2023/04/shared-thumb-hosting.png" className="attachment-full size-full wp-image-583" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/shared-thumb-hosting.png 712w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/shared-thumb-hosting-300x232.png 300w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/shared-thumb-hosting-416x321.png 416w" sizes="(max-width: 712px) 100vw, 712px" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <div className="tab-pane    animated " id="wdes-59539d1" role="tabpanel">
                                        <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-187 .elementor-element.elementor-element-5bd60d6.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-5bd60d6.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-5bd60d6>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a310c74 .wdes-section-header-primary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a310c74 .wdes-section-header-secondary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 10px 0px 15px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a310c74 .wdes-section-header-secondary:hover {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a310c74 .wdes-section-header-description {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #726F91;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 30px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-dd80964 .elementor-button {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-dd80964 .elementor-button:hover,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-dd80964 .elementor-button:focus {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-dd80964>.elementor-widget-container {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 5px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-187 .elementor-element.elementor-element-a200519.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a200519.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a200519.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a200519>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-4647570 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmax-width: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-4647570 img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: 277px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tobject-fit: contain;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:1024px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-5d864a8 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 15px 0px 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-5bd60d6>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-a200519>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 30px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-187 .elementor-element.elementor-element-4647570 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                        <div data-elementor-type="section" data-elementor-id={187} className="elementor elementor-187">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-5d864a8 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5d864a8" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5bd60d6" data-id="5bd60d6" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-a310c74 elementor-widget elementor-widget-wdes-section-header-widget" data-id="a310c74" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                                    <div className="elementor-widget-container">
                                                      <section className="widget-content wdes-widget-section-header">
                                                        <div className="wdes-widget-inner  ">
                                                          <h1 className="wdes-section-header-primary">
                                                            Cloud Hosting</h1>
                                                          <h2 className="wdes-section-header-secondary">
                                                            <span className="wdes-head-before">Best-in-class
                                                              word hosting</span>
                                                          </h2>
                                                          <div className="wdes-section-header-description">
                                                            With Phox Shared Hosting
                                                            you get all the
                                                            features, tools, and
                                                            guidance you need to
                                                            build and launch truly
                                                            impressive websites.
                                                          </div>
                                                        </div>
                                                      </section>
                                                    </div>
                                                  </div>
                                                  <div className="elementor-element elementor-element-dd80964 elementor-widget elementor-widget-button" data-id="dd80964" data-element_type="widget" data-widget_type="button.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-button-wrapper">
                                                        <a className="elementor-button elementor-button-link elementor-size-sm" style={{backgroundColor:'#B49BFC'}} href="#">
                                                          <span className="elementor-button-content-wrapper">
                                                            <span className="elementor-button-text">Get
                                                              Started</span>
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a200519" data-id="a200519" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-4647570 elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image" data-id={4647570} data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="image.default">
                                                    <div className="elementor-widget-container">
                                                      <img loading="lazy" decoding="async" width={286} height={274} src="wp-content/uploads/sites/21/2023/04/cloud-thumb-updated.png" className="attachment-full size-full wp-image-194" alt="" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <div className="tab-pane    animated " id="wdes-b698c15" role="tabpanel">
                                        <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-198 .elementor-element.elementor-element-ddfcacd.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-ddfcacd.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-ddfcacd>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-2460af7 .wdes-section-header-primary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-2460af7 .wdes-section-header-secondary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 10px 0px 15px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-2460af7 .wdes-section-header-secondary:hover {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-2460af7 .wdes-section-header-description {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #726F91;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 30px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-3c06718 .elementor-button {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-3c06718 .elementor-button:hover,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-3c06718 .elementor-button:focus {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-3c06718>.elementor-widget-container {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 5px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-198 .elementor-element.elementor-element-f5740dc.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-f5740dc.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-f5740dc.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-f5740dc>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-93a5fac {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmax-width: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-93a5fac img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: 277px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tobject-fit: contain;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:1024px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-44b973e {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 15px 0px 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-ddfcacd>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-f5740dc>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 30px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-198 .elementor-element.elementor-element-93a5fac {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                        <div data-elementor-type="section" data-elementor-id={198} className="elementor elementor-198">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-44b973e elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="44b973e" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ddfcacd" data-id="ddfcacd" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-2460af7 elementor-widget elementor-widget-wdes-section-header-widget" data-id="2460af7" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                                    <div className="elementor-widget-container">
                                                      <section className="widget-content wdes-widget-section-header">
                                                        <div className="wdes-widget-inner  ">
                                                          <h1 className="wdes-section-header-primary">
                                                            VPS Hosting</h1>
                                                          <h2 className="wdes-section-header-secondary">
                                                            <span className="wdes-head-before">Best-in-class
                                                              word hosting</span>
                                                          </h2>
                                                          <div className="wdes-section-header-description">
                                                            With Phox Shared Hosting
                                                            you get all the
                                                            features, tools, and
                                                            guidance you need to
                                                            build and launch truly
                                                            impressive websites.
                                                          </div>
                                                        </div>
                                                      </section>
                                                    </div>
                                                  </div>
                                                  <div className="elementor-element elementor-element-3c06718 elementor-widget elementor-widget-button" data-id="3c06718" data-element_type="widget" data-widget_type="button.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-button-wrapper">
                                                        <a className="elementor-button elementor-button-link elementor-size-sm" style={{backgroundColor:'#B49BFC'}} href="#">
                                                          <span className="elementor-button-content-wrapper">
                                                            <span className="elementor-button-text">Get
                                                              Started</span>
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f5740dc" data-id="f5740dc" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-93a5fac elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image" data-id="93a5fac" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="image.default">
                                                    <div className="elementor-widget-container">
                                                      <img loading="lazy" decoding="async" width={415} height={274} src="wp-content/uploads/sites/21/2023/04/vps-thumb.png" className="attachment-full size-full wp-image-207" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/vps-thumb.png 415w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/vps-thumb-300x198.png 300w" sizes="(max-width: 415px) 100vw, 415px" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <div className="tab-pane    animated " id="wdes-9d2d9ae" role="tabpanel">
                                        <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-209 .elementor-element.elementor-element-4d12b1d.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-4d12b1d.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-4d12b1d>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-5782e6e .wdes-section-header-primary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-5782e6e .wdes-section-header-secondary {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 10px 0px 15px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-5782e6e .wdes-section-header-secondary:hover {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-5782e6e .wdes-section-header-description {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #726F91;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 30px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-f3f00dd .elementor-button {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-f3f00dd .elementor-button:hover,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-f3f00dd .elementor-button:focus {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-f3f00dd>.elementor-widget-container {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 5px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-bc-flex-widget .elementor-209 .elementor-element.elementor-element-df7d084.elementor-column .elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-df7d084.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-df7d084.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-df7d084>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-d6be4be {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmax-width: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-d6be4be img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight: 277px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tobject-fit: contain;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:1024px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-6a6d899 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 15px 0px 15px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-4d12b1d>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-df7d084>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0px 0px 30px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-209 .elementor-element.elementor-element-d6be4be {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                        <div data-elementor-type="section" data-elementor-id={209} className="elementor elementor-209">
                                          <section className="elementor-section elementor-top-section elementor-element elementor-element-6a6d899 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6a6d899" data-element_type="section">
                                            <div className="elementor-container elementor-column-gap-default">
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4d12b1d" data-id="4d12b1d" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-5782e6e elementor-widget elementor-widget-wdes-section-header-widget" data-id="5782e6e" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                                    <div className="elementor-widget-container">
                                                      <section className="widget-content wdes-widget-section-header">
                                                        <div className="wdes-widget-inner  ">
                                                          <h1 className="wdes-section-header-primary">
                                                            WordPress Hosting</h1>
                                                          <h2 className="wdes-section-header-secondary">
                                                            <span className="wdes-head-before">Best-in-class
                                                              word hosting</span>
                                                          </h2>
                                                          <div className="wdes-section-header-description">
                                                            With Phox Shared Hosting
                                                            you get all the
                                                            features, tools, and
                                                            guidance you need to
                                                            build and launch truly
                                                            impressive websites.
                                                          </div>
                                                        </div>
                                                      </section>
                                                    </div>
                                                  </div>
                                                  <div className="elementor-element elementor-element-f3f00dd elementor-widget elementor-widget-button" data-id="f3f00dd" data-element_type="widget" data-widget_type="button.default">
                                                    <div className="elementor-widget-container">
                                                      <div className="elementor-button-wrapper">
                                                        <a className="elementor-button elementor-button-link elementor-size-sm" style={{backgroundColor:'#B49BFC'}} href="#">
                                                          <span className="elementor-button-content-wrapper">
                                                            <span className="elementor-button-text">Get
                                                              Started</span>
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-df7d084" data-id="df7d084" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                  <div className="elementor-element elementor-element-d6be4be elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image" data-id="d6be4be" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInRight&quot;}" data-widget_type="image.default">
                                                    <div className="elementor-widget-container">
                                                      <img loading="lazy" decoding="async" width={500} height={276} src="wp-content/uploads/sites/21/2023/04/wp-thumb.png" className="attachment-full size-full wp-image-210" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/wp-thumb.png 500w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/wp-thumb-300x166.png 300w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/wp-thumb-416x230.png 416w" sizes="(max-width: 500px) 100vw, 500px" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </section>
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
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-c0e45d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c0e45d3" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cf5bae9" data-id="cf5bae9" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated" style={{backgroundColor:'#312D5E'}}>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-5ac1fcb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5ac1fcb" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bf54326" data-id="bf54326" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-9d0c3ee elementor-invisible elementor-widget elementor-widget-image" data-id="9d0c3ee" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="lazy" decoding="async" width={316} height={219} src="wp-content/uploads/sites/21/2023/04/platform.png" className="attachment-large size-large wp-image-216" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/platform.png 316w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/platform-300x208.png 300w" sizes="(max-width: 316px) 100vw, 316px" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8d4f3f5" data-id="8d4f3f5" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-faac30f elementor-widget elementor-widget-wdes-section-header-widget" data-id="faac30f" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                    <div className="elementor-widget-container">
                                      <section className="widget-content wdes-widget-section-header">
                                        <div className="wdes-widget-inner  ">
                                          <h1 className="wdes-section-header-primary">WE OPERATE ON GOOGLE
                                            CLOUD</h1>
                                          <h2 className="wdes-section-header-secondary"><span className="wdes-head-before">Our platform is powered by
                                              Google Cloud</span> </h2>
                                          <div className="wdes-section-header-description">With Phox
                                            Shared Hosting you get all the features, tools, and
                                            guidance you need to build and launch truly impressive
                                            websites.</div>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-dc4db15 elementor-widget elementor-widget-button" data-id="dc4db15" data-element_type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" style={{backgroundColor:'#B49BFC'}} href="#">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Get Started</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-ed598fd elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="ed598fd" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c9891e8" data-id="c9891e8" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-d01eae1 elementor-widget elementor-widget-wdes-section-header-widget" data-id="d01eae1" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner wdes-text-align-center ">
                                  <h1 className="wdes-section-header-primary">What customers say</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-4d6e76e elementor-widget elementor-widget-wdes_testimonials" data-id="4d6e76e" data-element_type="widget" data-widget_type="wdes_testimonials.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-wdes_testimonials wdes-testimonials">
                                <div className="wdes-testimonials-instance owl-carousel owl-theme" data-settings="{&quot;items&quot;:{&quot;desktop&quot;:4,&quot;tablet&quot;:false,&quot;mobile&quot;:false},&quot;autoplay&quot;:true,&quot;autoplayHoverPause&quot;:true,&quot;autoplaySpeed&quot;:400,&quot;loop&quot;:false,&quot;nav&quot;:false,&quot;dots&quot;:false,&quot;autoHeight&quot;:true,&quot;rtl&quot;:false}">
                                  <div className="wdes-testimonials-item">
                                    <div className="wdes-testimonials-item-inner">
                                      <div className="wdes-testimonials-content">
                                        <p className="wdes-testimonials-comment"> <span>Phox host is the
                                            best hosting I've ever dealt with. They are truly
                                            amazing! My advice for you, don't think just select a
                                            plan!
                                          </span></p>
                                        <div className="wdes-testimonials-name"><span>Cheryl Doyle</span>
                                        </div>
                                        <div className="wdes-testimonials-position"> <span>USA</span></div>
                                        <div className="wdes-testimonials-rating" data-rating={5}> <span><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /></span></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wdes-testimonials-item">
                                    <div className="wdes-testimonials-item-inner">
                                      <div className="wdes-testimonials-content">
                                        <p className="wdes-testimonials-comment"> <span>Phox host is the
                                            best hosting I've ever dealt with. They are truly
                                            amazing! My advice for you, don't think just select a
                                            plan!
                                          </span></p>
                                        <div className="wdes-testimonials-name"><span>Cheryl Doyle</span>
                                        </div>
                                        <div className="wdes-testimonials-position"> <span>USA</span></div>
                                        <div className="wdes-testimonials-rating" data-rating={5}> <span><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /></span></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wdes-testimonials-item">
                                    <div className="wdes-testimonials-item-inner">
                                      <div className="wdes-testimonials-content">
                                        <p className="wdes-testimonials-comment"> <span>Phox host is the
                                            best hosting I've ever dealt with. They are truly
                                            amazing! My advice for you, don't think just select a
                                            plan!
                                          </span></p>
                                        <div className="wdes-testimonials-name"><span>Cheryl Doyle</span>
                                        </div>
                                        <div className="wdes-testimonials-position"> <span>USA</span></div>
                                        <div className="wdes-testimonials-rating" data-rating={5}> <span><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /></span></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wdes-testimonials-item">
                                    <div className="wdes-testimonials-item-inner">
                                      <div className="wdes-testimonials-content">
                                        <p className="wdes-testimonials-comment"> <span>Phox host is the
                                            best hosting I've ever dealt with. They are truly
                                            amazing! My advice for you, don't think just select a
                                            plan!
                                          </span></p>
                                        <div className="wdes-testimonials-name"><span>Cheryl Doyle</span>
                                        </div>
                                        <div className="wdes-testimonials-position"> <span>USA</span></div>
                                        <div className="wdes-testimonials-rating" data-rating={5}> <span><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /></span></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wdes-testimonials-item">
                                    <div className="wdes-testimonials-item-inner">
                                      <div className="wdes-testimonials-content">
                                        <p className="wdes-testimonials-comment"> <span>Phox host is the
                                            best hosting I've ever dealt with. They are truly
                                            amazing! My advice for you, don't think just select a
                                            plan!
                                          </span></p>
                                        <div className="wdes-testimonials-name"><span>Cheryl Doyle</span>
                                        </div>
                                        <div className="wdes-testimonials-position"> <span>USA</span></div>
                                        <div className="wdes-testimonials-rating" data-rating={5}> <span><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /><i className="active-star fas fa-star" aria-hidden="true" /></span></div>
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
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-3a92065 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="3a92065" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ad16f87 elementor-hidden-mobile elementor-hidden-tablet" data-id="ad16f87" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-d1c8f28 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="d1c8f28" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width={575} height={744} src="wp-content/uploads/sites/21/2023/04/path-left-br.png" className="attachment-full size-full wp-image-554" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/path-left-br.png 575w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/path-left-br-232x300.png 232w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/path-left-br-416x538.png 416w" sizes="(max-width: 575px) 100vw, 575px" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-945a01d" data-id="945a01d" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-a4834fc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a4834fc" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b67ac10" data-id="b67ac10" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-845eb95 elementor-widget elementor-widget-wdes-section-header-widget" data-id="845eb95" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                    <div className="elementor-widget-container">
                                      <section className="widget-content wdes-widget-section-header">
                                        <div className="wdes-widget-inner wdes-text-align-center ">
                                          <h1 className="wdes-section-header-primary">Our standards</h1>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-06864b3 elementor-widget elementor-widget-wdes_tabs" data-id="06864b3" data-element_type="widget" data-widget_type="wdes_tabs.default">
                                    <div className="elementor-widget-container">
                                      <div className="wdes-tabs ">
                                        <ul className="nav nav-tabs wdes-general-tabs-position-right " id="featuresTab" role="tablist">
                                          <li className="nav-item wdes-aligment-item-left"><a className="nav-link active wdes-tabs-control-image-left" href="#wdes-7c93fc1" aria-controls="wdes-7c93fc1" role="tab" data-toggle="tab">
                                              <div className="wdes-tabs-control-text">No Hidden Fees
                                              </div>
                                              <p className="wdes-tabs-control-description">Once it’s
                                                built, it’s 100% yours, No Hidden Fees in our
                                                company.</p>
                                            </a></li>
                                          <li className="nav-item wdes-aligment-item-left"><a className="nav-link  wdes-tabs-control-image-left" href="#wdes-e61d636" aria-controls="wdes-e61d636" role="tab" data-toggle="tab">
                                              <div className="wdes-tabs-control-text">Virality</div>
                                              <p className="wdes-tabs-control-description">Going brand
                                                viral is the process of pushing the brand in a
                                                short time.</p>
                                            </a></li>
                                          <li className="nav-item wdes-aligment-item-left"><a className="nav-link  wdes-tabs-control-image-left" href="#wdes-f7a9b7a" aria-controls="wdes-f7a9b7a" role="tab" data-toggle="tab">
                                              <div className="wdes-tabs-control-text">Interaction
                                              </div>
                                              <p className="wdes-tabs-control-description">It allows
                                                the customers for greater interactivity.</p>
                                            </a></li>
                                          <li className="nav-item wdes-aligment-item-left"><a className="nav-link  wdes-tabs-control-image-left" href="#wdes-dd22599" aria-controls="wdes-dd22599" role="tab" data-toggle="tab">
                                              <div className="wdes-tabs-control-text">Money-Back
                                                Guarantee</div>
                                              <p className="wdes-tabs-control-description">Branding
                                                the business through different online platforms.
                                              </p>
                                            </a></li>
                                        </ul>
                                        <div className="tabs-area-features">
                                          <div className="wdes-wrap-tabs-content">
                                            <div id="featuresTabContent" className="tab-content custom">
                                              <div className="tab-pane    animated show active" id="wdes-7c93fc1" role="tabpanel">
                                                <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-305 .elementor-element.elementor-element-4918958>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 50px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-305 .elementor-element.elementor-element-5d8f512 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-305 .elementor-element.elementor-element-5d8f512 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                                <div data-elementor-type="section" data-elementor-id={305} className="elementor elementor-305">
                                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-27d0c16 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="27d0c16" data-element_type="section">
                                                    <div className="elementor-container elementor-column-gap-default">
                                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4918958" data-id={4918958} data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                          <div className="elementor-element elementor-element-5d8f512 elementor-invisible elementor-widget elementor-widget-image" data-id="5d8f512" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="image.default">
                                                            <div className="elementor-widget-container">
                                                              <img loading="lazy" decoding="async" width={546} height={524} src="wp-content/uploads/sites/21/2023/04/no-hidden-fees-thumb.png" className="attachment-large size-large wp-image-321" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/no-hidden-fees-thumb.png 546w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/no-hidden-fees-thumb-300x288.png 300w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/no-hidden-fees-thumb-416x399.png 416w" sizes="(max-width: 546px) 100vw, 546px" />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                              <div className="tab-pane    animated " id="wdes-e61d636" role="tabpanel">
                                                <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-327 .elementor-element.elementor-element-0145df8>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 50px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-327 .elementor-element.elementor-element-a4f2855 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-327 .elementor-element.elementor-element-a4f2855 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                                <div data-elementor-type="section" data-elementor-id={327} className="elementor elementor-327">
                                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-087deef elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="087deef" data-element_type="section">
                                                    <div className="elementor-container elementor-column-gap-default">
                                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0145df8" data-id="0145df8" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                          <div className="elementor-element elementor-element-a4f2855 elementor-invisible elementor-widget elementor-widget-image" data-id="a4f2855" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="image.default">
                                                            <div className="elementor-widget-container">
                                                              <img loading="lazy" decoding="async" width={777} height={765} src="wp-content/uploads/sites/21/2023/04/virality.png" className="attachment-large size-large wp-image-328" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/virality.png 777w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/virality-300x295.png 300w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/virality-768x756.png 768w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/virality-416x410.png 416w" sizes="(max-width: 777px) 100vw, 777px" />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                              <div className="tab-pane    animated " id="wdes-f7a9b7a" role="tabpanel">
                                                <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-336 .elementor-element.elementor-element-f30e27d>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 50px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-336 .elementor-element.elementor-element-477386e {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-336 .elementor-element.elementor-element-477386e {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                                <div data-elementor-type="section" data-elementor-id={336} className="elementor elementor-336">
                                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-c6fc630 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c6fc630" data-element_type="section">
                                                    <div className="elementor-container elementor-column-gap-default">
                                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f30e27d" data-id="f30e27d" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                          <div className="elementor-element elementor-element-477386e elementor-invisible elementor-widget elementor-widget-image" data-id="477386e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="image.default">
                                                            <div className="elementor-widget-container">
                                                              <img loading="lazy" decoding="async" width={525} height={532} src="wp-content/uploads/sites/21/2023/04/interaction.png" className="attachment-large size-large wp-image-337" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/interaction.png 525w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/interaction-296x300.png 296w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/interaction-416x422.png 416w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/interaction-100x100.png 100w" sizes="(max-width: 525px) 100vw, 525px" />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                              <div className="tab-pane    animated " id="wdes-dd22599" role="tabpanel">
                                                <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-343 .elementor-element.elementor-element-1fafa67>.elementor-element-populated {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 50px 0px 0px 0px;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-343 .elementor-element.elementor-element-f65d7e2 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-343 .elementor-element.elementor-element-f65d7e2 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" }} />
                                                <div data-elementor-type="section" data-elementor-id={343} className="elementor elementor-343">
                                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-fad16b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="fad16b2" data-element_type="section">
                                                    <div className="elementor-container elementor-column-gap-default">
                                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1fafa67" data-id="1fafa67" data-element_type="column">
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                          <div className="elementor-element elementor-element-f65d7e2 elementor-invisible elementor-widget elementor-widget-image" data-id="f65d7e2" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInLeft&quot;}" data-widget_type="image.default">
                                                            <div className="elementor-widget-container">
                                                              <img loading="lazy" decoding="async" width={442} height={539} src="wp-content/uploads/sites/21/2023/04/back.png" className="attachment-large size-large wp-image-350" alt="" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/back.png 442w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/back-246x300.png 246w, https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/back-416x507.png 416w" sizes="(max-width: 442px) 100vw, 442px" />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
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
                          </section>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-67f4c0a elementor-hidden-mobile elementor-hidden-tablet" data-id="67f4c0a" data-element_type="column">
                        <div className="elementor-widget-wrap">
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n\t\t\t.elementor-359 .elementor-element.elementor-element-7d61a6f {\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997:not(.elementor-motion-effects-element-type-background)>.elementor-widget-wrap,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-widget-wrap>.elementor-motion-effects-container>.elementor-motion-effects-layer {\n\t\t\t\tbackground-color: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated>.elementor-background-overlay,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-background-slideshow {\n\t\t\t\tborder-radius: 43px 43px 43px 43px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated {\n\t\t\t\tbox-shadow: 0px 3px 11.5px 0px rgba(63.99999999999997, 55.00000000000001, 129, 0.22);\n\t\t\t\ttransition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\n\t\t\t\tpadding: 40px 50px 40px 50px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated>.elementor-background-overlay {\n\t\t\t\ttransition: background 0.3s, border-radius 0.3s, opacity 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-primary {\n\t\t\t\tcolor: #FFFFFF;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 31px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #FFFFFF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-secondary {\n\t\t\t\tcolor: #CECCEB;\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tmargin: 10px 0px 15px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-secondary:hover {\n\t\t\t\tcolor: #CECCEB;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button .elementor-align-icon-right {\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button .elementor-align-icon-left {\n\t\t\t\tmargin-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button:hover,\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button:focus {\n\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82>.elementor-widget-container {\n\t\t\t\tmargin: 0px 20px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button .elementor-align-icon-right {\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button .elementor-align-icon-left {\n\t\t\t\tmargin-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tfill: #312D5E;\n\t\t\t\tcolor: #312D5E;\n\t\t\t\tbackground-color: #FFFFFF;\n\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:hover,\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:focus {\n\t\t\t\tcolor: #FFFFFF;\n\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:hover svg,\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:focus svg {\n\t\t\t\tfill: #FFFFFF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936:not(.elementor-motion-effects-element-type-background),\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936>.elementor-motion-effects-container>.elementor-motion-effects-layer {\n\t\t\t\tbackground-color: #F8F7FF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936 {\n\t\t\t\ttransition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\n\t\t\t\tmargin-top: -112px;\n\t\t\t\tmargin-bottom: 0px;\n\t\t\t\tpadding: 162px 0px 30px 0px;\n\t\t\t\tz-index: 0;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936>.elementor-background-overlay {\n\t\t\t\ttransition: background 0.3s, border-radius 0.3s, opacity 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-02df6e0>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-567305b .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-567305b .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-567305b>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 {\n\t\t\t\t--grid-template-columns: repeat(0, auto);\n\t\t\t\t--icon-size: 19px;\n\t\t\t\t--grid-column-gap: 16px;\n\t\t\t\t--grid-row-gap: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-widget-container {\n\t\t\t\ttext-align: left;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-social-icon {\n\t\t\t\tbackground-color: #B7303000;\n\t\t\t\t--icon-padding: 0em;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-social-icon i {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-social-icon svg {\n\t\t\t\tfill: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1>.elementor-widget-container {\n\t\t\t\tmargin: 10px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-33fc5af>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-077025f .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-077025f .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-077025f>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-fce6d84>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-958d057 .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-958d057 .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-958d057>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-395cf70>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-923a225 .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-923a225 .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-923a225>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-681b107>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-94a8ae1 .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-94a8ae1 .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-94a8ae1>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c:not(.elementor-motion-effects-element-type-background),\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c>.elementor-motion-effects-container>.elementor-motion-effects-layer {\n\t\t\t\tbackground-color: #F8F7FF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c {\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-width: 1px 0px 0px 0px;\n\t\t\t\tborder-color: #BECEF5;\n\t\t\t\ttransition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\n\t\t\t\tpadding: 30px 0px 30px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c>.elementor-background-overlay {\n\t\t\t\ttransition: background 0.3s, border-radius 0.3s, opacity 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-bc-flex-widget .elementor-359 .elementor-element.elementor-element-431352d.elementor-column .elementor-widget-wrap {\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-431352d.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\talign-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-431352d>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 .wdes-logo_link {\n\t\t\t\tjustify-content: flex-start;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 .wdes-logo_img {\n\t\t\t\theight: 31px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e .wdes-section-header-primary {\n\t\t\t\tcolor: #6F81AC;\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #6F81AC;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 0px 30px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-bc-flex-widget .elementor-359 .elementor-element.elementor-element-837b62a.elementor-column .elementor-widget-wrap {\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\talign-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a.elementor-column>.elementor-widget-wrap {\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(34px/2);\n\t\t\t\tmargin-left: calc(34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-34px/2);\n\t\t\t\tmargin-left: calc(-34px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-34px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t@media(max-width:1024px) and (min-width:768px) {\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-431352d {\n\t\t\t\t\twidth: 70%;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a {\n\t\t\t\t\twidth: 30%;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media(max-width:1024px) {\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936 {\n\t\t\t\t\tpadding: 162px 15px 30px 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-022743c {\n\t\t\t\t\tpadding: 30px 15px 30px 15px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media(max-width:767px) {\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-7d61a6f {\n\t\t\t\t\tpadding: 0px 15px 0px 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-bc-flex-widget .elementor-359 .elementor-element.elementor-element-b2f0997.elementor-column .elementor-widget-wrap {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\talign-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated {\n\t\t\t\t\tpadding: 30px 10px 30px 10px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-widget-inner {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-primary {\n\t\t\t\t\tfont-size: 26px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-secondary {\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button {\n\t\t\t\t\tpadding: 12px 20px 12px 20px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 5px 0px 5px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button {\n\t\t\t\t\tpadding: 12px 20px 12px 20px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 5px 0px 5px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-33fc5af>.elementor-element-populated {\n\t\t\t\t\tmargin: 30px 0px 30px 0px;\n\t\t\t\t\t--e-column-margin-right: 0px;\n\t\t\t\t\t--e-column-margin-left: 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-395cf70>.elementor-element-populated {\n\t\t\t\t\tmargin: 30px 0px 30px 0px;\n\t\t\t\t\t--e-column-margin-right: 0px;\n\t\t\t\t\t--e-column-margin-left: 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-431352d.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 .wdes-logo_link {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-d404407>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 0px 20px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\talign-self: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-740050e .wdes-widget-inner {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-740050e>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-148101d>.elementor-widget-container {\n\t\t\t\t\tmargin: 10px 0px 0px 0px;\n\t\t\t\t}\n\t\t\t}\n\t\t" }} />
                <div data-elementor-type="wdes_footer" data-elementor-id={359} className="elementor elementor-359">
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-7d61a6f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7d61a6f" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b2f0997" data-id="b2f0997" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-55cc72a elementor-widget elementor-widget-wdes-section-header-widget" data-id="55cc72a" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner  ">
                                  <h1 className="wdes-section-header-primary">Get started today</h1>
                                  <h2 className="wdes-section-header-secondary"><span className="wdes-head-before">With Phox Shared Hosting you get all the
                                      features, tools</span> </h2>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-6fbbd82 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="6fbbd82" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a className="elementor-button elementor-button-link elementor-size-sm"  style={{backgroundColor:'#B49BFC'}} href="#">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Get Started</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-c94aade elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="c94aade" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Contact Sales</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-b3fc936 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b3fc936" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-02df6e0" data-id="02df6e0" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-567305b elementor-widget elementor-widget-wdes-section-header-widget" data-id="567305b" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner  ">
                                  <h1 className="wdes-section-header-primary">Connect</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-73b82c5 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="73b82c5" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <link rel="stylesheet" href="wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <span className="elementor-icon-list-text">4021 Maryland Avenue</span>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="https://phox.whmcsdes.com/cdn-cgi/l/email-protection#92fbfcf4fdd2e1fbe6f7bcf1fdff">
                                    <span className="elementor-icon-list-text"><span className="__cf_email__" data-cfemail="f1989f979eb182988594df929e9c">[email&nbsp;protected]</span></span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="tel:002-111-444">
                                    <span className="elementor-icon-list-text">002-111-444</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-18ab2d1 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="18ab2d1" data-element_type="widget" data-widget_type="social-icons.default">
                            <div className="elementor-widget-container">
                              <style dangerouslySetInnerHTML={{__html: "\n\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.18.0 - 20-12-2023 */\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container {\n\t\t\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\t\t\tfont-size: 0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid {\n\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-grid\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons .elementor-grid {\n\t\t\t\t\t\t\t\t\t\t\tgrid-column-gap: var(--grid-column-gap, 5px);\n\t\t\t\t\t\t\t\t\t\t\tgrid-row-gap: var(--grid-row-gap, 5px);\n\t\t\t\t\t\t\t\t\t\t\tgrid-template-columns: var(--grid-template-columns);\n\t\t\t\t\t\t\t\t\t\t\tjustify-content: var(--justify-content, center);\n\t\t\t\t\t\t\t\t\t\t\tjustify-items: var(--justify-content, center)\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\tfont-size: var(--icon-size, 25px);\n\t\t\t\t\t\t\t\t\t\t\tline-height: var(--icon-size, 25px);\n\t\t\t\t\t\t\t\t\t\t\twidth: calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em));\n\t\t\t\t\t\t\t\t\t\t\theight: calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em))\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\t--e-social-icon-icon-color: #fff;\n\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\tcursor: pointer\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon i {\n\t\t\t\t\t\t\t\t\t\t\tcolor: var(--e-social-icon-icon-color)\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon svg {\n\t\t\t\t\t\t\t\t\t\t\tfill: var(--e-social-icon-icon-color)\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon:last-child {\n\t\t\t\t\t\t\t\t\t\t\tmargin: 0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon:hover {\n\t\t\t\t\t\t\t\t\t\t\topacity: .9;\n\t\t\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-android {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #a4c639\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-apple {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #999\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-behance {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1769ff\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-bitbucket {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #205081\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-codepen {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #000\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-delicious {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #39f\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-deviantart {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #05cc47\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-digg {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #005be2\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-dribbble {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ea4c89\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-elementor {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #d30c5c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-envelope {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ea4335\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-facebook,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-facebook-f {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #3b5998\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-flickr {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0063dc\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-foursquare {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #2d5be3\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-free-code-camp,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-freecodecamp {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #006400\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-github {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #333\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-gitlab {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #e24329\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-globe {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-google-plus,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-google-plus-g {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #dd4b39\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-houzz {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #7ac142\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-instagram {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #262626\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-jsfiddle {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #487aa2\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-link {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #818a91\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-linkedin,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-linkedin-in {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0077b5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-medium {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #00ab6b\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-meetup {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ec1c40\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-mixcloud {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #273a4b\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-odnoklassniki {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f4731c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-pinterest {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #bd081c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-product-hunt {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #da552f\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-reddit {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ff4500\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-rss {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f26522\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-shopping-cart {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #4caf50\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-skype {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #00aff0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-slideshare {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0077b5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-snapchat {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #fffc00\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-soundcloud {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f80\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-spotify {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #2ebd59\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-stack-overflow {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #fe7a15\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-steam {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #00adee\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-stumbleupon {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #eb4924\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-telegram {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #2ca5e0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-thumb-tack {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1aa1d8\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-tripadvisor {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #589442\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-tumblr {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #35465c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-twitch {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #6441a5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-twitter {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1da1f2\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-viber {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #665cac\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-vimeo {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1ab7ea\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-vk {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #45668e\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-weibo {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #dd2430\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-weixin {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #31a918\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-whatsapp {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #25d366\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-wordpress {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #21759b\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-xing {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #026466\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-yelp {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #af0606\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-youtube {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #cd201f\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-500px {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0099e5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-shape-rounded .elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\tborder-radius: 10%\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-shape-circle .elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t" }} />
                              <div className="elementor-social-icons-wrapper elementor-grid">
                                <span className="elementor-grid-item">
                                  <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-animation-grow elementor-repeater-item-ce444cf" href="#" target="_blank">
                                    <span className="elementor-screen-only">Linkedin-in</span>
                                    <i className="fab fa-linkedin-in" /> </a>
                                </span>
                                <span className="elementor-grid-item">
                                  <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-grow elementor-repeater-item-aed1d0f" href="#" target="_blank">
                                    <span className="elementor-screen-only">Twitter</span>
                                    <i className="fab fa-twitter" /> </a>
                                </span>
                                <span className="elementor-grid-item">
                                  <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-animation-grow elementor-repeater-item-dd7c637" href="#" target="_blank">
                                    <span className="elementor-screen-only">Facebook-f</span>
                                    <i className="fab fa-facebook-f" /> </a>
                                </span>
                                <span className="elementor-grid-item">
                                  <a className="elementor-icon elementor-social-icon elementor-social-icon-google-plus-g elementor-animation-grow elementor-repeater-item-e56d354" href="#" target="_blank">
                                    <span className="elementor-screen-only">Google-plus-g</span>
                                    <i className="fab fa-google-plus-g" /> </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-33fc5af" data-id="33fc5af" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-077025f elementor-widget elementor-widget-wdes-section-header-widget" data-id="077025f" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner  ">
                                  <h1 className="wdes-section-header-primary">About</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-95602d4 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="95602d4" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Contact us</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Careers</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Trust Center</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Legal</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Blog</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-fce6d84" data-id="fce6d84" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-958d057 elementor-widget elementor-widget-wdes-section-header-widget" data-id="958d057" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner  ">
                                  <h1 className="wdes-section-header-primary">Products</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-3a83c6a elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="3a83c6a" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Shared Hosting</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Cloud Hosting</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">VPS Hosting</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">WordPress Hosting</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Dedicated Hosting</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-395cf70" data-id="395cf70" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-923a225 elementor-widget elementor-widget-wdes-section-header-widget" data-id="923a225" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner  ">
                                  <h1 className="wdes-section-header-primary">Services</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-a484501 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="a484501" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Strategy &amp; Research</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Marketing</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">SEO Optimiation</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Reports &amp; Analytics</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Web Development</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-681b107" data-id="681b107" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-94a8ae1 elementor-widget elementor-widget-wdes-section-header-widget" data-id="94a8ae1" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner  ">
                                  <h1 className="wdes-section-header-primary">Support</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-b6f44a9 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="b6f44a9" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items">
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Contact Us</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">FAQs</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Store Locator</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Delivery Information</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Returns &amp; Refunds</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-022743c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="022743c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-431352d" data-id="431352d" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-d404407 elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-wdes-logo" data-id="d404407" data-element_type="widget" data-widget_type="wdes-logo.default">
                            <div className="elementor-widget-container">
                              <div className="wdes-logo wdes-logo-type-image wdes-logo-display-inline"><a href="/" className="wdes-logo_link"><img className="wdes-logo_img elementor-animation-none" src={logo} width={200} height={200} alt="Phox - Classy Pro" srcSet={logo} /></a>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-740050e elementor-widget__width-auto elementor-widget elementor-widget-wdes-section-header-widget" data-id="740050e" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                            <div className="elementor-widget-container">
                              <section className="widget-content wdes-widget-section-header">
                                <div className="wdes-widget-inner  ">
                                  <h1 className="wdes-section-header-primary">© Bharat Tech .</h1>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-837b62a" data-id="837b62a" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-148101d elementor-icon-list--layout-inline elementor-align-right elementor-mobile-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="148101d" data-element_type="widget" data-widget_type="icon-list.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items elementor-inline-items">
                                <li className="elementor-icon-list-item elementor-inline-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Terms</span>
                                  </a>
                                </li>
                                <li className="elementor-icon-list-item elementor-inline-item">
                                  <a href="#">
                                    <span className="elementor-icon-list-text">Policy</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div> {/* End Of Layout Width */}
              <button id="wdes-back-to-top" className="wdes-btn-align-right"><span className="fas fa-arrow-up" /></button>
            </div>
          );
};

export default Search3