import React,{useState,useEffect} from 'react'
import './Style.css'
import Container from './Container'
import { useParams } from 'react-router-dom'
import Header from '../Commons/Header'
import {BingData} from './BingData.js';
import ImageCard from './ImageCard.jsx'

function BingVideo() {
  const { name } = useParams();
  const [imgData, setimgData] = useState([]);
  const [token,setToken] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&q=${name}&key=AIzaSyBgp3Q7UJ7630cKu0yjXi8c_Dp7mKwAUC8`);
        const data = await response.json();
        const dataItems = data?.items? data.items:[];
        setimgData(data.items);
        setToken(data.nextPageToken);

        for(let i = 0 ; i < 3 ; i++)
        {
           const response2 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&q=${name}&key=AIzaSyBgp3Q7UJ7630cKu0yjXi8c_Dp7mKwAUC8&pageToken=${token}`);
           const data2 = await response2.json();

           const data2Items = data2?.items? data2.items : [];
           setimgData(prevData => [...prevData, ...data2Items]);
           setToken(data2.nextPageToken);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      <Header page={"videos"} />

      <div style={{ display: "flex", marginTop:"10px" }}>
        <div
          className="dg_b isvctrl"
          role="main"
          data-ufmc="savim1"
          data-sfmc="savim2"
          data-svitminfp='{"SourceAttr":"m","Mapping":"murl:MediaUrl,purl:PageUrl,mid:MediaId","Loc":"C","ItemTagPath":"","AttachToElementSelector":"","AttachDelay":0}'
          data-svptnk="Images"
          data-persbtncls="psvctrl"
          data-svptnerinfo='{"PredefinedCollectionType":"ImageDefault","Title":"Saved Images","CollectionId":"","ItemType":"image","APIItemType":"images","CollectionTagPath":""}'
          data-svcptid="ImageResults"
          data-pagewidth={1457}
          data-clientwidth={0}
          data-disablerefreshoniframe={1}
          data-reloadableiniframe=""
          style={{ display: "inline-flex", marginLeft:"60px" }}
        >
          <div
            id="mmComponent_images_2"
            className="dgControl dtl hover"
            style={{
              gridTemplateColumns:"repeat(5, minmax(270px, 1fr))",
              display: "grid",
              gap: "1.8 rem",

              gridAutoRows: "345px",
              gridAutoFlow: "dense",
              width: "auto",
            }}
            data-nexturl="/images/async?q=narendra+modi&first=45&count=35&cw=1024&ch=768&relp=35&datsrc=I&layout=RowBased&apc=0&relo=2&relr=9&rely=1525&mmasync=1&dgState=x*193_y*1525_h*185_c*1_i*36_r*9"
            data-postdata=""
            data-iid="images.5996"
            data-layout="row"
          >
            {imgData?.map((val) => {
              return (
                <ImageCard
                  channelTitle={val.channelTitle}
                  link={val.id.videoId}
                  imgurl={val.snippet.thumbnails.high.url}
                  info={val.snippet.title}
                />
              );
            })}
          </div>
          
        </div>
      </div>
    </>
  );
}


export default BingVideo
