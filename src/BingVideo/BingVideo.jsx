import React from 'react'
import './Style.css'
import Container from './Container'
import { useParams } from 'react-router-dom'
import Header from '../Commons/Header'
import {BingData} from './BingData.js';

function BingVideo() {
  const { name } = useParams()

  return (
    <>
      <Header page={'videos'} />
      {/* <header id="b_header" className="m-3" >
                <form
                    action="https://www.bing.com/images/search"
                    id="sb_form"
                    className="hassbi"
                >
                    <a
                        className="b_logoArea"
                        target=""
                        href="https://www.bing.com/?FORM=Z9FD1"
                        h="ID=images,5123.1"
                    >
                        <h1
                            className="b_logo"
                            title="Back to Bing search"
                            aria-label="Go to Bing homepage"
                        />
                    </a>
                    <div className="b_searchboxForm" role="search">
                        <input
                            className="b_searchbox"
                            id="sb_form_q"
                            name="q"
                            aria-autocomplete="both"
                            aria-label="Enter your search heBingVideo suggestions will show as you type"
                            type="search"
                            defaultValue="narendra modi"
                            maxLength={1000}
                            onfocus="_ge('b_header').className='b_focus';"
                            dir=""
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoComplete="off"
                            spellCheck="false"
                        />
                        <div
                            id="sb_clt"
                            className="sb_clrhov"
                            data-second-sbtipx="Clear"
                            data-sbtipx="Clear"
                        >
                            <a
                                id="sw_clx"
                                data-second-href="javascript:void(0)"
                                tabIndex={0}
                                aria-label="Clear text"
                                role="button"
                            >
                                <div className="sw_close" />
                            </a>
                        </div>
                        <div
                            id="sbiarea"
                            data-priority={1}
                            data-idprefix="sb"
                            data-ptn="Images"
                        >
                            <div id="sb_sbip" data-sbtip="Search using an image" data-lgdgevt={0}>
                                <div
                                    id="sb_sbi"
                                    tabIndex={0}
                                    role="button"
                                    data-scrtl={1}
                                    aria-label="Search using an image"
                                >
                                    <img
                                        id="sbi_b"
                                        className=" rms_img"
                                        role="none"
                                        width={18}
                                        height={18}
                                        src="https://www.bing.com/rp/f21jlSMmEDN43OaavcdaB-7Phq0.svg"
                                    />
                                </div>
                            </div>
                            <div id="sbicom">
                                <div
                                    id="sb_sbidialog"
                                    className="sbidialog sbifre"
                                    mode="normal"
                                    data-icwid="sb_sbip"
                                    data-idprefix="sb"
                                    data-maxpx={0}
                                    data-quality={0}
                                    data-priority={2}
                                    data-baseurl="/images/search?&view=detailv2&iss=%SBIPAGENAME%&FORM=%FORMCODE%&rtpu=%REDIRECTURL%&sbisrc=%SOURCE%&q=%IMAGEURL%&idpbck=1"
                                    data-addparams=""
                                    data-fcode="SBIIRP"
                                    data-multup="true"
                                    data-idbsto="false"
                                    data-enableopensbiparam="false"
                                    data-passparams="rw"
                                    data-ldicon={1}
                                >
                                    <div id="sb_sbipane" className="sbipane" role="dialog">
                                        <div className="sbiIdc" />
                                        <div
                                            id="sb_sbicls"
                                            className="sbiclsbtn"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Close"
                                        >
                                            <img
                                                className="clsbtnimg rms_img"
                                                width={16}
                                                height={16}
                                                alt="Close"
                                                src="https://www.bing.com/rp/fdVZU4ttbw8NDRm6H3I5BW3_vCo.svg"
                                            />
                                            <img
                                                className="clsoptbtnimg rms_img"
                                                width={20}
                                                height={20}
                                                alt="Close"
                                                src="https://www.bing.com/rp/4L4QdyjTv0HYE2Ig2ol9eYoqxg8.svg"
                                            />
                                        </div>
                                        <div id="sb_sbiopc" className="sbiopc">
                                            <div role="heading" aria-level={1} className="sbitit">
                                                Try Visual Search
                                            </div>
                                            <div role="heading" aria-level={2} className="sbisubtit">
                                                Search with a picture instead of text
                                            </div>
                                            <div
                                                id="sb_dropzone"
                                                className="dropzone"
                                                data-sttop={1}
                                                data-inputid="sb_fileinput"
                                                click-proxy-id="sb_brtext"
                                                drop-eff-id="sb_sbidialog"
                                            >
                                                <div className="dpnmpn">
                                                    <div
                                                        id="sb_sbiinfbtn"
                                                        tabIndex={0}
                                                        role="tooltip"
                                                        className="sbiinfbtn"
                                                        aria-label="The photos you provided may be used to improve Bing image processing services."
                                                    >
                                                        <img
                                                            className="infbtnimg rms_img"
                                                            width={16}
                                                            height={16}
                                                            alt="information"
                                                            role="button"
                                                            src="https://www.bing.com/rp/Fsa_OI0AplCnVoXGca8ALOo0S0s.svg"
                                                        />
                                                        <div className="infbtntt accDialog">
                                                            <div className="infbd">
                                                                The photos you provided may be used to improve Bing
                                                                image processing services.
                                                            </div>
                                                            <div className="sbiinflnks">
                                                                <a
                                                                    id="sb_sbiprilnk"
                                                                    className="sbiinflnk"
                                                                    target="_blank"
                                                                    data-link="http://go.microsoft.com/fwlink/?LinkId=521839"
                                                                    aria-label="Privacy Policy"
                                                                    href="#"
                                                                    h="ID=images,5217.1"
                                                                >
                                                                    Privacy Policy
                                                                </a>
                                                                <span className="sbiinfsep">|</span>
                                                                <a
                                                                    id="sb_sbisalnk"
                                                                    className="sbiinflnk"
                                                                    target="_blank"
                                                                    data-link="http://go.microsoft.com/fwlink/?LinkID=246338"
                                                                    aria-label="Terms of Use"
                                                                    href="#"
                                                                    h="ID=images,5218.1"
                                                                >
                                                                    Terms of Use
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="dpicon rms_img"
                                                        width={24}
                                                        height={24}
                                                        alt="Drop an image here"
                                                        src="https://www.bing.com/rp/UYtUYDcn1oZlFG-YfBPz59zejYI.svg"
                                                    />
                                                    <span className="dptext">
                                                        Drag one or more images here or
                                                    </span>
                                                    <span
                                                        id="sb_brtext"
                                                        className="brtext"
                                                        tabIndex={0}
                                                        role="button"
                                                        aria-label="browse"
                                                    >
                                                        browse
                                                    </span>
                                                </div>
                                                <span className="dpintext">Drop images here</span>
                                                <span className="dpload">
                                                    <div className="loadingdiv">
                                                        <div
                                                            className="rms_iac"
                                                            style={{ height: 50, lineHeight: 50, width: 50 }}
                                                            data-id="loadingimg"
                                                            data-height={50}
                                                            data-width={50}
                                                            data-role="presentation"
                                                            data-class="rms_img"
                                                            data-src="https://www.bing.com/rp/kiGH9ukZK6Q4hvtDtwwVc1yvueg.svg"
                                                        />
                                                    </div>
                                                </span>
                                                <input
                                                    id="sb_fileinput"
                                                    className="fileinput"
                                                    type="file"
                                                    accept="image/gif, image/jpeg, image/png, image/webp"
                                                    multiple=""
                                                />
                                                <div className="normalzone">
                                                    <div className="sbisep">
                                                        <div className="sbisepln" />
                                                        <div className="sbiOR">OR</div>
                                                    </div>
                                                    <div
                                                        id="sb_pastearea"
                                                        className="pastearea"
                                                        data-pasteurl="Paste image URL"
                                                    >
                                                        <div
                                                            id="sb_pastepn"
                                                            tabIndex={0}
                                                            role="button"
                                                            className="pstpn"
                                                            aria-label="Paste image or URL"
                                                        >
                                                            <img
                                                                className="psticon rms_img"
                                                                width={16}
                                                                height={16}
                                                                alt="Paste image or URL"
                                                                src="https://www.bing.com/rp/KC_nX2_tPPyFvVw1RK20Yu1FyDk.svg"
                                                            />
                                                            <span>Paste image or URL</span>
                                                        </div>
                                                        <input
                                                            id="sb_imgpst"
                                                            className="imgpst"
                                                            type="text"
                                                            placeholder="Paste image or URL"
                                                            aria-label="Paste image or URL"
                                                        />
                                                    </div>
                                                    <div
                                                        id="sb_tkpct"
                                                        tabIndex={0}
                                                        role="button"
                                                        className="photopn"
                                                        aria-label="Take photo"
                                                    >
                                                        <img
                                                            className="tpicon rms_img"
                                                            width={16}
                                                            height={16}
                                                            alt="Take photo"
                                                            src="https://www.bing.com/rp/NnFHhz2jL6yzChtIhaB5IIVKY5k.svg"
                                                        />
                                                        <span>Take photo</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sbiDemos">
                                                <div role="heading" aria-level={2} className="sbiDemoHint">
                                                    Click a sample image to try it
                                                </div>
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/hx-eea1zqtCz4K0bW2uH_oN7Fs4.jpg"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Sunglasses"
                                                    data-role="link"
                                                    data-src="../rp/hx-eea1zqtCz4K0bW2uH_oN7Fs4.jpg"
                                                />
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/bhUEIdQFwbS_E8PotYL_6_ogXWQ.jpg"
                                                    data-sbi-addparams="&vt=3&cal=0.4470046082949309&cab=0.34&cat=0&car=0.6912442396313364&hotspot=1"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Chairs"
                                                    data-role="link"
                                                    data-src="../rp/95z5wMy4UcfbSSSlSw780vQ5jKA.jpg"
                                                />
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/_Xvo363ok2lIceenCvKNta0_roc.jpg"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Coffee"
                                                    data-role="link"
                                                    data-src="../rp/GJDmKr3_TS3Qpm6KEL9UKUQKUO4.jpg"
                                                ></div>
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/C1RJWeigizKlYCJZAy04inahSKM.jpg"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Sydney opera"
                                                    data-role="link"
                                                    data-src="../rp/ln5TQq6AIWfcBlduDk-5bnaJMpY.jpg"
                                                />
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/oUsYRFl3xbV2u1ij56Q1bxZweec.jpg"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Rose"
                                                    data-role="link"
                                                    data-src="../rp/dbmNS45xQvD1diApY1T2HExvOo8.jpg"
                                                ></div>
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/5Hoq5twItmrrW76KaBPuyhV9Kt0.jpg"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Louvre"
                                                    data-role="link"
                                                    data-src="../rp/cfeVf2-uV0hUo3ToTbLjztuomWk.jpg"
                                                ></div>
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/Xa8PkIv-ZvVyRAT-cbEKYSWj8h4.jpg"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Two dogs"
                                                    data-role="link"
                                                    data-src="../rp/lvCKZ07bEYtoYmY62ifMzVa0RIE.jpg"
                                                ></div>
                                                <div
                                                    className="rms_iac"
                                                    style={{ height: 83, lineHeight: 83, width: 83 }}
                                                    data-class="sbiDmImg sbiable rms_img"
                                                    data-tabindex={0}
                                                    data-data-sbiid="sb"
                                                    data-sbi-hi-src="/rp/s2rTfil1ea2mb3HVnuuoCM9eUWs.jpg"
                                                    data-sbi-addparams="&vt=3&cal=0.101203024&cab=0.96022916&cat=0.6564939&car=0.49518692&hotspot=1"
                                                    data-width={83}
                                                    data-height={83}
                                                    data-alt="Handmade seagrass"
                                                    data-role="link"
                                                    data-src="../rp/ni3MyKKVu9pK0SgY6gb6Z2NOGpg.jpg"
                                                />
                                            </div>
                                            <div className="sbiFooter">
                                                <div className="sbi_lmlnkc">
                                                    <a
                                                        id="sb_sbi_lmlnk"
                                                        className="sbi_lmlnk"
                                                        title="Visual Search"
                                                        href="https://www.bing.com/visualsearch?FORM=SBILNM"
                                                        h="ID=images,5219.1"
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="sb_camcontent" className="camcontent">
                                            <video
                                                id="sb_webvideo"
                                                className="webvideo"
                                                height={260}
                                                width={420}
                                            />
                                            <div className="cammsgp">
                                                <div className="cammsg">
                                                    To use Visual Search, enable the camera in this browser
                                                </div>
                                            </div>
                                            <div className="camoppn">
                                                <div
                                                    id="sb_cambtn"
                                                    className="cambtn"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Take photo"
                                                >
                                                    <div className="cambtncirclelarge" />
                                                    <div className="cambtncirclesmall" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div
                                        id="sb_sbi_form_ph"
                                        style={{ display: "none" }}
                                        className="sbi_form_ph"
                                        method="POST"
                                        action="https://www.bing.com/images/search?&view=detailv2&iss=%SBIPAGENAME%&FORM=%FORMCODE%&rtpu=%REDIRECTURL%&sbisrc=%SOURCE%&q=%IMAGEURL%&idpbck=1"
                                        target="_top"
                                        encType="multipart/form-data"
                                    >
                                        <input
                                            id="sb_sbi_ipt"
                                            className="sbi_hm"
                                            name="imgurl"
                                            type="search"
                                            maxLength={2048}
                                            autoComplete="off"
                                            placeholder="Paste image or URL"
                                            data-pasteurl="Paste image URL"
                                        />
                                        <input id="sb_sbi_gh" type="submit" defaultValue="" />
                                        <input name="cbir" type="hidden" defaultValue="sbi" />
                                        <input
                                            id="sb_sbi_img"
                                            name="imageBin"
                                            type="hidden"
                                            defaultValue=""
                                        />
                                    </div>
                                    <a
                                        id="sb_sbi_dmlnk"
                                        className="sbi_dmlnk"
                                        aria-hidden="true"
                                        tabIndex={-1}
                                        href="https://www.bing.com/images"
                                        h="ID=images,5220.1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div id="sb_search">
                            <a tabIndex={-1} href="javascript:void(0);" h="ID=images,5124.1">
                                <div id="sb_go_par" data-sbtip="Search the web">
                                    <div id="b_icon_spyglass" className="sb_icon" />
                                    <input
                                        type="submit"
                                        className="b_searchboxSubmit"
                                        id="sb_form_go"
                                        tabIndex={0}
                                        name="go"
                                        defaultValue="Search"
                                    />
                                </div>
                            </a>
                        </div>
                        <input id="sa_qs" name="qs" defaultValue="ds" type="hidden" />
                        <input type="hidden" defaultValue="QBIR" name="form" />
                    </div>
                </form>
                <div
                    id="id_h"
                    role="complementary"
                    aria-label="Account Rewards and Preferences"
                    data-priority={2}
                >
                    <a
                        id="id_l"
                        className="id_button"
                        aria-haspopup="true"
                        aria-controls="id_d"
                        aria-expanded="false"
                        data-clarity-mask="true"
                        href="javascript:void(0);"
                        h="ID=images,5128.1"
                    >
                        <div>
                            {" "}
                            <span
                                id="D68A20_1_btn"
                                className="cbtn"
                                data-wire="I;button_init;; |"
                                data-appns="images"
                                data-k="5222.1"
                            >
                                <input
                                    type="submit"
                                    name="submit"
                                    id="id_a"
                                    defaultValue="Sign in"
                                    aria-label=""
                                />
                            </span>
                        </div>
                        <span id="id_n" style={{ display: "none" }} aria-hidden="true" />
                        <img
                            id="id_p"
                            className="id_avatar sw_spd"
                            style={{ display: "none" }}
                            aria-hidden="true"
                            alt="Profile Picture"
                            aria-label="Profile Picture"
                            onerror="FallBackToDefaultProfilePic(this)"
                            data-src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
                            data-alt=""
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
                        />
                        <div
                            id="id_linkicon"
                            style={{
                                position: "relative",
                                verticalAlign: "top",
                                marginRight: "-10px",
                                right: 10,
                                display: "none"
                            }}
                        >
                            <svg
                                className="id_linkicon_svg"
                                style={{
                                    width: 16,
                                    height: 16,
                                    verticalAlign: "top",
                                    marginTop: 27
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <g filter="url(#a)">
                                    <circle cx={10} cy={9} r={8} fill="#fff" />
                                </g>
                                <path
                                    fill="#767676"
                                    d="M8.2 6a.6.6 0 0 1 .07 1.196L8.2 7.2H7a1.8 1.8 0 0 0-.106 3.597L7 10.8h1.2a.6.6 0 0 1 .07 1.196L8.2 12H7a3 3 0 0 1-.13-5.997L7 6h1.2ZM13 6a3 3 0 0 1 .13 5.997L13 12h-1.2a.6.6 0 0 1-.07-1.196l.07-.004H13a1.8 1.8 0 0 0 .106-3.597L13 7.2h-1.2a.6.6 0 0 1-.07-1.196L11.8 6H13ZM7 8.4h6a.6.6 0 0 1 .07 1.196L13 9.6H7a.6.6 0 0 1-.07-1.196L7 8.4h6-6Z"
                                />
                                <defs>
                                    <filter
                                        id="a"
                                        width={20}
                                        height={20}
                                        x={0}
                                        y={0}
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            result="hardAlpha"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        />
                                        <feOffset dy={1} />
                                        <feGaussianBlur stdDeviation={1} />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                                        <feBlend
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_1352_97902"
                                        />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1352_97902"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </a>
                    <span id="id_d" _iid="images.5146" />
                    <a
                        className="id_button toolTip"
                        id="id_rh"
                        aria-label="Microsoft Rewards "
                        role="button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="bepfo"
                        href="javascript:void(0)"
                        h="ID=images,5135.1"
                    >
                        <span id="id_rc" className="serp">
                            Rewards
                        </span>
                        <span id="rewards_header_icon serp" className="rwds_svg serp pc">
                            <span className="rhlined serp" />
                            <span className="rhfill serp" />
                            <svg xmlns="http://www.w3.org/2000/svg" id="rh_meter">
                                <circle
                                    cx={20}
                                    cy={20}
                                    r={14}
                                    id="rh_animcrcl"
                                    className="serp"
                                    strokeDasharray="88, 88"
                                    transform="rotate(-90,20,20)"
                                />
                            </svg>
                        </span>
                    </a>
                    <a
                        className="b_hide"
                        id="id_rwl"
                        data-title="Microsoft Rewards"
                        href="https://www.bing.com/rewards/dashboard"
                        h="ID=images,5134.1"
                    />
                    <span
                        id="nc_iid"
                        _ig="16B6042C3B034663A4D08ED95D0D5C45"
                        _iid="images.5133"
                    />
                    <a
                        id="id_sc"
                        className="idp_ham nohphbtop"
                        aria-label="Settings and quick links"
                        aria-expanded="false"
                        aria-controls="id_hbfo"
                        aria-haspopup="true"
                        role="button"
                        tabIndex={0}
                        href="javascript:void(0);"
                        h="ID=images,5144.1"
                    />
                    <span
                        id="id_hbfo"
                        _iid="images.5145"
                        className="slide_up nohpfo"
                        tabIndex={-1}
                        aria-hidden="true"
                        aria-labelledby="id_sc"
                        aria-modal="true"
                        role="menu"
                    />
                </div>
                <span id="langChange" className="b_hide langLabel">
                    <a id="langChangeAnchor" href="javascript:void(0);" h="ID=images,5109.1">
                        <span id="langLid">English</span>
                        <span id="langChev" className="sw_ddbk" />
                    </a>
                    <div id="langDId" className="langD b_dropdown b_hide">
                        <a
                            data-noajax={1}
                            href="search3566.html?q=narendra+modi&form=HDRSC4&first=1&setlang=hi&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5111.1"
                        >
                            हिंदी
                        </a>
                        <a
                            data-noajax={1}
                            href="search05f2.html?q=narendra+modi&form=HDRSC4&first=1&setlang=bn&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5112.1"
                        >
                            বাংলা
                        </a>
                        <a
                            data-noajax={1}
                            href="searchf310.html?q=narendra+modi&form=HDRSC4&first=1&setlang=ur&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5113.1"
                        >
                            اردو
                        </a>
                        <a
                            data-noajax={1}
                            href="searcha65c.html?q=narendra+modi&form=HDRSC4&first=1&setlang=pa-guru&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5114.1"
                        >
                            ਪੰਜਾਬੀ
                        </a>
                        <a
                            data-noajax={1}
                            href="searchcfbc.html?q=narendra+modi&form=HDRSC4&first=1&setlang=mr&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5115.1"
                        >
                            मराठी
                        </a>
                        <a
                            data-noajax={1}
                            href="search934b.html?q=narendra+modi&form=HDRSC4&first=1&setlang=te&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5116.1"
                        >
                            తెలుగు
                        </a>
                        <a
                            data-noajax={1}
                            href="searcha785.html?q=narendra+modi&form=HDRSC4&first=1&setlang=ta&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5117.1"
                        >
                            தமிழ்
                        </a>
                        <a
                            data-noajax={1}
                            href="search3265.html?q=narendra+modi&form=HDRSC4&first=1&setlang=kn&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5118.1"
                        >
                            ಕನ್ನಡ
                        </a>
                        <a
                            data-noajax={1}
                            href="search9eb0.html?q=narendra+modi&form=HDRSC4&first=1&setlang=gu&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5119.1"
                        >
                            ગુજરાતી
                        </a>
                        <a
                            data-noajax={1}
                            href="searchae8b.html?q=narendra+modi&form=HDRSC4&first=1&setlang=ml&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5120.1"
                        >
                            മലയാളം
                        </a>
                        <a
                            data-noajax={1}
                            href="search24dc.html?q=narendra+modi&form=HDRSC4&first=1&setlang=or&sid=338D20F65361679E3E7C321952996616"
                            h="ID=images,5121.1"
                        >
                            ଓଡ଼ିଆ
                        </a>
                    </div>
                </span>
                <nav className="b_scopebar" role="navigation" aria-label="Search Filter">
                    <ul>
                        <li className="" data-menuurl="" id="b-scopeListItem-web">
                            <a className target aria-current="page" href={`../result/:${name}`} h="ID=SERP,5026.1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none">
                                    <path fill="#174AE4" className="cdxscopei" d="M5.5 0a5.5 5.5 0 0 1 4.383 8.823l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073-4.147-4.147A5.5 5.5 0 1 1 5.5 0Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                                </svg>
                                All
                            </a>
                        </li>
                        <li className=" b_active" data-menuurl id="b-scopeListItem-images">
                            <a className target="_self" aria-current="false" href={`../images/:${name}`} h="ID=SERP,5028.1">
                                Images
                            </a>
                        </li>
                        <li className=" b_active" data-menuurl id="b-scopeListItem-video">
                            <a className target="_self" aria-current="false" href={`../videos/:${name}`} h="ID=SERP,5029.1">
                                Videos
                            </a>
                        </li>
                        <li className="" data-menuurl="" id="b-scopeListItem-local">
                            <a
                                className=""
                                target="_self"
                                aria-current="false"
                                href="https://www.bing.com/maps?q=narendra+modi&FORM=HDRSC4"
                                h="ID=images,5103.1"
                            >
                                Maps
                            </a>
                        </li>
                        <li className="" data-menuurl="" id="b-scopeListItem-news">
                            <a
                                className=""
                                target="_self"
                                aria-current="false"
                                href="https://www.bing.com/news/search?q=narendra+modi&FORM=HDRSC6"
                                h="ID=images,5104.1"
                            >
                                News
                            </a>
                        </li>
                        <li className="" data-menuurl="" id="b-scopeListItem-shop">
                            <a
                                className=""
                                target="_self"
                                aria-current="false"
                                href="https://www.bing.com/shop?q=narendra+modi&FORM=SHOPTB"
                                h="ID=images,5105.1"
                            >
                                Shopping
                            </a>
                        </li>
                        <li id="b-scopeListItem-menu">
                            <a target="_self" aria-current="false" href="javascript:void(0);">
                                <span className="b_sp_menu_separ" id="b_sp_menu_separ">
                                    <svg
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={22}
                                        height={18}
                                        filter="invert(.5)"
                                        style={{ marginBottom: "-5", }}

                                    >
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                    </svg>
                                </span>
                                More
                            </a>
                            <div className="b_sp_over_cont">
                                <ul className="b_sp_over_menu">
                                    <li
                                        className=" b_sp_over_item b_scopebar_item"
                                        data-menuurl=""
                                        id="b-scopeListItem-flights"
                                    >
                                        <a
                                            className=""
                                            target="_self"
                                            aria-current="false"
                                            href="https://www.bing.com/travel/search?q=narendra+modi&m=flights&FORM=FBSCOP"
                                            h="ID=images,5106.1"
                                        >
                                            Flights
                                        </a>
                                    </li>
                                    <li
                                        className=" b_sp_over_item b_scopebar_item"
                                        data-menuurl=""
                                        id="b-scopeListItem-travelhub"
                                    >
                                        <a
                                            className=""
                                            target="_self"
                                            aria-current="false"
                                            href="https://www.bing.com/travel/search?q=narendra+modi&m=travel&FORM=THSCOP"
                                            h="ID=images,5107.1"
                                        >
                                            Travel
                                        </a>
                                    </li>
                                    <li
                                        className=" b_sp_over_item b_scopebar_item"
                                        data-menuurl=""
                                        id="b-scopeListItem-hotels"
                                    >
                                        <a
                                            className=""
                                            target="_self"
                                            aria-current="false"
                                            href="https://www.bing.com/travel/search?q=narendra+modi&m=hotels&FORM=HTSCOP"
                                            h="ID=images,5108.1"
                                        >
                                            Hotels
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header> */}
      <div id="b_SearchBoxAnswer" />
      <div id="b_content" style={{ marginLeft: '-160px' }}>
        <div id="miniheader" className="anim blue2" role="navigation">
          <div className="mh-content">
            <table role="presentation">
              <tbody>
                <tr>
                  <td id="miniheader_searchbox" />
                  <td>
                    <div id="miniheader_data">
                      <span className="relatedGroup" type="RelatedSearch">
                        <div className="lt">
                          <h2
                            className=""
                            aria-label="Top suggestions for narendra modi"
                          >
                            Top suggestions for narendra modi
                          </h2>
                        </div>
                        <div id="header_smarttabs" className="header_exp col">
                          {
                            BingData.map((item,index) =>
                            {
                              <div className="sug text underline" key={index}>
                              <a
                                className="itm"
                                aria-label="item.aria_label"
                                title="item.title"
                                href="item.href"
                                h="item.h"
                              >
                                <img
                                  height={42}
                                  width={42}
                                  src2="item.src2"
                                  data-priority={2}
                                  alt="item.alt"
                                />
                                <div className="it">
                                  <strong>
                                    {item.first_name}
                                    <br />
                                    {item.last_name}
                                  </strong>
                                </div>
                              </a>
                            </div>
                            })
                          }

                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Modi Young"
                              title="Search for: Modi Young"
                              href="search113c.html?q=Modi+Young&FORM=IRMHRS"
                              h="ID=images,5521.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Modi+Young&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Modi Young"
                              />
                              <div className="it">
                                Modi
                                <br />
                                <strong>Young</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Full Size"
                              title="Search for: Narendra Modi Full Size"
                              href="search6e23.html?q=Narendra+Modi+Full+Size&FORM=IRMHRS"
                              h="ID=images,5523.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Full+Size&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Full Size"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Full Size</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Wallpaper"
                              title="Search for: Narendra Modi Wallpaper"
                              href="searcha3d6.html?q=Narendra+Modi+Wallpaper&FORM=IRMHRS"
                              h="ID=images,5525.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Wallpaper&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Wallpaper"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Wallpaper</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Virat Kohli"
                              title="Search for: Virat Kohli"
                              href="search7736.html?q=Virat+Kohli&FORM=IRMHRS"
                              h="ID=images,5527.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Virat+Kohli&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Virat Kohli"
                              />
                              <div className="it">
                                <strong>
                                  Virat <br />
                                  Kohli
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Modi PNG"
                              title="Search for: Modi PNG"
                              href="searcha4cf.html?q=Modi+PNG&FORM=IRMHRS"
                              h="ID=images,5529.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Modi+PNG&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Modi PNG"
                              />
                              <div className="it">
                                Modi
                                <br />
                                <strong>PNG</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi HD Wallpapers"
                              title="Search for: Narendra Modi HD Wallpapers"
                              href="search958a.html?q=Narendra+Modi+HD+Wallpapers&FORM=IRMHRS"
                              h="ID=images,5531.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+HD+Wallpapers&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi HD Wallpapers"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>HD Wallpapers</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Dress"
                              title="Search for: Narendra Modi Dress"
                              href="search9676.html?q=Narendra+Modi+Dress&FORM=IRMHRS"
                              h="ID=images,5533.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Dress&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Dress"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Dress</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Shashi Tharoor"
                              title="Search for: Shashi Tharoor"
                              href="search98ac.html?q=Shashi+Tharoor&FORM=IRMHRS"
                              h="ID=images,5535.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Shashi+Tharoor&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Shashi Tharoor"
                              />
                              <div className="it">
                                <strong>
                                  Shashi <br />
                                  Tharoor
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Abdul Kalam"
                              title="Search for: Abdul Kalam"
                              href="searchab76.html?q=Abdul+Kalam&FORM=IRMHRS"
                              h="ID=images,5537.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Abdul+Kalam&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Abdul Kalam"
                              />
                              <div className="it">
                                <strong>
                                  Abdul <br />
                                  Kalam
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Quotes"
                              title="Search for: Narendra Modi Quotes"
                              href="searchf051.html?q=Narendra+Modi+Quotes&FORM=IRMHRS"
                              h="ID=images,5539.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Quotes&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Quotes"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Quotes</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Shri Narendra Modi"
                              title="Search for: Shri Narendra Modi"
                              href="searchf962.html?q=Shri+Narendra+Modi&FORM=IRMHRS"
                              h="ID=images,5541.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Shri+Narendra+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Shri Narendra Modi"
                              />
                              <div className="it">
                                <strong>Shri</strong>
                                <br />
                                Narendra Modi
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Family"
                              title="Search for: Narendra Modi Family"
                              href="search02ba.html?q=Narendra+Modi+Family&FORM=IRMHRS"
                              h="ID=images,5543.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Family&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Family"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Family</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Rohit Sharma"
                              title="Search for: Rohit Sharma"
                              href="search7e68.html?q=Rohit+Sharma&FORM=IRMHRS"
                              h="ID=images,5545.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Rohit+Sharma&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Rohit Sharma"
                              />
                              <div className="it">
                                <strong>
                                  Rohit <br />
                                  Sharma
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Amit Shah"
                              title="Search for: Amit Shah"
                              href="search5d06.html?q=Amit+Shah&FORM=IRMHRS"
                              h="ID=images,5547.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Amit+Shah&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Amit Shah"
                              />
                              <div className="it">
                                <strong>
                                  Amit <br />
                                  Shah
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Jawaharlal Nehru"
                              title="Search for: Jawaharlal Nehru"
                              href="searchdf50.html?q=Jawaharlal+Nehru&FORM=IRMHRS"
                              h="ID=images,5549.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Jawaharlal+Nehru&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Jawaharlal Nehru"
                              />
                              <div className="it">
                                <strong>
                                  Jawaharlal <br />
                                  Nehru
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="BJP India"
                              title="Search for: BJP India"
                              href="search80ba.html?q=BJP+India&FORM=IRMHRS"
                              h="ID=images,5551.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=BJP+India&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="BJP India"
                              />
                              <div className="it">
                                <strong>
                                  BJP <br />
                                  India
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi and Trump"
                              title="Search for: Narendra Modi and Trump"
                              href="search9a67.html?q=Narendra+Modi+and+Trump&FORM=IRMHRS"
                              h="ID=images,5553.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+and+Trump&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi and Trump"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>and Trump</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Beard"
                              title="Search for: Narendra Modi Beard"
                              href="searchd8bc.html?q=Narendra+Modi+Beard&FORM=IRMHRS"
                              h="ID=images,5555.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Beard&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Beard"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Beard</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Modi Temple"
                              title="Search for: Modi Temple"
                              href="search8a85.html?q=Modi+Temple&FORM=IRMHRS"
                              h="ID=images,5557.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Modi+Temple&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Modi Temple"
                              />
                              <div className="it">
                                Modi
                                <br />
                                <strong>Temple</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Uddhav Thackeray"
                              title="Search for: Uddhav Thackeray"
                              href="search1b73.html?q=Uddhav+Thackeray&FORM=IRMHRS"
                              h="ID=images,5559.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Uddhav+Thackeray&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Uddhav Thackeray"
                              />
                              <div className="it">
                                <strong>
                                  Uddhav <br />
                                  Thackeray
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Gulte"
                              title="Search for: Gulte"
                              href="search97c9.html?q=Gulte&FORM=IRMHRS"
                              h="ID=images,5561.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Gulte&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Gulte"
                              />
                              <div className="it">
                                <strong>Gulte</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Photo Gallery"
                              title="Search for: Narendra Modi Photo Gallery"
                              href="searchaffc.html?q=Narendra+Modi+Photo+Gallery&FORM=IRMHRS"
                              h="ID=images,5563.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Photo+Gallery&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Photo Gallery"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Photo Gallery</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi House Photo"
                              title="Search for: Narendra Modi House Photo"
                              href="searchae51.html?q=Narendra+Modi+House+Photo&FORM=IRMHRS"
                              h="ID=images,5565.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+House+Photo&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi House Photo"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>House Photo</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Pm Modi"
                              title="Search for: Pm Modi"
                              href="search2d06.html?q=Pm+Modi&FORM=IRMHRS"
                              h="ID=images,5567.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Pm+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Pm Modi"
                              />
                              <div className="it">
                                <strong>Pm</strong>
                                <br />
                                Modi
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Election"
                              title="Search for: Narendra Modi Election"
                              href="searche59f.html?q=Narendra+Modi+Election&FORM=IRMHRS"
                              h="ID=images,5569.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Election&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Election"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Election</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Ji"
                              title="Search for: Narendra Modi Ji"
                              href="search7948.html?q=Narendra+Modi+Ji&FORM=IRMHRS"
                              h="ID=images,5571.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Ji&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Ji"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Ji</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Xi Jinping"
                              title="Search for: Xi Jinping"
                              href="search09a4.html?q=Xi+Jinping&FORM=IRMHRS"
                              h="ID=images,5573.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Xi+Jinping&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Xi Jinping"
                              />
                              <div className="it">
                                <strong>
                                  Xi <br />
                                  Jinping
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Funny Images"
                              title="Search for: Narendra Modi Funny Images"
                              href="searchf44d.html?q=Narendra+Modi+Funny+Images&FORM=IRMHRS"
                              h="ID=images,5575.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Funny+Images&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Funny Images"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Funny Images</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Old Photos"
                              title="Search for: Narendra Modi Old Photos"
                              href="searchf4aa.html?q=Narendra+Modi+Old+Photos&FORM=IRMHRS"
                              h="ID=images,5577.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Old+Photos&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Old Photos"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Old Photos</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Modi RSS"
                              title="Search for: Modi RSS"
                              href="searchad1e.html?q=Modi+RSS&FORM=IRMHRS"
                              h="ID=images,5579.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Modi+RSS&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Modi RSS"
                              />
                              <div className="it">
                                Modi
                                <br />
                                <strong>RSS</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Wife and Children"
                              title="Search for: Narendra Modi Wife and Children"
                              href="searchb847.html?q=Narendra+Modi+Wife+and+Children&FORM=IRMHRS"
                              h="ID=images,5581.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Wife+and+Children&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Wife and Children"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Wife and Children</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Baba Ramdev"
                              title="Search for: Baba Ramdev"
                              href="search4a33.html?q=Baba+Ramdev&FORM=IRMHRS"
                              h="ID=images,5583.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Baba+Ramdev&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Baba Ramdev"
                              />
                              <div className="it">
                                <strong>
                                  Baba <br />
                                  Ramdev
                                </strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Narendra Modi Latest Pic"
                              title="Search for: Narendra Modi Latest Pic"
                              href="search7e19.html?q=Narendra+Modi+Latest+Pic&FORM=IRMHRS"
                              h="ID=images,5585.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Latest+Pic&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Narendra Modi Latest Pic"
                              />
                              <div className="it">
                                Narendra Modi
                                <br />
                                <strong>Latest Pic</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Modi Government"
                              title="Search for: Modi Government"
                              href="search87fb.html?q=Modi+Government&FORM=IRMHRS"
                              h="ID=images,5587.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Modi+Government&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Modi Government"
                              />
                              <div className="it">
                                Modi
                                <br />
                                <strong>Government</strong>
                              </div>
                            </a>
                          </div>
                          <div className="sug text underline">
                            <a
                              className="itm"
                              aria-label="Rajnath Singh"
                              title="Search for: Rajnath Singh"
                              href="search70af.html?q=Rajnath+Singh&FORM=IRMHRS"
                              h="ID=images,5589.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Rajnath+Singh&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Rajnath Singh"
                              />
                              <div className="it">
                                <strong>
                                  Rajnath <br />
                                  Singh
                                </strong>
                              </div>
                            </a>
                          </div>
                        </div>
                      </span>
                      <span className="relatedGroup" type="Cluster">
                        <div className="lt">
                          <h2
                            className=""
                            aria-label="Refine your search for narendra modi"
                          >
                            Refine your search for narendra modi
                          </h2>
                        </div>
                        <div id="header_cluster" className="header_exp">
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Father"
                              title="Search for: Father"
                              href="searchf02d.html?q=Narendra+Modi+Father&FORM=IRMHTS"
                              h="ID=images,5596.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Father&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Father"
                              />
                              <div className="it">Father</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Stadium"
                              title="Search for: Stadium"
                              href="search02c2.html?q=Narendra+Modi+Stadium&FORM=IRMHTS"
                              h="ID=images,5598.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Stadium&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Stadium"
                              />
                              <div className="it">Stadium</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="News"
                              title="Search for: News"
                              href="search98a7.html?q=Narendra+Modi+News&FORM=IRMHTS"
                              h="ID=images,5600.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+News&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="News"
                              />
                              <div className="it">News</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Children"
                              title="Search for: Children"
                              href="searchfea5.html?q=Narendra+Modi+Children&FORM=IRMHTS"
                              h="ID=images,5602.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Children&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Children"
                              />
                              <div className="it">Children</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="India"
                              title="Search for: India"
                              href="searche704.html?q=India+Narendra+Modi&FORM=IRMHTS"
                              h="ID=images,5604.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=India+Narendra+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="India"
                              />
                              <div className="it">India</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Personal Life"
                              title="Search for: Personal Life"
                              href="searchf2f3.html?q=Narendra+Modi+Personal+Life&FORM=IRMHTS"
                              h="ID=images,5606.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Personal+Life&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Personal Life"
                              />
                              <div className="it">
                                Personal <br />
                                Life
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Home"
                              title="Search for: Home"
                              href="search8cab.html?q=Narendra+Modi+Home&FORM=IRMHTS"
                              h="ID=images,5608.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Home&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Home"
                              />
                              <div className="it">Home</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Full Size"
                              title="Search for: Full Size"
                              href="searchefbe.html?q=Narendra+Modi+Full+Size&FORM=IRMHTS"
                              h="ID=images,5610.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Full+Size&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Full Size"
                              />
                              <div className="it">
                                Full <br />
                                Size
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Speech"
                              title="Search for: Speech"
                              href="search533f.html?q=Narendra+Modi+Speech&FORM=IRMHTS"
                              h="ID=images,5612.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Speech&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Speech"
                              />
                              <div className="it">Speech</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Wallpaper"
                              title="Search for: Wallpaper"
                              href="search3dc8.html?q=Narendra+Modi+Wallpaper&FORM=IRMHTS"
                              h="ID=images,5614.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Wallpaper&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Wallpaper"
                              />
                              <div className="it">Wallpaper</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="HD Wallpapers"
                              title="Search for: HD Wallpapers"
                              href="search14e7.html?q=Narendra+Modi+HD+Wallpapers&FORM=IRMHTS"
                              h="ID=images,5616.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+HD+Wallpapers&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="HD Wallpapers"
                              />
                              <div className="it">
                                HD <br />
                                Wallpapers
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Dress"
                              title="Search for: Dress"
                              href="search8e58.html?q=Narendra+Modi+Dress&FORM=IRMHTS"
                              h="ID=images,5618.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Dress&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Dress"
                              />
                              <div className="it">Dress</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Prime Minister"
                              title="Search for: Prime Minister"
                              href="search8a0c.html?q=Prime+Minister+Narendra+Modi&FORM=IRMHTS"
                              h="ID=images,5620.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Prime+Minister+Narendra+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Prime Minister"
                              />
                              <div className="it">
                                Prime <br />
                                Minister
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Quotes"
                              title="Search for: Quotes"
                              href="searchecab.html?q=Narendra+Modi+Quotes&FORM=IRMHTS"
                              h="ID=images,5622.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Quotes&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Quotes"
                              />
                              <div className="it">Quotes</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="HD Pic"
                              title="Search for: HD Pic"
                              href="searcha1b1.html?q=Narendra+Modi+HD+Pic&FORM=IRMHTS"
                              h="ID=images,5624.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+HD+Pic&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="HD Pic"
                              />
                              <div className="it">
                                HD <br />
                                Pic
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Shri"
                              title="Search for: Shri"
                              href="search70fe.html?q=Shri+Narendra+Modi&FORM=IRMHTS"
                              h="ID=images,5626.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Shri+Narendra+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Shri"
                              />
                              <div className="it">Shri</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Family"
                              title="Search for: Family"
                              href="search8e78.html?q=Narendra+Modi+Family&FORM=IRMHTS"
                              h="ID=images,5628.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Family&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Family"
                              />
                              <div className="it">Family</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Pm"
                              title="Search for: Pm"
                              href="search6f5e.html?q=Pm+Narendra+Modi&FORM=IRMHTS"
                              h="ID=images,5630.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Pm+Narendra+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Pm"
                              />
                              <div className="it">Pm</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Trump"
                              title="Search for: Trump"
                              href="searchaebd.html?q=Narendra+Modi+and+Trump&FORM=IRMHTS"
                              h="ID=images,5632.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+and+Trump&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Trump"
                              />
                              <div className="it">Trump</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Beard"
                              title="Search for: Beard"
                              href="search0ead.html?q=Narendra+Modi+Beard&FORM=IRMHTS"
                              h="ID=images,5634.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Beard&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Beard"
                              />
                              <div className="it">Beard</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Birthday"
                              title="Search for: Birthday"
                              href="searchfd30.html?q=Narendra+Modi+Birthday&FORM=IRMHTS"
                              h="ID=images,5636.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Birthday&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Birthday"
                              />
                              <div className="it">Birthday</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Gallery"
                              title="Search for: Gallery"
                              href="search574f.html?q=Narendra+Modi+Photo+Gallery&FORM=IRMHTS"
                              h="ID=images,5638.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Photo+Gallery&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Gallery"
                              />
                              <div className="it">Gallery</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Instagram"
                              title="Search for: Instagram"
                              href="search9134.html?q=Narendra+Modi+Instagram&FORM=IRMHTS"
                              h="ID=images,5640.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Instagram&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Instagram"
                              />
                              <div className="it">Instagram</div>
                            </a>
                          </div>
                        </div>
                      </span>
                      <span className="relatedGroup" type="IntentPlus">
                        <div className="lt">
                          <h2
                            className=""
                            aria-label="Explore more searches like narendra modi"
                          >
                            Explore more searches like narendra modi
                          </h2>
                        </div>
                        <div id="header_intentplus" className="header_exp">
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Damodardas"
                              title="Search for: Damodardas"
                              href="search0d56.html?q=Narendra+Damodardas+Modi&FORM=IRMHIP"
                              h="ID=images,5647.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Damodardas+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Damodardas"
                              />
                              <div className="it">Damodardas</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Récent Pic"
                              title="Search for: Récent Pic"
                              href="search0185.html?q=Narendra+Modi+Recent+Pic&FORM=IRMHIP"
                              h="ID=images,5649.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Recent+Pic&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Récent Pic"
                              />
                              <div className="it">
                                Récent <br />
                                Pic
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="House"
                              title="Search for: House"
                              href="search9e50.html?q=Narendra+Modi+House+Photo&FORM=IRMHIP"
                              h="ID=images,5651.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+House+Photo&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="House"
                              />
                              <div className="it">House</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Election"
                              title="Search for: Election"
                              href="searcha4fb.html?q=Narendra+Modi+Election&FORM=IRMHIP"
                              h="ID=images,5653.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Election&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Election"
                              />
                              <div className="it">Election</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Ji"
                              title="Search for: Ji"
                              href="search95dd.html?q=Narendra+Modi+Ji&FORM=IRMHIP"
                              h="ID=images,5655.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Ji&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Ji"
                              />
                              <div className="it">Ji</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Joe"
                              title="Search for: Joe"
                              href="searchbfdc.html?q=Narendra+Modi+and+Joe&FORM=IRMHIP"
                              h="ID=images,5657.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+and+Joe&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Joe"
                              />
                              <div className="it">Joe</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Wife Children"
                              title="Search for: Wife Children"
                              href="search21bc.html?q=Narendra+Modi+Wife+and+Children&FORM=IRMHIP"
                              h="ID=images,5659.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Wife+and+Children&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Wife Children"
                              />
                              <div className="it">
                                Wife <br />
                                Children
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Latest Pic"
                              title="Search for: Latest Pic"
                              href="searchf05b.html?q=Narendra+Modi+Latest+Pic&FORM=IRMHIP"
                              h="ID=images,5661.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Latest+Pic&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Latest Pic"
                              />
                              <div className="it">
                                Latest <br />
                                Pic
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Yoga"
                              title="Search for: Yoga"
                              href="searchc111.html?q=Narendra+Modi+Yoga&FORM=IRMHIP"
                              h="ID=images,5663.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Yoga&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Yoga"
                              />
                              <div className="it">Yoga</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Clip Art"
                              title="Search for: Clip Art"
                              href="search92f8.html?q=Narendra+Modi+Clip+Art&FORM=IRMHIP"
                              h="ID=images,5665.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Clip+Art&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Clip Art"
                              />
                              <div className="it">
                                Clip <br />
                                Art
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="BJP"
                              title="Search for: BJP"
                              href="search37a4.html?q=Narendra+Modi+BJP&FORM=IRMHIP"
                              h="ID=images,5667.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+BJP&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="BJP"
                              />
                              <div className="it">BJP</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Portrait"
                              title="Search for: Portrait"
                              href="searchdc2e.html?q=Narendra+Modi+Portrait&FORM=IRMHIP"
                              h="ID=images,5669.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Portrait&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Portrait"
                              />
                              <div className="it">Portrait</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Fashion"
                              title="Search for: Fashion"
                              href="searche613.html?q=Narendra+Modi+Fashion&FORM=IRMHIP"
                              h="ID=images,5671.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Fashion&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Fashion"
                              />
                              <div className="it">Fashion</div>
                            </a>
                          </div>
                        </div>
                      </span>
                      <span className="relatedGroup" type="EntityPlus">
                        <div className="lt">
                          <h2
                            className=""
                            aria-label="People interested in narendra modi also searched for "
                          >
                            People interested in narendra modi also searched for{' '}
                          </h2>
                        </div>
                        <div id="header_entityplus" className="header_exp">
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Childhood"
                              title="Search for: Childhood"
                              href="searche3c0.html?q=Narendra+Modi+Childhood&FORM=IRMHEP"
                              h="ID=images,5678.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Childhood&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Childhood"
                              />
                              <div className="it">Childhood</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Namaste"
                              title="Search for: Namaste"
                              href="searchf2b3.html?q=Narendra+Modi+Namaste&FORM=IRMHEP"
                              h="ID=images,5680.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Namaste&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Namaste"
                              />
                              <div className="it">Namaste</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Sketch"
                              title="Search for: Sketch"
                              href="search7e88.html?q=Narendra+Modi+Sketch&FORM=IRMHEP"
                              h="ID=images,5682.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Sketch&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Sketch"
                              />
                              <div className="it">Sketch</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Movie"
                              title="Search for: Movie"
                              href="search799d.html?q=Narendra+Modi+Movie&FORM=IRMHEP"
                              h="ID=images,5684.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Movie&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Movie"
                              />
                              <div className="it">Movie</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Time"
                              title="Search for: Time"
                              href="search86c5.html?q=Narendra+Modi+Time&FORM=IRMHEP"
                              h="ID=images,5686.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Time&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Time"
                              />
                              <div className="it">Time</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="PNG"
                              title="Search for: PNG"
                              href="search8ca1.html?q=Narendra+Modi+PNG&FORM=IRMHEP"
                              h="ID=images,5688.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+PNG&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="PNG"
                              />
                              <div className="it">PNG</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Happy Birthday"
                              title="Search for: Happy Birthday"
                              href="searcha4d9.html?q=Happy+Birthday+Narendra+Modi&FORM=IRMHEP"
                              h="ID=images,5690.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Happy+Birthday+Narendra+Modi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Happy Birthday"
                              />
                              <div className="it">
                                Happy <br />
                                Birthday
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Standing"
                              title="Search for: Standing"
                              href="search9844.html?q=Narendra+Modi+Standing&FORM=IRMHEP"
                              h="ID=images,5692.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Standing&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Standing"
                              />
                              <div className="it">Standing</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Memes"
                              title="Search for: Memes"
                              href="search566f.html?q=Narendra+Modi+Memes&FORM=IRMHEP"
                              h="ID=images,5694.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Memes&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Memes"
                              />
                              <div className="it">Memes</div>
                            </a>
                          </div>
                        </div>
                      </span>
                      <span className="relatedGroup" type="RelatedTopics">
                        <div className="lt">
                          <h2
                            className=""
                            aria-label="People interested in narendra modi also searched for "
                          >
                            People interested in narendra modi also searched for{' '}
                          </h2>
                        </div>
                        <div id="header_rt" className="header_exp">
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Atal Bihari Vajpayee"
                              title="Search for: Atal Bihari Vajpayee"
                              href="searchaea9.html?q=Atal+Bihari+Vajpayee&FORM=IRMHRE"
                              h="ID=images,5701.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Atal+Bihari+Vajpayee&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Atal Bihari Vajpayee"
                              />
                              <div className="it">
                                Atal Bihari <br />
                                Vajpayee
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Pranab Mukherjee"
                              title="Search for: Pranab Mukherjee"
                              href="search86c9.html?q=Pranab+Mukherjee&FORM=IRMHRE"
                              h="ID=images,5703.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Pranab+Mukherjee&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Pranab Mukherjee"
                              />
                              <div className="it">
                                Pranab <br />
                                Mukherjee
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Abdul Kalam"
                              title="Search for: Abdul Kalam"
                              href="search0ece.html?q=APJ+Abdul+Kalam&FORM=IRMHRE"
                              h="ID=images,5705.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=APJ+Abdul+Kalam&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Abdul Kalam"
                              />
                              <div className="it">
                                Abdul <br />
                                Kalam
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Indira Gandhi"
                              title="Search for: Indira Gandhi"
                              href="search30e5.html?q=Indira+Gandhi&FORM=IRMHRE"
                              h="ID=images,5707.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Indira+Gandhi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Indira Gandhi"
                              />
                              <div className="it">
                                Indira <br />
                                Gandhi
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Arvind Kejriwal"
                              title="Search for: Arvind Kejriwal"
                              href="searchdce0.html?q=Arvind+Kejriwal&FORM=IRMHRE"
                              h="ID=images,5709.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Arvind+Kejriwal&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Arvind Kejriwal"
                              />
                              <div className="it">
                                Arvind <br />
                                Kejriwal
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Rajiv Gandhi"
                              title="Search for: Rajiv Gandhi"
                              href="search1be3.html?q=Rajiv+Gandhi&FORM=IRMHRE"
                              h="ID=images,5711.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Rajiv+Gandhi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Rajiv Gandhi"
                              />
                              <div className="it">
                                Rajiv <br />
                                Gandhi
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Mukesh Ambani"
                              title="Search for: Mukesh Ambani"
                              href="search41d1.html?q=Mukesh+Ambani&FORM=IRMHRE"
                              h="ID=images,5713.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Mukesh+Ambani&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Mukesh Ambani"
                              />
                              <div className="it">
                                Mukesh <br />
                                Ambani
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Manmohan Singh"
                              title="Search for: Manmohan Singh"
                              href="search6611.html?q=Manmohan+Singh+Actor&FORM=IRMHRE"
                              h="ID=images,5715.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Manmohan+Singh+Actor&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Manmohan Singh"
                              />
                              <div className="it">
                                Manmohan <br />
                                Singh
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Sushma Swaraj"
                              title="Search for: Sushma Swaraj"
                              href="searche9a4.html?q=Sushma+Swaraj&FORM=IRMHRE"
                              h="ID=images,5717.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Sushma+Swaraj&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Sushma Swaraj"
                              />
                              <div className="it">
                                Sushma <br />
                                Swaraj
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Rahul Gandhi"
                              title="Search for: Rahul Gandhi"
                              href="search5ec4.html?q=Rahul+Gandhi&FORM=IRMHRE"
                              h="ID=images,5719.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Rahul+Gandhi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Rahul Gandhi"
                              />
                              <div className="it">
                                Rahul <br />
                                Gandhi
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Anna Hazare"
                              title="Search for: Anna Hazare"
                              href="search8995.html?q=Anna+Hazare&FORM=IRMHRE"
                              h="ID=images,5721.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Anna+Hazare&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Anna Hazare"
                              />
                              <div className="it">
                                Anna <br />
                                Hazare
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Arun Jaitley"
                              title="Search for: Arun Jaitley"
                              href="search80a3.html?q=Arun+Jaitley&FORM=IRMHRE"
                              h="ID=images,5723.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Arun+Jaitley&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Arun Jaitley"
                              />
                              <div className="it">
                                Arun <br />
                                Jaitley
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Pratibha Patil"
                              title="Search for: Pratibha Patil"
                              href="search0dd5.html?q=Pratibha+Patil&FORM=IRMHRE"
                              h="ID=images,5725.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse2.mm.bing.net/th?q=Pratibha+Patil&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Pratibha Patil"
                              />
                              <div className="it">
                                Pratibha <br />
                                Patil
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Subhash Chandra Bose"
                              title="Search for: Subhash Chandra Bose"
                              href="search1e5e.html?q=Subhash+Chandra+Bose&FORM=IRMHRE"
                              h="ID=images,5727.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Subhash+Chandra+Bose&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Subhash Chandra Bose"
                              />
                              <div className="it">
                                Subhash Chandra <br />
                                Bose
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Sonia Gandhi"
                              title="Search for: Sonia Gandhi"
                              href="search2ee5.html?q=Sonia+Gandhi&FORM=IRMHRE"
                              h="ID=images,5729.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse4.mm.bing.net/th?q=Sonia+Gandhi&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Sonia Gandhi"
                              />
                              <div className="it">
                                Sonia <br />
                                Gandhi
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Nathuram Godse"
                              title="Search for: Nathuram Godse"
                              href="search6129.html?q=Nathuram+Godse&FORM=IRMHRE"
                              h="ID=images,5731.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Nathuram+Godse&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Nathuram Godse"
                              />
                              <div className="it">
                                Nathuram <br />
                                Godse
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Gujarat"
                              title="Search for: Gujarat"
                              href="searchff80.html?q=Gujarat&FORM=IRMHRE"
                              h="ID=images,5733.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Gujarat&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Gujarat"
                              />
                              <div className="it">Gujarat</div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Dhirubhai Ambani"
                              title="Search for: Dhirubhai Ambani"
                              href="searchd944.html?q=Dhirubhai+Ambani&FORM=IRMHRE"
                              h="ID=images,5735.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Dhirubhai+Ambani&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Dhirubhai Ambani"
                              />
                              <div className="it">
                                Dhirubhai <br />
                                Ambani
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Gujarati People"
                              title="Search for: Gujarati People"
                              href="searcha141.html?q=Gujarati+People&FORM=IRMHRE"
                              h="ID=images,5737.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse1.mm.bing.net/th?q=Gujarati+People&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Gujarati People"
                              />
                              <div className="it">
                                Gujarati <br />
                                People
                              </div>
                            </a>
                          </div>
                          <div className="sug underline">
                            <a
                              className="itm"
                              aria-label="Bharatiya Janata Party"
                              title="Search for: Bharatiya Janata Party"
                              href="search1afe.html?q=Bharatiya+Janata+Party&FORM=IRMHRE"
                              h="ID=images,5739.1"
                            >
                              <img
                                height={42}
                                width={42}
                                src2="https://tse3.mm.bing.net/th?q=Bharatiya+Janata+Party&w=42&h=42&c=1&p=0&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                data-priority={2}
                                alt="Bharatiya Janata Party"
                              />
                              <div className="it">
                                Bharatiya Janata <br />
                                Party
                              </div>
                            </a>
                          </div>
                        </div>
                      </span>
                    </div>
                  </td>
                  <td id="miniheader_switch">
                    <span className="indic" />
                    <span className="indic" />
                    <span className="indic" />
                    <span className="indic" />
                    <span className="indic" />
                  </td>
                </tr>
              </tbody>
            </table>
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
        <iframe id="historyFrame" style={{ display: 'none' }} />
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
                              style={{ background: '#f33' }}
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
                              style={{ background: '#f93' }}
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
                              style={{ background: '#ff0' }}
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
                              style={{ background: '#3c3' }}
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
                              style={{ background: '#088' }}
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
                              style={{ background: '#33c' }}
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
                              style={{ background: '#939' }}
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
                              style={{ background: '#f9c' }}
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
                              style={{ background: '#963' }}
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
                              style={{ background: '#000' }}
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
                              style={{ background: '#ccc' }}
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
                              style={{ background: '#fff' }}
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
                      <span className="ftrP12">
                        Free to modify, share, and use
                      </span>
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
              <div
                id="rfCarousel"
                className="carousel b_canvas"
                data-feedbk-id=""
              >
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
                        <ol className="items">
                          <li className="item col">
                            <a
                              title="Search for: Manmohan Singh"
                              className="suggestion-item has-foreground-img"
                              href="search034a.html?q=Manmohan+Singh&FORM=RESTAB"
                              h="ID=images,6173.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src="https://tse1.mm.bing.net/th?q=Manmohan+Singh&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  alt="Manmohan Singh"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Manmohan
                                    <br />
                                    Singh
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Biography"
                              className="suggestion-item has-foreground-img"
                              href="search6bca.html?q=Narendra+Modi+Biography&FORM=RESTAB"
                              h="ID=images,6174.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src="https://tse2.mm.bing.net/th?q=Narendra+Modi+Biography&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  alt="Narendra Modi Biography"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Biography</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Cartoon"
                              className="suggestion-item has-foreground-img"
                              href="searchcec8.html?q=Narendra+Modi+Cartoon&FORM=RESTAB"
                              h="ID=images,6175.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src="https://tse3.mm.bing.net/th?q=Narendra+Modi+Cartoon&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  alt="Narendra Modi Cartoon"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Cartoon</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi's Son"
                              className="suggestion-item has-foreground-img"
                              href="searchdbb1.html?q=Narendra+Modi%27s+Son&FORM=RESTAB"
                              h="ID=images,6176.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src="https://tse3.mm.bing.net/th?q=Narendra+Modi%27s+Son&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  alt="Narendra Modi's Son"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi's
                                  <br />
                                  <strong>Son</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Drawing"
                              className="suggestion-item has-foreground-img"
                              href="search97d8.html?q=Narendra+Modi+Drawing&FORM=RESTAB"
                              h="ID=images,6177.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src="https://tse3.mm.bing.net/th?q=Narendra+Modi+Drawing&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  alt="Narendra Modi Drawing"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Drawing</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: BJP"
                              className="suggestion-item has-foreground-img"
                              href="search378e.html?q=BJP&FORM=RESTAB"
                              h="ID=images,6178.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src="https://tse3.mm.bing.net/th?q=BJP&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  alt="BJP"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>BJP</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: BJP Modi"
                              className="suggestion-item has-foreground-img"
                              href="search304f.html?q=BJP+Modi&FORM=RESTAB"
                              h="ID=images,6179.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=BJP+Modi&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="BJP Modi"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>BJP</strong>
                                  <br />
                                  Modi
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Married"
                              className="suggestion-item has-foreground-img"
                              href="search6c2a.html?q=Narendra+Modi+Married&FORM=RESTAB"
                              h="ID=images,6180.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Married&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Married"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Married</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Mother"
                              className="suggestion-item has-foreground-img"
                              href="search4008.html?q=Narendra+Modi+Mother&FORM=RESTAB"
                              h="ID=images,6181.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Mother&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Mother"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Mother</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Stadium"
                              className="suggestion-item has-foreground-img"
                              href="search5be8.html?q=Narendra+Modi+Stadium&FORM=RESTAB"
                              h="ID=images,6182.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Stadium&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Stadium"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Stadium</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi with Hijab"
                              className="suggestion-item has-foreground-img"
                              href="search7ba1.html?q=Narendra+Modi+with+Hijab&FORM=RESTAB"
                              h="ID=images,6183.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+with+Hijab&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi with Hijab"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>with Hijab</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Indian PM Narendra Modi"
                              className="suggestion-item has-foreground-img"
                              href="search759c.html?q=Indian+PM+Narendra+Modi&FORM=RESTAB"
                              h="ID=images,6184.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Indian+PM+Narendra+Modi&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Indian PM Narendra Modi"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>Indian PM</strong>
                                  <br />
                                  Narendra Modi
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Nitish Kumar"
                              className="suggestion-item has-foreground-img"
                              href="search93e7.html?q=Nitish+Kumar&FORM=RESTAB"
                              h="ID=images,6185.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Nitish+Kumar&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Nitish Kumar"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Nitish
                                    <br />
                                    Kumar
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Modi Ji"
                              className="suggestion-item has-foreground-img"
                              href="searche2be.html?q=Modi+Ji&FORM=RESTAB"
                              h="ID=images,6186.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Modi+Ji&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Modi Ji"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Modi
                                  <br />
                                  <strong>Ji</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Father"
                              className="suggestion-item has-foreground-img"
                              href="searchc7c3.html?q=Narendra+Modi+Father&FORM=RESTAB"
                              h="ID=images,6187.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Father&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Father"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Father</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi News"
                              className="suggestion-item has-foreground-img"
                              href="search3eea.html?q=Narendra+Modi+News&FORM=RESTAB"
                              h="ID=images,6188.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+News&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi News"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>News</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Children"
                              className="suggestion-item has-foreground-img"
                              href="search8166.html?q=Narendra+Modi+Children&FORM=RESTAB"
                              h="ID=images,6189.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Children&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Children"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Children</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Ratan Tata"
                              className="suggestion-item has-foreground-img"
                              href="searchc502.html?q=Ratan+Tata&FORM=RESTAB"
                              h="ID=images,6190.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Ratan+Tata&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Ratan Tata"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Ratan
                                    <br />
                                    Tata
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Personal Life"
                              className="suggestion-item has-foreground-img"
                              href="search0455.html?q=Narendra+Modi+Personal+Life&FORM=RESTAB"
                              h="ID=images,6191.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Personal+Life&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Personal Life"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Personal Life</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Home"
                              className="suggestion-item has-foreground-img"
                              href="searchb89f.html?q=Narendra+Modi+Home&FORM=RESTAB"
                              h="ID=images,6192.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Home&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Home"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Home</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Young Photos"
                              className="suggestion-item has-foreground-img"
                              href="searchadcd.html?q=Narendra+Modi+Young+Photos&FORM=RESTAB"
                              h="ID=images,6193.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Young+Photos&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Young Photos"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Young Photos</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Imran Khan"
                              className="suggestion-item has-foreground-img"
                              href="searche85e.html?q=Imran+Khan&FORM=RESTAB"
                              h="ID=images,6194.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Imran+Khan&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Imran Khan"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Imran
                                    <br />
                                    Khan
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Modi Young"
                              className="suggestion-item has-foreground-img"
                              href="searchb916.html?q=Modi+Young&FORM=RESTAB"
                              h="ID=images,6195.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Modi+Young&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Modi Young"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Modi
                                  <br />
                                  <strong>Young</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Full Size"
                              className="suggestion-item has-foreground-img"
                              href="searchba11.html?q=Narendra+Modi+Full+Size&FORM=RESTAB"
                              h="ID=images,6196.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Full+Size&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Full Size"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Full Size</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Wallpaper"
                              className="suggestion-item has-foreground-img"
                              href="searchf4cc.html?q=Narendra+Modi+Wallpaper&FORM=RESTAB"
                              h="ID=images,6197.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Wallpaper&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Wallpaper"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Wallpaper</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Virat Kohli"
                              className="suggestion-item has-foreground-img"
                              href="searchbd88.html?q=Virat+Kohli&FORM=RESTAB"
                              h="ID=images,6198.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Virat+Kohli&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Virat Kohli"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Virat
                                    <br />
                                    Kohli
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Modi PNG"
                              className="suggestion-item has-foreground-img"
                              href="search0764.html?q=Modi+PNG&FORM=RESTAB"
                              h="ID=images,6199.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Modi+PNG&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Modi PNG"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Modi
                                  <br />
                                  <strong>PNG</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi HD Wallpapers"
                              className="suggestion-item has-foreground-img"
                              href="searchd9b6.html?q=Narendra+Modi+HD+Wallpapers&FORM=RESTAB"
                              h="ID=images,6200.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+HD+Wallpapers&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi HD Wallpapers"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>HD Wallpapers</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Dress"
                              className="suggestion-item has-foreground-img"
                              href="searchb49a.html?q=Narendra+Modi+Dress&FORM=RESTAB"
                              h="ID=images,6201.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Dress&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Dress"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Dress</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Shashi Tharoor"
                              className="suggestion-item has-foreground-img"
                              href="searchba1a.html?q=Shashi+Tharoor&FORM=RESTAB"
                              h="ID=images,6202.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Shashi+Tharoor&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Shashi Tharoor"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Shashi
                                    <br />
                                    Tharoor
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Abdul Kalam"
                              className="suggestion-item has-foreground-img"
                              href="search3e4e.html?q=Abdul+Kalam&FORM=RESTAB"
                              h="ID=images,6203.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Abdul+Kalam&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Abdul Kalam"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Abdul
                                    <br />
                                    Kalam
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Quotes"
                              className="suggestion-item has-foreground-img"
                              href="search8717.html?q=Narendra+Modi+Quotes&FORM=RESTAB"
                              h="ID=images,6204.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Quotes&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Quotes"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Quotes</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Shri Narendra Modi"
                              className="suggestion-item has-foreground-img"
                              href="searcha16a.html?q=Shri+Narendra+Modi&FORM=RESTAB"
                              h="ID=images,6205.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Shri+Narendra+Modi&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Shri Narendra Modi"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>Shri</strong>
                                  <br />
                                  Narendra Modi
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Family"
                              className="suggestion-item has-foreground-img"
                              href="search41d1-2.html?q=Narendra+Modi+Family&FORM=RESTAB"
                              h="ID=images,6206.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+Family&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Family"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Family</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Rohit Sharma"
                              className="suggestion-item has-foreground-img"
                              href="search4718.html?q=Rohit+Sharma&FORM=RESTAB"
                              h="ID=images,6207.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Rohit+Sharma&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Rohit Sharma"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Rohit
                                    <br />
                                    Sharma
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Amit Shah"
                              className="suggestion-item has-foreground-img"
                              href="searchf074.html?q=Amit+Shah&FORM=RESTAB"
                              h="ID=images,6208.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Amit+Shah&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Amit Shah"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Amit
                                    <br />
                                    Shah
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Jawaharlal Nehru"
                              className="suggestion-item has-foreground-img"
                              href="search1c7a.html?q=Jawaharlal+Nehru&FORM=RESTAB"
                              h="ID=images,6209.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Jawaharlal+Nehru&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Jawaharlal Nehru"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Jawaharlal
                                    <br />
                                    Nehru
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: BJP India"
                              className="suggestion-item has-foreground-img"
                              href="search2bc4.html?q=BJP+India&FORM=RESTAB"
                              h="ID=images,6210.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=BJP+India&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="BJP India"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    BJP
                                    <br />
                                    India
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi and Trump"
                              className="suggestion-item has-foreground-img"
                              href="search2671.html?q=Narendra+Modi+and+Trump&FORM=RESTAB"
                              h="ID=images,6211.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+and+Trump&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi and Trump"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>and Trump</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Beard"
                              className="suggestion-item has-foreground-img"
                              href="search736b.html?q=Narendra+Modi+Beard&FORM=RESTAB"
                              h="ID=images,6212.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Beard&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Beard"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Beard</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Modi Temple"
                              className="suggestion-item has-foreground-img"
                              href="search3944.html?q=Modi+Temple&FORM=RESTAB"
                              h="ID=images,6213.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Modi+Temple&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Modi Temple"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Modi
                                  <br />
                                  <strong>Temple</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Uddhav Thackeray"
                              className="suggestion-item has-foreground-img"
                              href="search93a6.html?q=Uddhav+Thackeray&FORM=RESTAB"
                              h="ID=images,6214.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Uddhav+Thackeray&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Uddhav Thackeray"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Uddhav
                                    <br />
                                    Thackeray
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Gulte"
                              className="suggestion-item has-foreground-img"
                              href="searche804.html?q=Gulte&FORM=RESTAB"
                              h="ID=images,6215.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Gulte&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Gulte"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>Gulte</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Photo Gallery"
                              className="suggestion-item has-foreground-img"
                              href="search72af.html?q=Narendra+Modi+Photo+Gallery&FORM=RESTAB"
                              h="ID=images,6216.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Photo+Gallery&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Photo Gallery"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Photo Gallery</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi House Photo"
                              className="suggestion-item has-foreground-img"
                              href="searchb957.html?q=Narendra+Modi+House+Photo&FORM=RESTAB"
                              h="ID=images,6217.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Narendra+Modi+House+Photo&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi House Photo"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>House Photo</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Pm Modi"
                              className="suggestion-item has-foreground-img"
                              href="search846a.html?q=Pm+Modi&FORM=RESTAB"
                              h="ID=images,6218.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Pm+Modi&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Pm Modi"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>Pm</strong>
                                  <br />
                                  Modi
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Election"
                              className="suggestion-item has-foreground-img"
                              href="search2b84.html?q=Narendra+Modi+Election&FORM=RESTAB"
                              h="ID=images,6219.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse2.mm.bing.net/th?q=Narendra+Modi+Election&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Election"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Election</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Ji"
                              className="suggestion-item has-foreground-img"
                              href="searcha409.html?q=Narendra+Modi+Ji&FORM=RESTAB"
                              h="ID=images,6220.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Ji&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Ji"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Ji</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Xi Jinping"
                              className="suggestion-item has-foreground-img"
                              href="search8ad8.html?q=Xi+Jinping&FORM=RESTAB"
                              h="ID=images,6221.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Xi+Jinping&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Xi Jinping"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Xi
                                    <br />
                                    Jinping
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Funny Images"
                              className="suggestion-item has-foreground-img"
                              href="searchc6db.html?q=Narendra+Modi+Funny+Images&FORM=RESTAB"
                              h="ID=images,6222.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Funny+Images&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Funny Images"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Funny Images</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Old Photos"
                              className="suggestion-item has-foreground-img"
                              href="search3327.html?q=Narendra+Modi+Old+Photos&FORM=RESTAB"
                              h="ID=images,6223.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse3.mm.bing.net/th?q=Narendra+Modi+Old+Photos&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Old Photos"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Old Photos</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Modi RSS"
                              className="suggestion-item has-foreground-img"
                              href="searchae12.html?q=Modi+RSS&FORM=RESTAB"
                              h="ID=images,6224.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Modi+RSS&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Modi RSS"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Modi
                                  <br />
                                  <strong>RSS</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Wife and Children"
                              className="suggestion-item has-foreground-img"
                              href="search274d.html?q=Narendra+Modi+Wife+and+Children&FORM=RESTAB"
                              h="ID=images,6225.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Wife+and+Children&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Wife and Children"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Wife and Children</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Baba Ramdev"
                              className="suggestion-item has-foreground-img"
                              href="search712c.html?q=Baba+Ramdev&FORM=RESTAB"
                              h="ID=images,6226.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Baba+Ramdev&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Baba Ramdev"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Baba
                                    <br />
                                    Ramdev
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Narendra Modi Latest Pic"
                              className="suggestion-item has-foreground-img"
                              href="search48bf.html?q=Narendra+Modi+Latest+Pic&FORM=RESTAB"
                              h="ID=images,6227.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Narendra+Modi+Latest+Pic&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Narendra Modi Latest Pic"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Narendra Modi
                                  <br />
                                  <strong>Latest Pic</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Modi Government"
                              className="suggestion-item has-foreground-img"
                              href="search246a.html?q=Modi+Government&FORM=RESTAB"
                              h="ID=images,6228.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse1.mm.bing.net/th?q=Modi+Government&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Modi Government"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  Modi
                                  <br />
                                  <strong>Government</strong>
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="item col">
                            <a
                              title="Search for: Rajnath Singh"
                              className="suggestion-item has-foreground-img"
                              href="searche7d5.html?q=Rajnath+Singh&FORM=RESTAB"
                              h="ID=images,6229.1"
                            >
                              <div className="cico">
                                <img
                                  height={42}
                                  width={42}
                                  src2="https://tse4.mm.bing.net/th?q=Rajnath+Singh&w=42&h=42&c=7&rs=1&p=0&o=5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1"
                                  data-priority={2}
                                  alt="Rajnath Singh"
                                />
                              </div>
                              <div
                                className="suggestion-title-wrapper"
                                aria-hidden="true"
                              >
                                <span
                                  className="suggestion-title"
                                  aria-hidden="true"
                                >
                                  <strong>
                                    Rajnath
                                    <br />
                                    Singh
                                  </strong>
                                </span>
                              </div>
                            </a>
                          </li>
                        </ol>
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
                      Access your{' '}
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
                            Save to{' '}
                          </span>
                          <span id="svctrlhvrsvd" className="onsvd">
                            Saved to{' '}
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
                          <h6 id="svctrlnewinlineformhdr">
                            Create new collection
                          </h6>
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
          <a
            id="imgcrtor"
            title="Image Creator"
            href="create4d3a.html?form=IRPGEN"
            h="ID=images,6231.1"
          >
            <img
              className="imgclg rms_img"
              width={20}
              height={20}
              src="https://www.bing.com/rp/gNfjWh66umAXY1CGIvRYzJ-0zek.svg"
            />
            <span className="imgcrtor_t">Image Creator</span>
          </a>

          <div style={{ display: 'flex', margin: '0px -20px 20px 0p' }}>
            <Container />
            {/* <SideImage/> */}
          </div>
          <div className="rabi" data-count={0} />
          <div className="rabv">
            Some results have been hidden because they may be inaccessible to
            you.
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
              <img
                alt=""
                src="../sa/simg/Flag_Feedback.png"
                className="flagIcon"
              />
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
                    style={{ display: 'none' }}
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
                    style={{ display: 'none' }}
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
                    style={{ display: 'none' }}
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
      <a
        role="button"
        id="fbpgbt"
        className="cbtn"
        href="#"
        h="ID=images,5151.1"
      >
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
            '\n      .touchQuery .suggestion-title-wrapper {\n         text-align: center\n      }\n\n      .touchQuery .suggestion-title {\n         padding-left: 0px;\n         padding-right: 0px;\n      }\n\n      .touchQuery .suggestion-title,\n      .touchQuery .suggestion-title strong {\n         font-size: 13px;\n         line-height: 1.2em;\n      }\n   ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      #rfCarousel .carousel-controls {\n         height: 48px;\n      }\n\n      #rfCarousel .carousel-scroll-content {\n         margin-left: 0px;\n      }\n\n      #rfCarousel .items,\n      #rfCarousel .car_anL {\n         padding: 0 0px 0 0px;\n      }\n\n      #rfCarousel .car_anL {\n         padding-bottom: 10px;\n      }\n\n      #rfCarousel .carousel-attr,\n      #rfCarousel .noRes {\n         padding-left: 0px;\n      }\n\n      #rfCarousel .item {\n         margin-right: 8px;\n      }\n\n      #rfCarousel .item .card {}\n\n      #rfCarousel .item .card {\n         height: 23px;\n      }\n\n      #rfCarousel .nav_left,\n      #rfCarousel .nav_right {\n         height: 48px;\n         width: 25px;\n      }\n\n      #sw_canvas {\n         padding-top: 0 !important;\n      }\n   ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      .iuscp.maskthumb .iusc:after {\n         content: "This image is inaccessible";\n      }\n   ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      #inline_ip .carousel-controls {\n         height: 185px;\n      }\n\n      #inline_ip .carousel-scroll-content {\n         margin-left: 0px;\n      }\n\n      #inline_ip .items,\n      #inline_ip .car_anL {\n         padding: 0 0px 0 0px;\n      }\n\n      #inline_ip .car_anL {\n         padding-bottom: 10px;\n      }\n\n      #inline_ip .carousel-attr,\n      #inline_ip .noRes {\n         padding-left: 0px;\n      }\n\n      #inline_ip .item {\n         margin-right: 8px;\n      }\n\n      #inline_ip .item .card {\n         width: 120px;\n         margin: 2px 0;\n      }\n\n      #inline_ip .item .card {\n         height: 156px;\n      }\n\n      #inline_ip.carousel .nav_container {\n         top: 50%;\n         border-radius: 50%;\n         margin: 0 20px;\n         margin-top: -28px;\n      }\n\n      #inline_ip .nav_left,\n      #inline_ip .nav_right {\n         height: 56px;\n         width: 56px;\n         bottom: 64px;\n      }\n\n      #inline_ip ol.items li:first-of-type .card {\n         margin-left: 2px;\n      }\n   ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      #mmComponent_images_2>ul {\n         padding-bottom: 8px;\n         width: auto;\n      }\n\n      #mmComponent_images_2>ul>li {\n         padding-right: 8px;\n      }\n\n      #mmComponent_images_2>ul>li:last-child {\n         padding-right: 0;\n      }\n\n      #mmComponent_images_2 {\n         margin-right: -8px;\n      }\n   ',
        }}
      />
    </>
  )
}

export default BingVideo
