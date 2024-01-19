import React from "react";
import "./Style.css";
import Container from "./Container";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../Commons/Header";

function Search(page) {
    const { name } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        // e.preventDefault();
        // Redirect to the result page with the search query as a slug
        navigate(`/${page}/${searchQuery}`);
    };

    return (
        <>
            <Header page={"images"} />

            <div id="b_SearchBoxAnswer" />
            <div id="b_content" style={{ marginLeft: "-140px" }}>
                <div id="miniheader" className="anim blue2" role="navigation">
                    <div className="mh-content">
                        
                    </div>
                </div>
                <div id="imgflyouts" data-priority={2}>
                    <a
                        id="imgflyouts_sbtn"
                        className="scrtopBtn"
                        href="javascript:void(0)"
                        h="ID=images,6156.1"
                    >
                        <div
                            className="rms_iac"
                            style={{ height: 16, lineHeight: 16, width: 16 }}
                            data-width={16}
                            data-height={16}
                            data-class="rms_img"
                            data-src="https://www.bing.com/rp/-A5v-hTPFRzEXEMXLO7124F8nt0.svg"
                        />
                    </a>
                    <div id="gif_mnflyout" className="mnflyout">
                        <div className="mnfb">
                            <div className="mntit">Autoplay all GIFs</div>
                            <div className="mntxt">
                                Change autoplay and other image settings here
                            </div>
                        </div>
                    </div>
                    <div id="gif_hvflyout" className="hvflyout" data-priority={2}>
                        <a
                            id="gif_hvflyoutCls"
                            aria-label="Close dialog"
                            className="clsbtn"
                            href="javascript:void(0)"
                            h="ID=images,6159.1"
                        >
                            <div
                                className="rms_iac"
                                style={{ height: 16, lineHeight: 16, width: 16 }}
                                data-width={16}
                                data-height={16}
                                data-alt="Close dialog"
                                data-class="rms_img"
                                data-src="https://www.bing.com/rp/Q5BJPjebyYN5QiqznkcMQmLrF9U.svg"
                            />
                        </a>
                        <div className="mntit">Autoplay all GIFs</div>
                        <div className="mntxt">Flip the switch to turn them on</div>
                        <div
                            className="toggle_item"
                            id="imgflyout_gifToggle"
                            role="button"
                            aria-pressed="false"
                            aria-disabled="false"
                            tabIndex={0}
                            data-appns="images"
                            data-k={6157.0}
                        >
                            <div
                                className="imgflyout_label toggle_label "
                                id="imgflyout_gifToggle_label"
                            >
                                Autoplay GIFs
                            </div>
                            <div className=" toggle_ctrl">
                                <div
                                    id="imgflyout_gifToggle_ctrl"
                                    className="imgflyout_img    toggle_img"
                                >
                                    <img
                                        role="presentation"
                                        className="rms_img"
                                        src="../rp/kFAqShRrnkQMbH6NYLBYoJ3lq9s.png"
                                    />
                                </div>
                            </div>
                            <a
                                className="toggle_hidden"
                                id="imgflyout_gifToggle_on"
                                href="javascript:void(0)"
                                h="ID=images,6157.1"
                            />
                            <a
                                className="toggle_hidden"
                                id="imgflyout_gifToggle_off"
                                href="javascript:void(0)"
                                h="ID=images,6158.1"
                            />
                        </div>
                    </div>
                </div>
                <iframe id="historyFrame" style={{ display: "none" }} />
                <div id="ftr_pane" data-persistfbar={1} tabIndex={-1}>
                    <div id="ftrB" role="navigation" aria-label="Search results filters">
                        <ul className="ftrUl">
                            <li className="ftrLi ">
                                <span
                                    className="ftrH_MmVert ftrHL"
                                    tabIndex={0}
                                    title="Image size filter"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="ftrTB ftrP11">
                                        Image size
                                        <span className="sw_ddbk ddbkl" />
                                    </span>
                                </span>
                                <div className="ftrDC hidden">
                                    <div className="ftrD_MmVert">
                                        <a
                                            title="All"
                                            href="searchcf7c.html?&q=narendra+modi&qft=&FORM=IRFLTR"
                                            h="ID=images,5867.1"
                                        >
                                            <span className="ftrP12">All</span>
                                        </a>
                                        <a
                                            title="Small"
                                            aria-selected="false"
                                            href="search1ee5.html?&q=narendra+modi&qft=+filterui:imagesize-small&FORM=IRFLTR"
                                            h="ID=images,5868.1"
                                        >
                                            <span className="ftrP12">Small</span>
                                        </a>
                                        <a
                                            title="Medium"
                                            aria-selected="false"
                                            href="searchffd5.html?&q=narendra+modi&qft=+filterui:imagesize-medium&FORM=IRFLTR"
                                            h="ID=images,5869.1"
                                        >
                                            <span className="ftrP12">Medium</span>
                                        </a>
                                        <a
                                            title="Large"
                                            aria-selected="false"
                                            href="search53de.html?&q=narendra+modi&qft=+filterui:imagesize-large&FORM=IRFLTR"
                                            h="ID=images,5870.1"
                                        >
                                            <span className="ftrP12">Large</span>
                                        </a>
                                        <a
                                            title="Extra large"
                                            aria-selected="false"
                                            href="search187b.html?&q=narendra+modi&qft=+filterui:imagesize-wallpaper&FORM=IRFLTR"
                                            h="ID=images,5871.1"
                                        >
                                            <span className="ftrP12">Extra large</span>
                                        </a>
                                        <div id="cust-container" className="ftrCustContainer">
                                            <span className="frtCustLbl ftrP12">At least... *</span>
                                            <label className="ftrlab" htmlFor="cust_width">
                                                Customized Width
                                            </label>
                                            <input
                                                id="cust_width"
                                                className="ftrCustTextBox width"
                                                type="text"
                                                autofocus="autofocus"
                                                placeholder="Customized Width"
                                                autoComplete="off"
                                                size={17}
                                                aria-required="true"
                                            />
                                            <span className="ftrP12">x</span>
                                            <label className="ftrlab" htmlFor="cust_height">
                                                Customized Height
                                            </label>
                                            <input
                                                id="cust_height"
                                                className="ftrCustTextBox height"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Customized Height"
                                                size={17}
                                                aria-required="true"
                                            />
                                            <span className="ftrP12">px</span>
                                            <a
                                                id="custftrlink"
                                                tabIndex={-1}
                                                href="searchb63d.html?&q=narendra+modi&qft=+filterui:imagesize-custom_0_0&FORM=IRFLTR"
                                                h="ID=images,5872.1"
                                            >
                                                <input
                                                    id="cust_ok"
                                                    className="fltCustButton"
                                                    type="button"
                                                    defaultValue="OK"
                                                />
                                            </a>
                                        </div>
                                        <div
                                            id="cust_size_msg"
                                            className="ftrCustMsg"
                                            tabIndex={0}
                                            role="alert"
                                            aria-labelledby="cust_sizeerr_msg"
                                        >
                                            <span id="cust_sizeerr_msg">
                                                Please enter a number for Width and Height
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="ftrLi ">
                                <span
                                    className="ftrH_MmVert ftrHL"
                                    tabIndex={0}
                                    title="Color filter"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="ftrTB ftrP11">
                                        Color
                                        <span className="sw_ddbk ddbkl" />
                                    </span>
                                </span>
                                <div className="ftrDC hidden">
                                    <div className="ftrD_MmVert">
                                        <a
                                            title="All"
                                            href="searchcf7c.html?&q=narendra+modi&qft=&FORM=IRFLTR"
                                            h="ID=images,5873.1"
                                        >
                                            <span className="ftrP12">All</span>
                                        </a>
                                        <a
                                            title="Color only"
                                            aria-selected="false"
                                            href="searcheccf.html?&q=narendra+modi&qft=+filterui:color2-color&FORM=IRFLTR"
                                            h="ID=images,5874.1"
                                        >
                                            <span className="ftrP12">Color only</span>
                                        </a>
                                        <a
                                            title="Black & white"
                                            aria-selected="false"
                                            href="searcha58a.html?&q=narendra+modi&qft=+filterui:color2-bw&FORM=IRFLTR"
                                            h="ID=images,5875.1"
                                        >
                                            <span className="ftrP12">Black &amp; white</span>
                                        </a>
                                        <div className="ftrCP">
                                            <div className="ftrCPS" title="Red">
                                                <a
                                                    title="Red"
                                                    aria-selected="false"
                                                    href="searcheb10.html?&q=narendra+modi&qft=+filterui:color2-FGcls_RED&FORM=IRFLTR"
                                                    h="ID=images,5877.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#f33" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Orange">
                                                <a
                                                    title="Orange"
                                                    aria-selected="false"
                                                    href="searchb2e1.html?&q=narendra+modi&qft=+filterui:color2-FGcls_ORANGE&FORM=IRFLTR"
                                                    h="ID=images,5878.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#f93" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Yellow">
                                                <a
                                                    title="Yellow"
                                                    aria-selected="false"
                                                    href="search6d0c.html?&q=narendra+modi&qft=+filterui:color2-FGcls_YELLOW&FORM=IRFLTR"
                                                    h="ID=images,5879.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#ff0" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Green">
                                                <a
                                                    title="Green"
                                                    aria-selected="false"
                                                    href="searchd07a.html?&q=narendra+modi&qft=+filterui:color2-FGcls_GREEN&FORM=IRFLTR"
                                                    h="ID=images,5880.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#3c3" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Teal">
                                                <a
                                                    title="Teal"
                                                    aria-selected="false"
                                                    href="search8544.html?&q=narendra+modi&qft=+filterui:color2-FGcls_TEAL&FORM=IRFLTR"
                                                    h="ID=images,5881.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#088" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Blue">
                                                <a
                                                    title="Blue"
                                                    aria-selected="false"
                                                    href="searchfc26?&q=narendra+modi&qft=+filterui:color2-FGcls_BLUE&FORM=IRFLTR"
                                                    h="ID=images,5882.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#33c" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Purple">
                                                <a
                                                    title="Purple"
                                                    aria-selected="false"
                                                    href="searchf9e9.html?&q=narendra+modi&qft=+filterui:color2-FGcls_PURPLE&FORM=IRFLTR"
                                                    h="ID=images,5883.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#939" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Pink">
                                                <a
                                                    title="Pink"
                                                    aria-selected="false"
                                                    href="search8a0a.html?&q=narendra+modi&qft=+filterui:color2-FGcls_PINK&FORM=IRFLTR"
                                                    h="ID=images,5884.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#f9c" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Brown">
                                                <a
                                                    title="Brown"
                                                    aria-selected="false"
                                                    href="search07a0.html?&q=narendra+modi&qft=+filterui:color2-FGcls_BROWN&FORM=IRFLTR"
                                                    h="ID=images,5885.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#963" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Black">
                                                <a
                                                    title="Black"
                                                    aria-selected="false"
                                                    href="searchcbde.html?&q=narendra+modi&qft=+filterui:color2-FGcls_BLACK&FORM=IRFLTR"
                                                    h="ID=images,5886.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#000" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="Gray">
                                                <a
                                                    title="Gray"
                                                    aria-selected="false"
                                                    href="search9122.html?&q=narendra+modi&qft=+filterui:color2-FGcls_GRAY&FORM=IRFLTR"
                                                    h="ID=images,5887.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#ccc" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="ftrCPS" title="White">
                                                <a
                                                    title="White"
                                                    aria-selected="false"
                                                    href="search9a68.html?&q=narendra+modi&qft=+filterui:color2-FGcls_WHITE&FORM=IRFLTR"
                                                    h="ID=images,5888.1"
                                                >
                                                    <div className="ftrCPo">
                                                        <div
                                                            className="ftrCPi"
                                                            style={{ background: "#fff" }}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="ftrLi ">
                                <span
                                    className="ftrH_MmVert ftrHL"
                                    tabIndex={0}
                                    title="Type filter"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="ftrTB ftrP11">
                                        Type
                                        <span className="sw_ddbk ddbkl" />
                                    </span>
                                </span>
                                <div className="ftrDC hidden">
                                    <div className="ftrD_MmVert">
                                        <a
                                            title="All"
                                            href="searchcf7c.html?&q=narendra+modi&qft=&FORM=IRFLTR"
                                            h="ID=images,5889.1"
                                        >
                                            <span className="ftrP12">All</span>
                                        </a>
                                        <a
                                            title="Photograph"
                                            aria-selected="false"
                                            href="searchfcf4.html?&q=narendra+modi&qft=+filterui:photo-photo&FORM=IRFLTR"
                                            h="ID=images,5890.1"
                                        >
                                            <span className="ftrP12">Photograph</span>
                                        </a>
                                        <a
                                            title="Clipart"
                                            aria-selected="false"
                                            href="search95b7.html?&q=narendra+modi&qft=+filterui:photo-clipart&FORM=IRFLTR"
                                            h="ID=images,5891.1"
                                        >
                                            <span className="ftrP12">Clipart</span>
                                        </a>
                                        <a
                                            title="Line drawing"
                                            aria-selected="false"
                                            href="searchd73d.html?&q=narendra+modi&qft=+filterui:photo-linedrawing&FORM=IRFLTR"
                                            h="ID=images,5892.1"
                                        >
                                            <span className="ftrP12">Line drawing</span>
                                        </a>
                                        <a
                                            title="Animated GIF"
                                            aria-selected="false"
                                            href="searchdc98.html?&q=narendra+modi&qft=+filterui:photo-animatedgif&FORM=IRFLTR"
                                            h="ID=images,5893.1"
                                        >
                                            <span className="ftrP12">Animated GIF</span>
                                        </a>
                                        <a
                                            title="Transparent"
                                            aria-selected="false"
                                            href="searchf271.html?&q=narendra+modi&qft=+filterui:photo-transparent&FORM=IRFLTR"
                                            h="ID=images,5894.1"
                                        >
                                            <span className="ftrP12">Transparent</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="ftrLi ">
                                <span
                                    className="ftrH_MmVert ftrHL"
                                    tabIndex={0}
                                    title="Layout filter"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="ftrTB ftrP11">
                                        Layout
                                        <span className="sw_ddbk ddbkl" />
                                    </span>
                                </span>
                                <div className="ftrDC hidden">
                                    <div className="ftrD_MmVert">
                                        <a
                                            title="All"
                                            href="searchcf7c.html?&q=narendra+modi&qft=&FORM=IRFLTR"
                                            h="ID=images,5895.1"
                                        >
                                            <span className="ftrP12">All</span>
                                        </a>
                                        <a
                                            title="Square"
                                            aria-selected="false"
                                            href="search38c4.html?&q=narendra+modi&qft=+filterui:aspect-square&FORM=IRFLTR"
                                            h="ID=images,5896.1"
                                        >
                                            <span className="ftrP12">Square</span>
                                        </a>
                                        <a
                                            title="Wide"
                                            aria-selected="false"
                                            href="searchef03.html?&q=narendra+modi&qft=+filterui:aspect-wide&FORM=IRFLTR"
                                            h="ID=images,5897.1"
                                        >
                                            <span className="ftrP12">Wide</span>
                                        </a>
                                        <a
                                            title="Tall"
                                            aria-selected="false"
                                            href="searchc3f0.html?&q=narendra+modi&qft=+filterui:aspect-tall&FORM=IRFLTR"
                                            h="ID=images,5898.1"
                                        >
                                            <span className="ftrP12">Tall</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="ftrLi ">
                                <span
                                    className="ftrH_MmVert ftrHL"
                                    tabIndex={0}
                                    title="People filter"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="ftrTB ftrP11">
                                        People
                                        <span className="sw_ddbk ddbkl" />
                                    </span>
                                </span>
                                <div className="ftrDC hidden">
                                    <div className="ftrD_MmVert">
                                        <a
                                            title="All"
                                            href="searchcf7c.html?&q=narendra+modi&qft=&FORM=IRFLTR"
                                            h="ID=images,5899.1"
                                        >
                                            <span className="ftrP12">All</span>
                                        </a>
                                        <a
                                            title="Just faces"
                                            aria-selected="false"
                                            href="search23da.html?&q=narendra+modi&qft=+filterui:face-face&FORM=IRFLTR"
                                            h="ID=images,5900.1"
                                        >
                                            <span className="ftrP12">Just faces</span>
                                        </a>
                                        <a
                                            title="Head & shoulders"
                                            aria-selected="false"
                                            href="search6e27.html?&q=narendra+modi&qft=+filterui:face-portrait&FORM=IRFLTR"
                                            h="ID=images,5901.1"
                                        >
                                            <span className="ftrP12">Head &amp; shoulders</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="ftrLi ">
                                <span
                                    className="ftrH_MmVert ftrHL"
                                    tabIndex={0}
                                    title="Date filter"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="ftrTB ftrP11">
                                        Date
                                        <span className="sw_ddbk ddbkl" />
                                    </span>
                                </span>
                                <div className="ftrDC hidden">
                                    <div className="ftrD_MmVert">
                                        <a
                                            title="All"
                                            href="searchcf7c.html?&q=narendra+modi&qft=&FORM=IRFLTR"
                                            h="ID=images,5902.1"
                                        >
                                            <span className="ftrP12">All</span>
                                        </a>
                                        <a
                                            title="Past 24 hours"
                                            aria-selected="false"
                                            href="searchc93e.html?&q=narendra+modi&qft=+filterui:age-lt1440&FORM=IRFLTR"
                                            h="ID=images,5903.1"
                                        >
                                            <span className="ftrP12">Past 24 hours</span>
                                        </a>
                                        <a
                                            title="Past week"
                                            aria-selected="false"
                                            href="search33c5.html?&q=narendra+modi&qft=+filterui:age-lt10080&FORM=IRFLTR"
                                            h="ID=images,5904.1"
                                        >
                                            <span className="ftrP12">Past week</span>
                                        </a>
                                        <a
                                            title="Past month"
                                            aria-selected="false"
                                            href="search1f81.html?&q=narendra+modi&qft=+filterui:age-lt43200&FORM=IRFLTR"
                                            h="ID=images,5905.1"
                                        >
                                            <span className="ftrP12">Past month</span>
                                        </a>
                                        <a
                                            title="Past year"
                                            aria-selected="false"
                                            href="search0f98.html?&q=narendra+modi&qft=+filterui:age-lt525600&FORM=IRFLTR"
                                            h="ID=images,5906.1"
                                        >
                                            <span className="ftrP12">Past year</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="ftrLi ">
                                <span
                                    className="ftrH_MmVert ftrHL"
                                    tabIndex={0}
                                    title="License filter"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="ftrTB ftrP11">
                                        License
                                        <span className="sw_ddbk ddbkl" />
                                    </span>
                                </span>
                                <div className="ftrDC hidden">
                                    <div className="ftrD_MmVert">
                                        <a
                                            title="All"
                                            href="searchcf7c.html?&q=narendra+modi&qft=&FORM=IRFLTR"
                                            h="ID=images,5907.1"
                                        >
                                            <span className="ftrP12">All</span>
                                        </a>
                                        <a
                                            title="All Creative Commons"
                                            aria-selected="false"
                                            href="search6993.html?&q=narendra+modi&qft=+filterui:licenseType-Any&FORM=IRFLTR"
                                            h="ID=images,5908.1"
                                        >
                                            <span className="ftrP12">All Creative Commons</span>
                                        </a>
                                        <a
                                            title="Public domain"
                                            aria-selected="false"
                                            href="search2429.html?&q=narendra+modi&qft=+filterui:license-L1&FORM=IRFLTR"
                                            h="ID=images,5909.1"
                                        >
                                            <span className="ftrP12">Public domain</span>
                                        </a>
                                        <a
                                            title="Free to share and use"
                                            aria-selected="false"
                                            href="search37c0.html?&q=narendra+modi&qft=+filterui:license-L2_L3_L4_L5_L6_L7&FORM=IRFLTR"
                                            h="ID=images,5910.1"
                                        >
                                            <span className="ftrP12">Free to share and use</span>
                                        </a>
                                        <a
                                            title="Free to share and use commercially"
                                            aria-selected="false"
                                            href="searche4f8.html?&q=narendra+modi&qft=+filterui:license-L2_L3_L4&FORM=IRFLTR"
                                            h="ID=images,5911.1"
                                        >
                                            <span className="ftrP12">
                                                Free to share and use commercially
                                            </span>
                                        </a>
                                        <a
                                            title="Free to modify, share, and use"
                                            aria-selected="false"
                                            href="search506f.html?&q=narendra+modi&qft=+filterui:license-L2_L3_L5_L6&FORM=IRFLTR"
                                            h="ID=images,5912.1"
                                        >
                                            <span className="ftrP12">Free to modify, share, and use</span>
                                        </a>
                                        <a
                                            title="Free to modify, share, and use commercially"
                                            aria-selected="false"
                                            href="search6b14.html?&q=narendra+modi&qft=+filterui:license-L2_L3&FORM=IRFLTR"
                                            h="ID=images,5913.1"
                                        >
                                            <span className="ftrP12">
                                                Free to modify, share, and use commercially
                                            </span>
                                        </a>
                                        <a
                                            title="Learn more"
                                            className="ftr_mi"
                                            target="_blank"
                                            href="http://go.microsoft.com/fwlink/?LinkId=309768"
                                            h="ID=images,5864.1"
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="ftrLi ">
                                <a
                                    title="Clear and close filters"
                                    aria-label="Clear and close filters"
                                    className="ftrClr "
                                    href="search8813.html?&q=narendra+modi&qft="
                                    h="ID=images,5865.1"
                                >
                                    Clear filters
                                </a>
                            </li>
                        </ul>
                        <span id="fltIdtCon">
                            <span className="ftrBRF ">
                                <ul className="ftrUl">
                                    <li className="ftrLi ">
                                        <span className="ftrSSL ftrP12" id="ftr_ss_l">
                                            SafeSearch:
                                        </span>
                                    </li>
                                    <li className="ftrLi ">
                                        <span
                                            className="ftrH_MmVert ftrHL"
                                            id="ftr_ss_hl"
                                            tabIndex={0}
                                            role="button"
                                            aria-controls="ftr_ss_d"
                                            aria-expanded="false"
                                            aria-labelledby="ftr_ss_hl ftr_ss_l"
                                        >
                                            <span className="ftrTB ftrP11">
                                                Moderate
                                                <span className="sw_ddbk ddbkl" />
                                            </span>
                                        </span>
                                        <div className="ftrDC hidden" id="ftr_ss_d">
                                            <div className="ftrD_MmVert">
                                                <a
                                                    id="ss-strict"
                                                    title="Selecting Strict will save your selection and refresh the page"
                                                    href="#"
                                                    h="ID=images,5028.1"
                                                >
                                                    Strict
                                                </a>
                                                <span className="ftrSe">Moderate (default)</span>
                                                <a
                                                    id="ss-off"
                                                    title="Selecting Off will save your selection and refresh the page"
                                                    href="#"
                                                    h="ID=images,5030.1"
                                                >
                                                    Off
                                                </a>
                                                <input
                                                    id="GUID"
                                                    type="hidden"
                                                    defaultValue="0BA76975C4456EAF023F7B9AC5BD6FFD"
                                                />
                                                <input
                                                    id="ru"
                                                    type="hidden"
                                                    defaultValue="/images/search?q=narendra+modi&form=HDRSC4&first=1"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </span>
                            <span id="fltIdt">
                                <span
                                    tabIndex={0}
                                    id="fltIdtLnk"
                                    title="Show or hide filters"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span id="fltIdtTit" className="fltIdtTit">
                                        Filter
                                    </span>
                                    <div
                                        className="rms_iac"
                                        style={{ height: 14, lineHeight: 14, width: 16 }}
                                        data-alt="Filter"
                                        data-class="fltIco rms_img"
                                        data-height={14}
                                        data-width={16}
                                        data-aria-hidden="true"
                                        data-src="https://www.bing.com/rp/5yVAKe18OXFf_XvuMPJO61GQVsc.svg"
                                    />
                                    <div
                                        className="rms_iac"
                                        style={{ height: 14, lineHeight: 14, width: 16 }}
                                        data-alt="Filter"
                                        data-class="fltFillIco rms_img"
                                        data-height={14}
                                        data-width={16}
                                        data-aria-hidden="true"
                                        data-src="https://www.bing.com/rp/bSmUb4SdiINJy0O6_CJPQxImT6o.svg"
                                    />
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <div id="rfPane" className="rfvalid">
                    <div id="rfPaneIn">
                        <div className="touchQuery" aria-label="Suggested searches">
                            <div id="rfCarousel" className="carousel b_canvas" data-feedbk-id="">
                                <div
                                    className="carousel-controls lightcar "
                                    role="region"
                                    aria-label="Carousel"
                                >
                                    <a
                                        title="Navigate left"
                                        tabIndex={0}
                                        className="nav_container nav_left dis"
                                        role="button"
                                        aria-label="Scroll left"
                                        href="javascript:void(0)"
                                        h="ID=images,5862.1"
                                    >
                                        <div />
                                    </a>
                                    <div className="carousel-content">
                                        <div className="carousel-scroll-wrapper">
                                            <div
                                                className="carousel-scroll-content"
                                                data-appns="images"
                                                data-k="6172.1"
                                            >
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        title="Navigate right"
                                        tabIndex={0}
                                        className="nav_container nav_right dis"
                                        role="button"
                                        aria-label="Scroll right"
                                        href="javascript:void(0)"
                                        h="ID=images,5863.1"
                                    >
                                        <div />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pole" />
                <div id="vm_c">
                    <div id="dg_nr" />
                    {/* handle with actions */}
                    <div
                        id="hoverpane"
                        data-priority={2}
                        data-instdelay={2000}
                        data-hovortchdelay={5}
                    >
                        <div className="hvpncon">
                            <ul id="deflst" />
                        </div>
                    </div>
                    <div id="svhvr">
                        <div tabIndex={0} />
                        <div id="svhvrsub">
                            <div
                                id="svctrl"
                                aria-label="Save Control"
                                data-priority={2}
                                data-dly={1000}
                                data-sfmc="SVUNK2"
                                data-pbv1=""
                                data-isprom=""
                                data-bclist=""
                                data-kctad=""
                                data-svicnclkb="OpenSaveRemove"
                            >
                                <div
                                    id="svctrlbtn"
                                    className="sclnk"
                                    role="button"
                                    aria-label="Save Button"
                                    tabIndex={-1}
                                >
                                    <div id="svctrlusvd" className="scicn onusvd">
                                        <div
                                            className="rms_iac"
                                            style={{ height: 37, lineHeight: 37, width: 37 }}
                                            data-width={37}
                                            data-height={37}
                                            data-role="presentation"
                                            data-class="rms_img"
                                            data-src="https://www.bing.com/rp/zYRmeqAEd4Z0yDRz8nuL0syHMEI.svg"
                                        />
                                    </div>
                                    <div id="svctrlsvd" className="scicn onsvd">
                                        <div
                                            className="rms_iac"
                                            style={{ height: 37, lineHeight: 37, width: 37 }}
                                            data-width={37}
                                            data-height={37}
                                            data-role="presentation"
                                            data-class="rms_img"
                                            data-src="https://www.bing.com/rp/HLR5wR-IyRW5pFIFVV3YqNCED0Q.svg"
                                        />
                                    </div>
                                </div>
                                <div
                                    id="svflytc"
                                    data-svlne=""
                                    data-save-error-map='{"1":"We were unable to save this item.  Please check your connection and try again.","2":"We were unable to remove this item.  Please check your connection and try again.","3":"An intermittent error occurred. Please try again.","4":"We were unable to save this item.  Please check your connection and try again.","5":"You are signed in with a different account on Bing.","6":"An intermittent error occurred. Please try again."}'
                                    data-inline-crtcoll={1}
                                    data-ebc=""
                                    data-htc=""
                                    data-kctnmmap='{"ImageDefault":"Saved Images","VideoWatchLater":"Watch Later","RecipeDefault":"Recipes","Products":"Saved products","WebResults":"Web"}'
                                >
                                    <div id="svctrlnewbtn" className="scflyt">
                                        <div id="svctrlnewstart" className="sclnk" role="button">
                                            <div
                                                className="rms_iac"
                                                style={{ height: 12, lineHeight: 12, width: 12 }}
                                                data-id="svctrlnewplus"
                                                data-role="presentation"
                                                data-width={12}
                                                data-height={12}
                                                data-class="rms_img"
                                                data-src="https://www.bing.com/rp/z7pWos7Y3kyke569sNYwm89fv94.svg"
                                            />
                                            <span>Create new collection</span>
                                        </div>
                                    </div>
                                    <div id="svctrlnewform" className="scflyt">
                                        <p id="svctrlnewformhdr">Create new collection</p>
                                        <input
                                            id="svctrlnewformname"
                                            type="text"
                                            placeholder="Enter collection name"
                                            autoComplete="off"
                                        />
                                        <div id="svctrlnewformerrdup" className="b_scerr">
                                            <span>This collection already exists.</span>
                                        </div>
                                        <div id="svctrlnewformpanel" className="svpnl">
                                            <div
                                                role="button"
                                                id="svctrlnewformback"
                                                className="scbtn"
                                                tabIndex={0}
                                                aria-label="Back"
                                            >
                                                <span className="scbtntxt">Back</span>
                                            </div>
                                            <div
                                                role="button"
                                                id="svctrlnewformcreate"
                                                className="scbtn"
                                                aria-disabled="true"
                                                tabIndex={0}
                                                aria-label="Create"
                                            >
                                                <span className="scbtntxt">Create</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="svctrlnewint" className="scflyt">
                                        <p id="svctrlnewing" className="sclnk">
                                            Creating...
                                        </p>
                                    </div>
                                    <div id="svctrlerr" className="scflyt">
                                        <span id="svctrlerrtxt" className="errinvsbl" />
                                        <span id="svctrlmsmtcherrtxt" className="errinvsbl">
                                            Access your{" "}
                                            <a
                                                id="svctrlmsmtchlnk"
                                                className="b_ignbt2 sclnk"
                                                href="https://www.bing.com/saves?"
                                                h="ID=images,6230.1"
                                            >
                                                Collections
                                            </a>
                                        </span>
                                    </div>
                                    <div
                                        id="svctrlhvr"
                                        className="scflyt"
                                        aria-label="Save item to your collections"
                                    >
                                        <div id="svctrlhvrpnl" className="svpnl">
                                            <div id="svctrlhvrpnllbl">
                                                <p id="svctrlhvrpnling">
                                                    <span id="svctrlhvrsvng" className="onusvd">
                                                        Saving...
                                                    </span>
                                                    <span id="svctrlhvrrmvg" className="onsvd">
                                                        Removing...
                                                    </span>
                                                </p>
                                                <p id="svctrlhvrpnltxt">
                                                    <span id="svctrlhvrusvd" className="onusvd">
                                                        Save to{" "}
                                                    </span>
                                                    <span id="svctrlhvrsvd" className="onsvd">
                                                        Saved to{" "}
                                                    </span>
                                                    <a
                                                        href="https://www.bing.com/saves?"
                                                        id="svctrllnk"
                                                        target="_blank"
                                                        title=""
                                                        className="b_ignbt sclnk"
                                                        tabIndex={0}
                                                        h="ID=images,6230.2"
                                                    />
                                                    <span id="svctrlhvrnum" />
                                                </p>
                                            </div>
                                        </div>
                                        <div id="svctrlpckr">
                                            <div id="svctrllstw">
                                                <ul
                                                    id="svctrllst"
                                                    role="listbox"
                                                    aria-label="Your collections"
                                                    name="Your collections"
                                                    aria-multiselectable="true"
                                                    tabIndex={0}
                                                />
                                            </div>
                                        </div>
                                        <div id="svctrlcrtfrm">
                                            <div
                                                id="svctrlhvrbtn"
                                                className="sclnk"
                                                aria-label="Create new collection"
                                                tabIndex={0}
                                                role="button"
                                            >
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 12, lineHeight: 12, width: 12 }}
                                                    data-id="svctrlhvrplus"
                                                    data-role="presentation"
                                                    data-width={12}
                                                    data-height={12}
                                                    data-class="rms_img"
                                                    data-src="https://www.bing.com/rp/z7pWos7Y3kyke569sNYwm89fv94.svg"
                                                />
                                                <span>Create new collection</span>
                                            </div>
                                            <div id="svctrlinlineform">
                                                <div className="scinline">
                                                    <h6 id="svctrlnewinlineformhdr">Create new collection</h6>
                                                    <div
                                                        role="button"
                                                        id="svctrlinlineformback"
                                                        className="scinptbtn"
                                                        aria-label="Back"
                                                        tabIndex={3}
                                                    >
                                                        <div
                                                            className="rms_iac"
                                                            style={{ height: 10, lineHeight: 10, width: 10 }}
                                                            data-width={10}
                                                            data-height={10}
                                                            data-class="rms_img"
                                                            data-src="https://www.bing.com/rp/9mM--t8iClqcK4e1MHzNovhHkVA.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div id="svctrlinlineformerrdup" className="b_scerr">
                                                    <span>This collection already exists.</span>
                                                </div>
                                                <div className="scinline">
                                                    <input
                                                        id="svctrlinlineformname"
                                                        type="text"
                                                        placeholder="Enter collection name"
                                                        autoComplete="off"
                                                        tabIndex={1}
                                                    />
                                                    <div
                                                        role="button"
                                                        id="svctrlinlineformcreate"
                                                        className="scinptbtn"
                                                        aria-disabled="true"
                                                        aria-label="Create"
                                                        tabIndex={2}
                                                    >
                                                        <div
                                                            className="rms_iac"
                                                            style={{ height: 10, lineHeight: 10, width: 13 }}
                                                            data-width={13}
                                                            data-height={10}
                                                            data-class="rms_img"
                                                            data-src="https://www.bing.com/rp/XhuulIbo88eLoQSXNdexXtHhacY.svg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="svctrltri" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", margin: "0px -20px 20px 0p" }}>
                        <Container />

                    </div>
                    <div className="rabi" data-count={0} />
                    <div className="rabv">
                        Some results have been hidden because they may be inaccessible to you.
                        <a
                            href="https://www.bing.com:9943/images/search?q=narendra+modi&form=HDRSC4&first=1&ubiroff=1"
                            h="ID=images,6155.1"
                        >
                            Show inaccessible results
                        </a>
                    </div>
                    <div
                        id="bop_container"
                        data-priority={2}
                        className="invis"
                        data-chkfstpg={1}
                    >
                        <div
                            id="bop_announce"
                            className="b_hide"
                            tabIndex={-1}
                            title="new images loaded"
                        />
                    </div>
                    {/* </div> */}
                </div>
                <div id="fbdialog" className="fbdialog b_cards">
                    <div
                        className="accDialog"
                        role="dialog"
                        aria-labelledby="fbdialog_title"
                        aria-modal="true"
                    >
                        <a
                            id="fbdialogcl"
                            title="Close"
                            role="button"
                            href="#"
                            aria-label="Close"
                        />
                        <div
                            id="fbdialog_container"
                            fbposturl="/customerfeedback/queue/full/submission"
                            ss="moderate"
                        >
                            <img alt="" src="../sa/simg/Flag_Feedback.png" className="flagIcon" />
                            <div className="contents b_regtxt">
                                <div
                                    id="fbdialog_title"
                                    role="heading"
                                    tabIndex={0}
                                    aria-level={2}
                                    className="title b_promtxt"
                                >
                                    Report an inappropriate content
                                </div>
                                <div id="fbdialog_message" className="message">
                                    Please select one of the options below.
                                </div>
                                <div>
                                    <label
                                        id="fbthankyou_message"
                                        aria-live="polite"
                                        aria-atomic="false"
                                        tabIndex={0}
                                        className="message"
                                        style={{ display: "none" }}
                                        data-content="Thanks for your feedback."
                                        aria-label="Thanks for your feedback."
                                    />
                                </div>
                                <div id="fbdialog_thumb_container" />
                                <div>
                                    <label
                                        id="fbdialog_errormessage"
                                        aria-hidden="true"
                                        tabIndex={0}
                                        style={{ display: "none" }}
                                        data-content="Please select the problem with the content."
                                    />
                                </div>
                                <form id="fbdialog_mark_form">
                                    <div id="checkbox_region">
                                        <div id="fbdialog_mark_selection_irrelevant">
                                            <label className="cb_c">
                                                <input
                                                    id="irrelevant_mark_checkbox"
                                                    type="checkbox"
                                                    aria-labelledby="irrelevant_mark_checkbox_label"
                                                />
                                                <span className="cb_w" />
                                                <label
                                                    id="irrelevant_mark_checkbox_label"
                                                    className="cb_t"
                                                    htmlFor="irrelevant_mark_checkbox"
                                                >
                                                    Not Relevant
                                                </label>
                                            </label>
                                        </div>
                                        <div id="fbdialog_mark_section_offensive">
                                            <label className="cb_c">
                                                <input
                                                    id="offensive_mark_checkbox"
                                                    type="checkbox"
                                                    aria-labelledby="offensive_mark_checkbox_label"
                                                />
                                                <span className="cb_w" />
                                                <label
                                                    id="offensive_mark_checkbox_label"
                                                    className="cb_t"
                                                    htmlFor="offensive_mark_checkbox"
                                                >
                                                    Offensive
                                                </label>
                                            </label>
                                        </div>
                                        <div id="fbdialog_mark_section_adult">
                                            <label className="cb_c">
                                                <input
                                                    id="adult_mark_checkbox"
                                                    type="checkbox"
                                                    aria-labelledby="adult_mark_checkbox_label"
                                                />
                                                <span className="cb_w" />
                                                <label
                                                    id="adult_mark_checkbox_label"
                                                    className="cb_t"
                                                    htmlFor="adult_mark_checkbox"
                                                >
                                                    Adult
                                                </label>
                                            </label>
                                        </div>
                                        <div id="fbdialog_mark_section_childabuse">
                                            <label className="cb_c">
                                                <input
                                                    id="childabuse_mark_checkbox"
                                                    type="checkbox"
                                                    aria-labelledby="childabuse_mark_checkbox_label"
                                                />
                                                <span className="cb_w" />
                                                <label
                                                    id="childabuse_mark_checkbox_label"
                                                    className="cb_t"
                                                    htmlFor="childabuse_mark_checkbox"
                                                >
                                                    Child Sexual Abuse
                                                </label>
                                            </label>
                                        </div>
                                    </div>
                                    <div id="fbdialog_buttons">
                                        <input
                                            id="adult_button_submit"
                                            className="buttonLink"
                                            type="button"
                                            defaultValue="Submit"
                                            name="submit"
                                            aria-label="Submit"
                                        />
                                        <input
                                            id="adult_button_cancel"
                                            className="buttonLink"
                                            type="button"
                                            defaultValue="Cancel"
                                            name="cancel"
                                            aria-label="Cancel"
                                        />
                                    </div>
                                    <span
                                        id="fbthankyou_button"
                                        className="closeButton"
                                        style={{ display: "none" }}
                                    >
                                        <input
                                            id="adult_button_close"
                                            className="buttonLink"
                                            type="button"
                                            defaultValue="Close"
                                            name="cancel"
                                        />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button className="accDlgSf">
                        Invisible focusable element for fixing accessibility issue
                    </button>
                </div>
            </div>
            <a role="button" id="fbpgbt" className="cbtn" href="#" h="ID=images,5151.1">
                <img
                    role="presentation"
                    aria-hidden="true"
                    className="rms_img"
                    src="../rp/ytiieusXgM2K8bLkEDP-AS1ePds.png"
                />
                Feedback
            </a>
            <footer
                id="b_footer"
                className="b_footer"
                role="contentinfo"
                aria-label="Footer"
            >
                <div id="b_footerItems">
                    <span>© 2023 Microsoft</span>
                    <ul>
                        <li>
                            <a
                                id="sb_privacy"
                                href="http://go.microsoft.com/fwlink/?LinkId=521839"
                                h="ID=images,5153.1"
                            >
                                Privacy and Cookies
                            </a>
                        </li>
                        <li>
                            <a
                                id="sb_legal"
                                href="http://go.microsoft.com/fwlink/?LinkID=246338"
                                h="ID=images,5154.1"
                            >
                                Legal
                            </a>
                        </li>
                        <li>
                            <a
                                id="sb_advertise"
                                href="https://go.microsoft.com/fwlink/?linkid=868922"
                                h="ID=images,5155.1"
                            >
                                Advertise
                            </a>
                        </li>
                        <li>
                            <a
                                id="sb_help"
                                target="_blank"
                                href="https://support.microsoft.com/topic/82d20721-2d6f-4012-a13d-d1910ccf203f"
                                h="ID=images,5156.1"
                            >
                                Help
                            </a>
                        </li>
                        <li>
                            <a role="button" id="sb_feedback" href="#" h="ID=images,5157.1">
                                Feedback
                            </a>
                        </li>
                    </ul>
                </div>
                {/*foo*/}
            </footer>
            <div id="aRmsDefer"></div>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      .touchQuery .suggestion-title-wrapper {\n         text-align: center\n      }\n\n      .touchQuery .suggestion-title {\n         padding-left: 0px;\n         padding-right: 0px;\n      }\n\n      .touchQuery .suggestion-title,\n      .touchQuery .suggestion-title strong {\n         font-size: 13px;\n         line-height: 1.2em;\n      }\n   "
                }}
            />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      #rfCarousel .carousel-controls {\n         height: 48px;\n      }\n\n      #rfCarousel .carousel-scroll-content {\n         margin-left: 0px;\n      }\n\n      #rfCarousel .items,\n      #rfCarousel .car_anL {\n         padding: 0 0px 0 0px;\n      }\n\n      #rfCarousel .car_anL {\n         padding-bottom: 10px;\n      }\n\n      #rfCarousel .carousel-attr,\n      #rfCarousel .noRes {\n         padding-left: 0px;\n      }\n\n      #rfCarousel .item {\n         margin-right: 8px;\n      }\n\n      #rfCarousel .item .card {}\n\n      #rfCarousel .item .card {\n         height: 23px;\n      }\n\n      #rfCarousel .nav_left,\n      #rfCarousel .nav_right {\n         height: 48px;\n         width: 25px;\n      }\n\n      #sw_canvas {\n         padding-top: 0 !important;\n      }\n   "
                }}
            />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n      .iuscp.maskthumb .iusc:after {\n         content: "This image is inaccessible";\n      }\n   '
                }}
            />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      #inline_ip .carousel-controls {\n         height: 185px;\n      }\n\n      #inline_ip .carousel-scroll-content {\n         margin-left: 0px;\n      }\n\n      #inline_ip .items,\n      #inline_ip .car_anL {\n         padding: 0 0px 0 0px;\n      }\n\n      #inline_ip .car_anL {\n         padding-bottom: 10px;\n      }\n\n      #inline_ip .carousel-attr,\n      #inline_ip .noRes {\n         padding-left: 0px;\n      }\n\n      #inline_ip .item {\n         margin-right: 8px;\n      }\n\n      #inline_ip .item .card {\n         width: 120px;\n         margin: 2px 0;\n      }\n\n      #inline_ip .item .card {\n         height: 156px;\n      }\n\n      #inline_ip.carousel .nav_container {\n         top: 50%;\n         border-radius: 50%;\n         margin: 0 20px;\n         margin-top: -28px;\n      }\n\n      #inline_ip .nav_left,\n      #inline_ip .nav_right {\n         height: 56px;\n         width: 56px;\n         bottom: 64px;\n      }\n\n      #inline_ip ol.items li:first-of-type .card {\n         margin-left: 2px;\n      }\n   "
                }}
            />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      #mmComponent_images_2>ul {\n         padding-bottom: 8px;\n         width: auto;\n      }\n\n      #mmComponent_images_2>ul>li {\n         padding-right: 8px;\n      }\n\n      #mmComponent_images_2>ul>li:last-child {\n         padding-right: 0;\n      }\n\n      #mmComponent_images_2 {\n         margin-right: -8px;\n      }\n   "
                }}
            />


        </>


    );
};

export default Search