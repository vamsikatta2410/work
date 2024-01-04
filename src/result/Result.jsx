import React from 'react'
import { useEffect, useState } from 'react'
import './Style.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Commons/Header'
import image from '../assets/4.png'
import RelatedSearch from './RelatedSearch'
import Pagination from './Pagination'

function WikiComponent(props) {
  return (
    <div className="wiki_container" style={{ height: '22rem', width: '22rem' }}>
      <img className="wiki_image_content" src="" alt={props.title} />{' '}
      {/*   {props.image} */}
      <div
        className="wiki_heading"
        style={{ textAlign: 'left', marginBottom: '15px', marginLeft: '10px' }}
      >
        <div
          className="main_heading"
          style={{ marginTop: '20px', marginBottom: '10px' }}
        >
          <h2 style={{ fontSize: '40px' }}>
            <span>{props.title}</span>
          </h2>
        </div>
        <div
          className="sun_heading"
          style={{ fontSize: '20px', color: 'chocolate' }}
        >
          <span>{props.description}</span>
        </div>
      </div>
      <div
        className="wiki_details"
        style={{ textAlign: 'left', marginLeft: '10px' }}
      >
        <span>
          {props.extract}{' '}
          <a href={props.page} style={{ textDecoration: 'none' }}>
            read more
          </a>
        </span>
      </div>
    </div>
  )
}
function ResultComponent(props) {
  return (
    <li className="b_algo">
      <div className="b_title">
        <h2>
          <a href={props.link} h="ID=SERP,5292.1">
            {props.title}
          </a>
        </h2>
        <div className="b_suffix b_secondaryText nowrap scs_exp siz23 b_floatrt">
          <a
            className="scs_icn b_hide sc_al"
            tabIndex={-1}
            aria-label="Additional Results"
            href="javascript:void(0)"
            h="ID=SERP,7080.1"
          >
            <span
              className="scs_cls b_hide"
              tabIndex={0}
              title="Close"
              aria-label="Show less"
              role="button"
              aria-expanded="true"
            />
            <span
              className="scs_arw"
              tabIndex={0}
              title="Explore this page"
              aria-label="Show more"
              role="button"
              aria-expanded="false"
            />
          </a>
          <div
            data-priority={2}
            data-sc-metadata='{"entity":"Narendra Modi","scenarios":"2,6,13,14","url":"https://www.britannica.com/biography/Narendra-Modi","agi5qv":"agi5qv4218937785913006128"}'
            data-sc-iid="SERP.7081"
            className="scs_c b_hide cnt_vis_hid scs_load"
          />
        </div>
      </div>
      <div className="b_imgcap_altitle b_imgcap_alattr">
        <div className="b_imagePair square_mp reverse">
          <div className="inner">
            <div>
              {/* <img data-priority={2} height={80} width={80} className="b_circleImage b_ci_image_overlay rms_img" fdopt="False" data-overlaylink="/" aria-hidden="true" title="Explore this image" id="emb1B0392D545" src={props.image} /> */}
              <div id="greyBackgroundModal" onclick="return false" />
            </div>
          </div>
          <div
            className="b_attribution"
            u="3|5094|4802937594642996|jXaG3jOqUP-IH6J3UdURN5ccWGAXP6ee"
            tabIndex={0}
          >
            <cite>{props.displayLink}</cite>
            <span className="c_tlbxTrg">
              <span
                className="c_tlbxH"
                h="BASE:CACHEDPAGEDEFAULT"
                k="SERP,5293.1"
              />
            </span>
          </div>
          <p className="b_lineclamp2 b_algoSlug">
            <span className="algoSlug_icon" data-priority={2}>
              Web
            </span>
            <span className="news_dt">
              <strong>{props.snippet}</strong>
            </span>
          </p>
          <div className="b_factrow b_twofr">
            {/* <div className="b_vlist2col">
                            <ul>
                                <li>
                                    <div><a href="search1c9f.html?q=Shanthie+Mariet+D'souza" h="ID=SERP,5289.1"><strong>Author:</strong>
                                        Shanthie Mariet
                                        D'souza</a>
                                    </div>
                                </li>
                            </ul>
                            <ul />
                        </div> */}
          </div>
        </div>
      </div>
      <div className="b_caption b_rich b_stsp1" />
    </li>
  )
}

export default function Result() {
  const [Data, setData] = useState([])
  const [Totalresults, setDatatotal] = useState([])
  const [wiki, SetwikiData] = useState([])
  const { name } = useParams()

  useEffect(() => {
    async function getWikiData() {
      try {
        const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`);
        SetwikiData(response.data);
      } catch (error) {
        console.error('Error fetching data from Wikipedia:', error);
      }
    }

    getWikiData(); 
  }, []);
  
  

  // useEffect(() => {
  //   fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
  //     .then((response) => response.json())
  //     .then((wiki) => SetwikiData(wiki))
  //     .catch((error) => console.error(error))
  //   console.log(wiki)
  // }, [])
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/customsearch/v1?key=AIzaSyAPe5RBxcHm1VyIEUVu1dRQO5M4W4EnYrI&cx=6563eb05187c74b28&q=${name}&start=0`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setData(data.items))
  //     .catch((error) => console.error(error))
  //   console.log(Data);
  // }, [])

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/customsearch/v1?key=AIzaSyAPe5RBxcHm1VyIEUVu1dRQO5M4W4EnYrI&cx=6563eb05187c74b28&q=${name}&start=0`
  //   )
  //     .then((response) => response.json())
  //     .then((totalresults) => setDatatotal(totalresults.searchInformation))
  //     .catch((error) => console.error(error))
  //   console.log(Totalresults);
  // }, [])

  return (
    <>
      <div>
        <Header page={'result'} />
        {/* AI result box started*/}
        <div id="b_content" style={{ height: '100vh' }}>
          <main aria-label="Search Results">
            <div className="aiResult example">
              <h1 style={{fontWeight:'700',color:'black',fontSize:'35px'}}>
                {wiki.title}
              </h1>
              <p style={{color:'black',marginTop:'10px',fontSize:'18px'}}>
                {wiki.extract}
              </p>
            </div>
            {/* AI result box end*/}
            <div
              className="results_new"
              style={{ display: 'flex', height: '100%' }}
            >
              <ol id="b_results" className>
                {Data?.map((results) => (
                  <ResultComponent
                    title={results.title}
                    link={results.link}
                    displayLink={results.displayLink}
                    snippet={results.snippet}
                  />
                ))
                }

                <RelatedSearch title={wiki.title} />
                <Pagination title={wiki.title} />

                <li id="mfa_root" className="b_fabHide fabcolapse">
                  <div className="b_ds5">
                    <a
                      role="button"
                      className="mfa_btn"
                      id="mfa_srch"
                      aria-label="Search more"
                      href="javascript:void(0);"
                      h="ID=SERP,6977.1"
                    >
                      <div
                        className="fba_sbicn"
                        style={{ width: '40px', height: '40px' }}
                      />
                    </a>
                  </div>
                </li>
              </ol>
              {/* image={wiki.originalimage.source} */}
              <WikiComponent
                title={wiki.title}
                description={wiki.description}
                extract={
                  wiki.extract
                } /*page={wiki.content_urls.desktop.page} */
              />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
