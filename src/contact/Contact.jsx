import React, { useState, useEffect } from 'react'
import './post-473.css'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/google.png'
import Map from './Map'
import {FaMoneyBillWave,FaUserEdit} from 'react-icons/fa'

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value,
            weburl: e.target.elements.weburl.value,
            help: e.target.elements.help.value
        };

        console.log(formData);

        try {
            const response = await fetch('http://localhost:3001/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Submission successful');
            } else {
                alert('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <div>
            <div className="layout-width layout-wide">
                <div id="Top_bar" className="alternate-sticky-header">
                    <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-1078ace {\n\t\t\t\t\tpadding: 27px 0px 27px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-bc-flex-widget .elementor-13 .elementor-element.elementor-element-1f1eb2a.elementor-column .elementor-widget-wrap {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\talign-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a>.elementor-element-populated {\n\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-5c51450 .wdes-logo_link {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-5c51450 .wdes-logo_img {\n\t\t\t\t\theight: 36px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-bc-flex-widget .elementor-13 .elementor-element.elementor-element-29a7238.elementor-column .elementor-widget-wrap {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\talign-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238>.elementor-element-populated {\n\t\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-horizontal {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical .menu-item-link-top {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical-sub-bottom .menu-item-link-sub {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top {\n\t\t\t\t\tcolor: #5D709D;\n\t\t\t\t\tpadding: 10px 0px 10px 0px !important;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top .wdes-nav-link-text {\n\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\tline-height: 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item:hover>.menu-item-link-top {\n\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item.current-menu-item .menu-item-link-top {\n\t\t\t\t\tcolor: #1B2E5A;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav>.wdes-nav-item {\n\t\t\t\t\tmargin: 0px 40px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top .wdes-nav-arrow {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tmargin-left: 9px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-top .wdes-nav-arrow svg {\n\t\t\t\t\twidth: 12px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical-sub-left-side .menu-item-link-top .wdes-nav-arrow {\n\t\t\t\t\tmargin-right: 9px;\n\t\t\t\t\tmargin-left: 0;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-sub {\n\t\t\t\t\twidth: 234px !important;\n\t\t\t\t\tbackground-color: #FFFFFF;\n\t\t\t\t\tborder-style: solid;\n\t\t\t\t\tborder-width: 2px 2px 2px 2px;\n\t\t\t\t\tborder-color: #CAD4EB;\n\t\t\t\t\tborder-radius: 16px 16px 16px 16px;\n\t\t\t\t\tpadding: 27px 32px 27px 32px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-sub>.menu-item:first-child>.menu-item-link {\n\t\t\t\t\tborder-radius: 16px 16px 0 0;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-sub>.menu-item:last-child>.menu-item-link {\n\t\t\t\t\tborder-radius: 0 0 16px 16px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-sub .wdes-nav-link-text {\n\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item-link-sub {\n\t\t\t\t\tcolor: #5D709D;\n\t\t\t\t\tpadding: 5px 0px 11px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .menu-item:hover>.menu-item-link-sub {\n\t\t\t\t\tcolor: #7868E5;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-mobile-trigger {\n\t\t\t\t\tbackground-color: #F2F2FF;\n\t\t\t\t\tcolor: #5D709D;\n\t\t\t\t\tborder-radius: 16px 16px 16px 16px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-mobile-close-btn {\n\t\t\t\t\tcolor: #B7B4FF;\n\t\t\t\t\tfont-size: 17px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 {\n\t\t\t\t\twidth: auto;\n\t\t\t\t\tmax-width: auto;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button {\n\t\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tbackground-color: #1B2E5A;\n\t\t\t\t\tborder-radius: 20px 20px 20px 20px;\n\t\t\t\t\tpadding: 13px 26px 13px 26px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button:hover,\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button:focus {\n\t\t\t\t\tbackground-color: #B49BFC;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 {\n\t\t\t\t\twidth: auto;\n\t\t\t\t\tmax-width: auto;\n\t\t\t\t}\n\n\t\t\t\t@media(max-width:1024px) {\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-1078ace {\n\t\t\t\t\t\tpadding: 27px 15px 27px 15px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav>.wdes-nav-item {\n\t\t\t\t\t\tmargin: 0px 20px 0px 0px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936 .elementor-button {\n\t\t\t\t\t\tpadding: 13px 15px 13px 15px;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media(max-width:767px) {\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a {\n\t\t\t\t\t\twidth: 50%;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238 {\n\t\t\t\t\t\twidth: 50%;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-mobile-menu .menu-item-link {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-horizontal {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical .menu-item-link-top {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav-vertical-sub-bottom .menu-item-link-sub {\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-mobile-menu .wdes-nav-vertical-sub-left-side .menu-item-link-top .wdes-nav-arrow {\n\t\t\t\t\t\tmargin-left: 9px;\n\t\t\t\t\t\tmargin-right: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-nav {\n\t\t\t\t\t\twidth: 80%;\n\t\t\t\t\t\tpadding: 30px 20px 30px 20px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-e088c70 .wdes-mobile-menu-active .wdes-nav {\n\t\t\t\t\t\tbox-shadow: 0px 0px 14px 0px #E7E7E7;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-75d4936>.elementor-widget-container {\n\t\t\t\t\t\tmargin: 0px 0px 0px 10px;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media(min-width:768px) {\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-1f1eb2a {\n\t\t\t\t\t\twidth: 20%;\n\t\t\t\t\t}\n\n\t\t\t\t\t.elementor-13 .elementor-element.elementor-element-29a7238 {\n\t\t\t\t\t\twidth: 79.666%;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t" }} />
                    <div data-elementor-type="wdes_header" data-elementor-id={13} className="elementor elementor-13">
                        <section className="elementor-section elementor-top-section elementor-element elementor-element-1078ace elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1078ace" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1f1eb2a" data-id="1f1eb2a" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <div className="elementor-element elementor-element-5c51450 elementor-widget elementor-widget-wdes-logo" data-id="5c51450" data-element_type="widget" data-widget_type="wdes-logo.default">
                                            <div className="elementor-widget-container">
                                                <div className="wdes-logo wdes-logo-type-image wdes-logo-display-inline"><a href="/" className="wdes-logo_link"><img className="wdes-logo_img elementor-animation-none" src={logo} width={200} height={200} alt="Phox - Classy Pro" srcSet={logo} /></a>
                                                </div>
                                            </div>
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
                                                                        <a href="../shared-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">Shared
                                                                            Hosting</span></a></div>
                                                                    <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-419 wdes-nav-item wdes-nav-item-sub">
                                                                        <a href="../wordpress-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">WordPress
                                                                            Hosting</span></a></div>
                                                                    <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-425 wdes-nav-item wdes-nav-item-sub">
                                                                        <a href="../vps-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">VPS
                                                                            Hosting</span></a></div>
                                                                    <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-431 wdes-nav-item wdes-nav-item-sub">
                                                                        <a href="../dedicated-hosting/index.html" className="menu-item-link menu-item-link-depth-1 menu-item-link-sub"><span className="wdes-nav-link-text">Dedicated
                                                                            Hosting</span></a></div>
                                                                </div>
                                                            </div>
                                                            <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-438 wdes-nav-item">
                                                                <a href="/" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Domain</span></a></div>
                                                            <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-469 wdes-nav-item">
                                                                <a href="/company" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Company</span></a></div>
                                                            <div className="menu-item menu-item-type-post_type menu-item-object-page wdes-nav-item-498 wdes-nav-item">
                                                                <a href="/blog" className="menu-item-link menu-item-link-depth-0 menu-item-link-top"><span className="wdes-nav-link-text">Blog</span></a></div>
                                                            <div className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-473 current_page_item wdes-nav-item-485 wdes-nav-item">
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
                <div data-elementor-type="wp-page" data-elementor-id={473} className="elementor elementor-473">
                    <section className="elementor-section elementor-top-section elementor-element elementor-element-f8fd9ba elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f8fd9ba" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-25b8214 elementor-hidden-mobile" data-id="25b8214" data-element_type="column">
                                <div className="elementor-widget-wrap">
                                </div>
                            </div>
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-271b23f" data-id="271b23f" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-e795b9c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e795b9c" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bf0010f" data-id="bf0010f" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-b95383c elementor-invisible elementor-widget elementor-widget-wdes-section-header-widget" data-id="b95383c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="wdes-section-header-widget.default">
                                                        <div className="elementor-widget-container">
                                                            <section className="widget-content wdes-widget-section-header">
                                                                <div className="wdes-widget-inner wdes-text-align-center ">
                                                                    <h1 className="wdes-section-header-primary">Contact Us</h1>
                                                                    <h2 className="wdes-section-header-secondary"><span className="wdes-head-before">We’re here 24/7</span>
                                                                    </h2>
                                                                    <div className="wdes-section-header-description">It's not just
                                                                        wishful thinking. It's our noble cause</div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-501cc2a elementor-hidden-mobile" data-id="501cc2a" data-element_type="column">
                                <div className="elementor-widget-wrap">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="elementor-section elementor-top-section elementor-element elementor-element-88a130c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="88a130c" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4376b4e" data-id="4376b4e" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-de8d5a2 elementor-widget elementor-widget-wdes-section-header-widget" data-id="de8d5a2" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                        <div className="elementor-widget-container">
                                            <section className="widget-content wdes-widget-section-header">
                                                <div className="wdes-widget-inner wdes-text-align-center ">
                                                    <h1 className="wdes-section-header-primary">CONTACT PRESS, MEDIA AND LEGAL</h1>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-511ae39 elementor-widget elementor-widget-wdes-section-header-widget" data-id="511ae39" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                        <div className="elementor-widget-container">
                                            <section className="widget-content wdes-widget-section-header">
                                                <div className="wdes-widget-inner wdes-text-align-center ">
                                                    <h1 className="wdes-section-header-primary">Email specific programs &amp; offices
                                                    </h1>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-2b49814 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2b49814" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-acc0afa" data-id="acc0afa" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-26c8b54 elementor-view-stacked elementor-position-left elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="26c8b54" data-element_type="widget" data-widget_type="icon-box.default">
                                                        <div className="elementor-widget-container">
                                                            <link rel="stylesheet" href="../wp-content/plugins/elementor/assets/css/widget-icon-box.min.css" />
                                                            <div className="elementor-icon-box-wrapper">
                                                                <div className="elementor-icon-box-icon">
                                                                    <span className="elementor-icon elementor-animation-">
                                                                        <i aria-hidden="true" className="far fa-newspaper" />
                                                                    </span>
                                                                </div>
                                                                <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                        <span>
                                                                            Press &amp; Media </span>
                                                                    </h3>
                                                                    <p className="elementor-icon-box-description">
                                                                        If you’re a member of the press or have press and media
                                                                        questions </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-63d019d" data-id="63d019d" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-56ef122 elementor-view-stacked elementor-position-left elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="56ef122" data-element_type="widget" data-widget_type="icon-box.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-icon-box-wrapper">
                                                                <div className="elementor-icon-box-icon">
                                                                    <span className="elementor-icon elementor-animation-" style={{backgroundColor:'#596FB7'}}>
                                                                        <FaMoneyBillWave/></span>
                                                                </div>
                                                                <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                        <span>
                                                                            Affiliate Program </span>
                                                                    </h3>
                                                                    <p className="elementor-icon-box-description">
                                                                        For any questions about our affiliate program </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-6c1d76b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6c1d76b" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-af37912" data-id="af37912" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-a21632c elementor-view-stacked elementor-position-left elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="a21632c" data-element_type="widget" data-widget_type="icon-box.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-icon-box-wrapper">
                                                                <div className="elementor-icon-box-icon">
                                                                    <span className="elementor-icon elementor-animation-">
                                                                        <i aria-hidden="true" className="fas fa-user-shield" />
                                                                    </span>
                                                                </div>
                                                                <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                        <span>
                                                                            Legal </span>
                                                                    </h3>
                                                                    <p className="elementor-icon-box-description">
                                                                        Please review our terms of service and privacy notice.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a1f6eb5" data-id="a1f6eb5" data-element_type="column">
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-99cd2f3 elementor-view-stacked elementor-position-left elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="99cd2f3" data-element_type="widget" data-widget_type="icon-box.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-icon-box-wrapper">
                                                                <div className="elementor-icon-box-icon">
                                                                    <span className="elementor-icon elementor-animation-" style={{backgroundColor:'#1F2544'}}>
                                                                        <FaUserEdit/>
                                                                    </span>
                                                                </div>
                                                                <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                        <span>
                                                                            Careers </span>
                                                                    </h3>
                                                                    <p className="elementor-icon-box-description">
                                                                        Please review our terms of service and privacy notice.
                                                                    </p>
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
                        </div>
                    </section>
                    <section className="elementor-section elementor-top-section elementor-element elementor-element-7557034 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id={7557034} data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d0b3fa0" data-id="d0b3fa0" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-06704c1 elementor-widget elementor-widget-shortcode" data-id="06704c1" data-element_type="widget" data-widget_type="shortcode.default">
                                        <div className="elementor-widget-container">
                                            <div className="elementor-shortcode">
                                                <div className="wpcf7 no-js" id="wpcf7-f481-p473-o1" lang="en-US" dir="ltr">
                                                    <div className="screen-reader-response">
                                                        <p role="status" aria-live="polite" aria-atomic="true" />
                                                        <ul />
                                                    </div>
                                                    <form onSubmit={handleSubmit}>
                                                        <div style={{ display: 'none' }}>
                                                            <input type="hidden" name="_wpcf7" defaultValue={481} />
                                                            <input type="hidden" name="_wpcf7_version" defaultValue="5.8.6" />
                                                            <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                                                            <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f481-p473-o1" />
                                                            <input type="hidden" name="_wpcf7_container_post" defaultValue={473} />
                                                            <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue />
                                                        </div>
                                                        <p><label> Your name<br />
                                                            <span className="wpcf7-form-control-wrap" data-name="your-name"><input size={60} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" autoComplete="name" required aria-required="true" aria-invalid="false" placeholder="Enter your name" type="text" name="name" /></span> </label>
                                                        </p>
                                                        <p><label> Your email<br />
                                                            <span className="wpcf7-form-control-wrap" data-name="your-email"><input size={60} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" autoComplete="email" aria-required="true" required aria-invalid="false" placeholder="Enter your mail" type="email" name="email" /></span> </label>
                                                        </p>
                                                        <p><label> Website's URL<br />
                                                            <span className="wpcf7-form-control-wrap" data-name="your-email"><input size={60} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" autoComplete="email" aria-required="true" required aria-invalid="false" placeholder="Enter your mail" type="text" name="weburl" /></span> </label>
                                                        </p>
                                                        <p><label>Phone<br />
                                                            <span className="wpcf7-form-control-wrap" data-name="your-subject"><input size={60} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" required aria-required="true" aria-invalid="false" placeholder="Enter your phone number" type="text" name="phone" /></span> </label>
                                                        </p>
                                                        <p><label>Your message<br />
                                                            <span className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols={53} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" required name="help" placeholder="Write your message here ..." /></span> </label>
                                                        </p>
                                                        <p><input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" defaultValue="Submit" />
                                                        </p>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3f271d4" data-id="3f271d4" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-49fd2f2 elementor-widget elementor-widget-wdes_world_map" data-id="49fd2f2" data-element_type="widget" data-widget_type="wdes_world_map.default">
                                        <div className="elementor-widget-container">
                                            <div id="wdes-world-map" data-countries="[{&quot;title&quot;:&quot;Paris&quot;,&quot;latitude&quot;:48.8567,&quot;longitude&quot;:2.351},{&quot;title&quot;:&quot;Toronto&quot;,&quot;latitude&quot;:43.8163,&quot;longitude&quot;:-79.4287},{&quot;title&quot;:&quot;Los Angeles&quot;,&quot;latitude&quot;:34.3,&quot;longitude&quot;:-118.15},{&quot;title&quot;:&quot;Havana&quot;,&quot;latitude&quot;:23,&quot;longitude&quot;:-82}]" data-settings="{&quot;areasSettings&quot;:{&quot;unlistedAreasColor&quot;:&quot;#e3e3e3&quot;,&quot;unlistedAreasOutlineColor&quot;:&quot;#fff&quot;},&quot;imagesSettings&quot;:{&quot;color&quot;:&quot;#7868E5&quot;,&quot;rollOverColor&quot;:&quot;#000000&quot;},&quot;movingObject&quot;:{&quot;color&quot;:&quot;#7868E5&quot;,&quot;shadowColor&quot;:&quot;#000000&quot;},&quot;line&quot;:{&quot;linesSettings&quot;:&quot;#7868E5&quot;},&quot;settings&quot;:{&quot;home&quot;:{&quot;zoom&quot;:null,&quot;latitude&quot;:null,&quot;longitude&quot;:null}}}">
                                                <Map/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t.elementor-359 .elementor-element.elementor-element-7d61a6f {\n\t\t\t\tz-index: 1;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997:not(.elementor-motion-effects-element-type-background)>.elementor-widget-wrap,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-widget-wrap>.elementor-motion-effects-container>.elementor-motion-effects-layer {\n\t\t\t\tbackground-color: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated>.elementor-background-overlay,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-background-slideshow {\n\t\t\t\tborder-radius: 43px 43px 43px 43px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated {\n\t\t\t\tbox-shadow: 0px 3px 11.5px 0px rgba(63.99999999999997, 55.00000000000001, 129, 0.22);\n\t\t\t\ttransition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\n\t\t\t\tpadding: 40px 50px 40px 50px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated>.elementor-background-overlay {\n\t\t\t\ttransition: background 0.3s, border-radius 0.3s, opacity 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-primary {\n\t\t\t\tcolor: #FFFFFF;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 31px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #FFFFFF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-secondary {\n\t\t\t\tcolor: #CECCEB;\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tmargin: 10px 0px 15px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-secondary:hover {\n\t\t\t\tcolor: #CECCEB;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button .elementor-align-icon-right {\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button .elementor-align-icon-left {\n\t\t\t\tmargin-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button:hover,\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button:focus {\n\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82>.elementor-widget-container {\n\t\t\t\tmargin: 0px 20px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button .elementor-align-icon-right {\n\t\t\t\tmargin-left: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button .elementor-align-icon-left {\n\t\t\t\tmargin-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tfill: #312D5E;\n\t\t\t\tcolor: #312D5E;\n\t\t\t\tbackground-color: #FFFFFF;\n\t\t\t\tborder-radius: 35px 35px 35px 35px;\n\t\t\t\tpadding: 12px 27px 12px 27px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:hover,\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:focus {\n\t\t\t\tcolor: #FFFFFF;\n\t\t\t\tbackground-color: var(--e-global-color-primary);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:hover svg,\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button:focus svg {\n\t\t\t\tfill: #FFFFFF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936:not(.elementor-motion-effects-element-type-background),\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936>.elementor-motion-effects-container>.elementor-motion-effects-layer {\n\t\t\t\tbackground-color: #F8F7FF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936 {\n\t\t\t\ttransition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\n\t\t\t\tmargin-top: -112px;\n\t\t\t\tmargin-bottom: 0px;\n\t\t\t\tpadding: 162px 0px 30px 0px;\n\t\t\t\tz-index: 0;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936>.elementor-background-overlay {\n\t\t\t\ttransition: background 0.3s, border-radius 0.3s, opacity 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-02df6e0>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-567305b .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-567305b .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-567305b>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-73b82c5 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 {\n\t\t\t\t--grid-template-columns: repeat(0, auto);\n\t\t\t\t--icon-size: 19px;\n\t\t\t\t--grid-column-gap: 16px;\n\t\t\t\t--grid-row-gap: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-widget-container {\n\t\t\t\ttext-align: left;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-social-icon {\n\t\t\t\tbackground-color: #B7303000;\n\t\t\t\t--icon-padding: 0em;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-social-icon i {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1 .elementor-social-icon svg {\n\t\t\t\tfill: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-18ab2d1>.elementor-widget-container {\n\t\t\t\tmargin: 10px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-33fc5af>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-077025f .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-077025f .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-077025f>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-95602d4 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-fce6d84>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-958d057 .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-958d057 .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-958d057>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-3a83c6a .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-395cf70>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-923a225 .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-923a225 .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-923a225>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-a484501 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-681b107>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-94a8ae1 .wdes-section-header-primary {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t\tfont-family: \"Palanquin Dark\", Sans-serif;\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-94a8ae1 .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #1B2E5A;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-94a8ae1>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 5px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(14px/2);\n\t\t\t\tmargin-left: calc(14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-14px/2);\n\t\t\t\tmargin-left: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-14px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-14px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-b6f44a9 .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c:not(.elementor-motion-effects-element-type-background),\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c>.elementor-motion-effects-container>.elementor-motion-effects-layer {\n\t\t\t\tbackground-color: #F8F7FF;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c {\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-width: 1px 0px 0px 0px;\n\t\t\t\tborder-color: #BECEF5;\n\t\t\t\ttransition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\n\t\t\t\tpadding: 30px 0px 30px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-022743c>.elementor-background-overlay {\n\t\t\t\ttransition: background 0.3s, border-radius 0.3s, opacity 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-bc-flex-widget .elementor-359 .elementor-element.elementor-element-431352d.elementor-column .elementor-widget-wrap {\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-431352d.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\talign-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-431352d>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 .wdes-logo_link {\n\t\t\t\tjustify-content: flex-start;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 .wdes-logo_img {\n\t\t\t\theight: 31px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e .wdes-section-header-primary {\n\t\t\t\tcolor: #6F81AC;\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e .wdes-section-header-primary:hover {\n\t\t\t\tcolor: #6F81AC;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e>.elementor-widget-container {\n\t\t\t\tmargin: 0px 0px 0px 30px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-740050e {\n\t\t\t\twidth: auto;\n\t\t\t\tmax-width: auto;\n\t\t\t}\n\n\t\t\t.elementor-bc-flex-widget .elementor-359 .elementor-element.elementor-element-837b62a.elementor-column .elementor-widget-wrap {\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\talign-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a.elementor-column>.elementor-widget-wrap {\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a>.elementor-element-populated {\n\t\t\t\tpadding: 0px 0px 0px 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {\n\t\t\t\tpadding-bottom: calc(34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {\n\t\t\t\tmargin-top: calc(34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {\n\t\t\t\tmargin-right: calc(34px/2);\n\t\t\t\tmargin-left: calc(34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items {\n\t\t\t\tmargin-right: calc(-34px/2);\n\t\t\t\tmargin-left: calc(-34px/2);\n\t\t\t}\n\n\t\t\tbody.rtl .elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tleft: calc(-34px/2);\n\t\t\t}\n\n\t\t\tbody:not(.rtl) .elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {\n\t\t\t\tright: calc(-34px/2);\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-icon i {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-icon svg {\n\t\t\t\ttransition: fill 0.3s;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d {\n\t\t\t\t--e-icon-list-icon-size: 14px;\n\t\t\t\t--icon-vertical-offset: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-icon {\n\t\t\t\tpadding-right: 0px;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-item>.elementor-icon-list-text,\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-item>a {\n\t\t\t\tfont-family: \"Montserrat\", Sans-serif;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-item:hover .elementor-icon-list-text {\n\t\t\t\tcolor: #7868E5;\n\t\t\t}\n\n\t\t\t.elementor-359 .elementor-element.elementor-element-148101d .elementor-icon-list-text {\n\t\t\t\ttransition: color 0.3s;\n\t\t\t}\n\n\t\t\t@media(max-width:1024px) and (min-width:768px) {\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-431352d {\n\t\t\t\t\twidth: 70%;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-837b62a {\n\t\t\t\t\twidth: 30%;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media(max-width:1024px) {\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b3fc936 {\n\t\t\t\t\tpadding: 162px 15px 30px 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-022743c {\n\t\t\t\t\tpadding: 30px 15px 30px 15px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media(max-width:767px) {\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-7d61a6f {\n\t\t\t\t\tpadding: 0px 15px 0px 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-bc-flex-widget .elementor-359 .elementor-element.elementor-element-b2f0997.elementor-column .elementor-widget-wrap {\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997.elementor-column.elementor-element[data-element_type=\"column\"]>.elementor-widget-wrap.elementor-element-populated {\n\t\t\t\t\talign-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-b2f0997>.elementor-element-populated {\n\t\t\t\t\tpadding: 30px 10px 30px 10px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-widget-inner {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-primary {\n\t\t\t\t\tfont-size: 26px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-55cc72a .wdes-section-header-secondary {\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82 .elementor-button {\n\t\t\t\t\tpadding: 12px 20px 12px 20px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-6fbbd82>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 5px 0px 5px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade .elementor-button {\n\t\t\t\t\tpadding: 12px 20px 12px 20px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-c94aade>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 5px 0px 5px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-33fc5af>.elementor-element-populated {\n\t\t\t\t\tmargin: 30px 0px 30px 0px;\n\t\t\t\t\t--e-column-margin-right: 0px;\n\t\t\t\t\t--e-column-margin-left: 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-395cf70>.elementor-element-populated {\n\t\t\t\t\tmargin: 30px 0px 30px 0px;\n\t\t\t\t\t--e-column-margin-right: 0px;\n\t\t\t\t\t--e-column-margin-left: 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-431352d.elementor-column>.elementor-widget-wrap {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 .wdes-logo_link {\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-d404407>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 0px 20px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-d404407 {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\talign-self: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-740050e .wdes-widget-inner {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-740050e>.elementor-widget-container {\n\t\t\t\t\tmargin: 0px 0px 0px 0px;\n\t\t\t\t}\n\n\t\t\t\t.elementor-359 .elementor-element.elementor-element-148101d>.elementor-widget-container {\n\t\t\t\t\tmargin: 10px 0px 0px 0px;\n\t\t\t\t}\n\t\t\t}\n\t\t" }} />
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
                                                <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
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
                                            <link rel="stylesheet" href="../wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
                                            <ul className="elementor-icon-list-items">
                                                <li className="elementor-icon-list-item">
                                                    <span className="elementor-icon-list-text">4021 Maryland Avenue</span>
                                                </li>
                                                <li className="elementor-icon-list-item">
                                                    <a href="https://phox.whmcsdes.com/cdn-cgi/l/email-protection#fc95929a93bc8f958899d29f9391">
                                                        <span className="elementor-icon-list-text"><span className="__cf_email__" data-cfemail="caa3a4aca58ab9a3beafe4a9a5a7">[email&nbsp;protected]</span></span>
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
                                            <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.18.0 - 20-12-2023 */\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container {\n\t\t\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\t\t\tfont-size: 0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid {\n\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-grid\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-widget-social-icons .elementor-grid {\n\t\t\t\t\t\t\t\t\t\t\tgrid-column-gap: var(--grid-column-gap, 5px);\n\t\t\t\t\t\t\t\t\t\t\tgrid-row-gap: var(--grid-row-gap, 5px);\n\t\t\t\t\t\t\t\t\t\t\tgrid-template-columns: var(--grid-template-columns);\n\t\t\t\t\t\t\t\t\t\t\tjustify-content: var(--justify-content, center);\n\t\t\t\t\t\t\t\t\t\t\tjustify-items: var(--justify-content, center)\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\tfont-size: var(--icon-size, 25px);\n\t\t\t\t\t\t\t\t\t\t\tline-height: var(--icon-size, 25px);\n\t\t\t\t\t\t\t\t\t\t\twidth: calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em));\n\t\t\t\t\t\t\t\t\t\t\theight: calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em))\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\t--e-social-icon-icon-color: #fff;\n\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\tcursor: pointer\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon i {\n\t\t\t\t\t\t\t\t\t\t\tcolor: var(--e-social-icon-icon-color)\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon svg {\n\t\t\t\t\t\t\t\t\t\t\tfill: var(--e-social-icon-icon-color)\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon:last-child {\n\t\t\t\t\t\t\t\t\t\t\tmargin: 0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon:hover {\n\t\t\t\t\t\t\t\t\t\t\topacity: .9;\n\t\t\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-android {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #a4c639\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-apple {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #999\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-behance {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1769ff\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-bitbucket {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #205081\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-codepen {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #000\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-delicious {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #39f\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-deviantart {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #05cc47\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-digg {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #005be2\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-dribbble {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ea4c89\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-elementor {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #d30c5c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-envelope {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ea4335\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-facebook,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-facebook-f {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #3b5998\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-flickr {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0063dc\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-foursquare {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #2d5be3\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-free-code-camp,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-freecodecamp {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #006400\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-github {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #333\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-gitlab {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #e24329\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-globe {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-google-plus,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-google-plus-g {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #dd4b39\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-houzz {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #7ac142\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-instagram {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #262626\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-jsfiddle {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #487aa2\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-link {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #818a91\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-linkedin,\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-linkedin-in {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0077b5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-medium {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #00ab6b\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-meetup {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ec1c40\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-mixcloud {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #273a4b\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-odnoklassniki {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f4731c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-pinterest {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #bd081c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-product-hunt {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #da552f\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-reddit {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #ff4500\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-rss {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f26522\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-shopping-cart {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #4caf50\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-skype {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #00aff0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-slideshare {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0077b5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-snapchat {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #fffc00\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-soundcloud {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f80\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-spotify {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #2ebd59\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-stack-overflow {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #fe7a15\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-steam {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #00adee\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-stumbleupon {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #eb4924\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-telegram {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #2ca5e0\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-thumb-tack {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1aa1d8\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-tripadvisor {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #589442\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-tumblr {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #35465c\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-twitch {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #6441a5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-twitter {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1da1f2\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-viber {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #665cac\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-vimeo {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #1ab7ea\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-vk {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #45668e\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-weibo {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #dd2430\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-weixin {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #31a918\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-whatsapp {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #25d366\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-wordpress {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #21759b\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-xing {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #026466\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-yelp {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #af0606\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-youtube {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #cd201f\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-social-icon-500px {\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #0099e5\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-shape-rounded .elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\tborder-radius: 10%\n\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t.elementor-shape-circle .elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t" }} />
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
                                            <div className="wdes-logo wdes-logo-type-image wdes-logo-display-inline"><a href="https://phox.whmcsdes.com/demos/classy-pro" className="wdes-logo_link"><img className="wdes-logo_img elementor-animation-none" src="../wp-content/uploads/sites/21/2023/04/phox-logo.png" width={200} height={200} alt="Phox - Classy Pro" srcSet="https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/phox-logo.png 1x,https://phox.whmcsdes.com/demos/classy-pro/wp-content/uploads/sites/21/2023/04/phox-logo.png 2x" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-740050e elementor-widget__width-auto elementor-widget elementor-widget-wdes-section-header-widget" data-id="740050e" data-element_type="widget" data-widget_type="wdes-section-header-widget.default">
                                        <div className="elementor-widget-container">
                                            <section className="widget-content wdes-widget-section-header">
                                                <div className="wdes-widget-inner  ">
                                                    <h1 className="wdes-section-header-primary">© 2016-2023 Phox inc. all rights
                                                        reserved.</h1>
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
            <link rel="stylesheet" id="elementor-post-13-css" href="../wp-content/uploads/sites/21/elementor/css/post-13.css" type="text/css" media="all" />
            <link rel="stylesheet" id="elementor-post-359-css" href="../wp-content/uploads/sites/21/elementor/css/post-359.css" type="text/css" media="all" />
            <link rel="stylesheet" id="elementor-icons-fa-brands-css" href="../wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css" type="text/css" media="all" />
            <link rel="stylesheet" id="e-animations-css" href="../wp-content/plugins/elementor/assets/lib/animations/animations.min.css" type="text/css" media="all" />
            <link rel="stylesheet" id="rs-plugin-settings-css" href="../wp-content/plugins/revslider/public/assets/css/rs6.css" type="text/css" media="all" />
            <style id="rs-plugin-settings-inline-css" type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t\t#rs-demo-id {}\n\t" }} />
            {/* script | custom js */}
        </div>
    );
}

export default Contact