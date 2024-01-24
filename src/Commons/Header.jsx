import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import mainLogo from '../BingVideo/google.png'
import './Style.css'
import Avatar from 'react-avatar'
import { FaMedal } from 'react-icons/fa'
import {ImImages,ImNewspaper} from 'react-icons/im'
import {BiSolidVideos} from 'react-icons/bi'
import {MdOutlineSettings} from 'react-icons/md'

const Header = ({ page }) => {
  const { name } = useParams()
  const [searchQuery, setSearchQuery] = useState(name)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    navigate(`/${page}/${searchQuery}`)
  }
  return (
    <>
      <header id="b_header" className="m-3">
        <form onSubmit={handleSearch} id="sb_form" className="hassbi">
          <a className="b_logoArea" target href="/" h="ID=SERP,5050.1">
            <img src={mainLogo} alt="" />
          </a>
          <div className="b_searchboxForm" role="search">
            <div id="sb_search">
              <div id="sb_go_par" data-sbtip="Search the web">
                <div id="b_icon_spyglass" className="sb_icon" />
                <button
                  type="submit"
                  className="b_searchboxSubmit"
                  id="sb_form_go"
                  defaultValue="Search"
                />
              </div>
            </div>
            <input
              className="b_searchbox"
              id="sb_form_q"
              type="search"
              name="q"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Enter your search here"
              placeholder="Ask me anything..."
              maxLength={1000}
              onfocus="_ge('b_header').className='b_focus';"
            />
          </div>
        </form>
        {/* <div
          id="id_h"
          role="complementary"
          aria-label="Account Rewards and Preferences"
          data-priority={2}
        >
          <Avatar name="Dheeraj Kumar" size={40} round={true} />
          <FaMedal
            size={30}
            style={{ marginLeft: '20px', marginRight: '20px' }}
          />
          <span
            id="id_hbfo"
            _iid="SERP.5072"
            className="slide_up nohpfo"
            tabIndex={-1}
            aria-hidden="true"
            aria-labelledby="id_sc"
            aria-modal="true"
            role="menu"
          />
        </div> */}
        <span id="langChange" className="b_hide langLabel">
          <a
            id="langChangeAnchor"
            href="javascript:void(0);"
            h="ID=SERP,5036.1"
          >
            <span id="langLid">English</span>
            <span id="langChev" className="sw_ddbk" />
          </a>
          <div id="langDId" className="langD b_dropdown b_hide">
            <a
              data-noajax={1}
              href="search5f93.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=hi&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5038.1"
            >
              हिंदी
            </a>
            <a
              data-noajax={1}
              href="search4dd4.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=bn&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5039.1"
            >
              বাংলা
            </a>
            <a
              data-noajax={1}
              href="searchefaf.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=ur&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5040.1"
            >
              اردو
            </a>
            <a
              data-noajax={1}
              href="search1ff8.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=pa-guru&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5041.1"
            >
              ਪੰਜਾਬੀ
            </a>
            <a
              data-noajax={1}
              href="search2880.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=mr&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5042.1"
            >
              मराठी
            </a>
            <a
              data-noajax={1}
              href="search6bd0.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=te&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5043.1"
            >
              తెలుగు
            </a>
            <a
              data-noajax={1}
              href="search3990.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=ta&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5044.1"
            >
              தமிழ்
            </a>
            <a
              data-noajax={1}
              href="searchcce4.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=kn&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5045.1"
            >
              ಕನ್ನಡ
            </a>
            <a
              data-noajax={1}
              href="search48a7.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=gu&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5046.1"
            >
              ગુજરાતી
            </a>
            <a
              data-noajax={1}
              href="searchd777.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=ml&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5047.1"
            >
              മലയാളം
            </a>
            <a
              data-noajax={1}
              href="search3d23.html?q=narendra+modi&form=QBLH&sp=-1&ghc=1&lq=0&pq=narendra+mod&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&setlang=or&sid=1E6D20712F1167781D5D32932EB96674"
              h="ID=SERP,5048.1"
            >
              ଓଡ଼ିଆ
            </a>
          </div>
        </span>
        <nav class="navbar navbar-expand-lg navbar-light b_scopebar ">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href={`../result/${name}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    fill="none"
                    style={{ marginRight: '5px' }}
                  >
                    <path
                      fill="#174AE4"
                      className="cdxscopei"
                      d="M5.5 0a5.5 5.5 0 0 1 4.383 8.823l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073-4.147-4.147A5.5 5.5 0 1 1 5.5 0Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                    />
                  </svg>
                  All <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={'../ComingSoon/'}>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: '5px' }}
                  >
                    <path
                      d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.13401 1 1 4.13401 1 8C1 9.21704 1.31054 10.3878 1.89352 11.4249C1.94046 11.5084 1.9621 11.603 1.95692 11.6973L1.94274 11.7912L1.187 14.812L4.21104 14.0583C4.27294 14.0429 4.33662 14.0396 4.39873 14.0479L4.4903 14.0691L4.57701 14.1075C5.61362 14.6898 6.7837 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.74546 8.82312 9.94961 8.58988 9.99194L8.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.25454 5.17688 9.05039 5.41012 9.00806L5.5 9H8.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.74546 10.8231 6.94961 10.5899 6.99194L10.5 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.25454 5.17688 6.05039 5.41012 6.00806L5.5 6H10.5Z"
                      className="cdxscopei"
                      fill="#174AE4"
                    />
                  </svg>
                  Chat
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link  " href={`../images/${name}`}>
                  <ImImages style={{color:'#174AE4',opacity:'0.7',marginRight:'2px'}}/> Images
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href={`../videos/${name}`}>
                  <BiSolidVideos style={{color:'#174AE4',opacity:'0.7',marginRight:'2px'}}/> Videos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href={`../news/${name}`}>
                  <ImNewspaper style={{color:'#174AE4',opacity:'0.7',marginRight:'2px'}}/> News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " >
                  <MdOutlineSettings style={{color:'#174AE4',opacity:'0.7',marginRight:'2px'}}/> Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
