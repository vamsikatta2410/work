import React, { useState,useEffect } from "react";
// import ImageData from "./ImageData";
import ImageCard from "./ImageCard";
import SideImage from "./SideImage";
import { useParams } from "react-router-dom";

function Container() {
  const { name } = useParams();
  const [currentSelectedCard, setCurrentSelectedCard] = useState();
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [imgData, setimgData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAPe5RBxcHm1VyIEUVu1dRQO5M4W4EnYrI&cx=6563eb05187c74b28&q=${name}&start=0&searchType=image`);
        const data = await response.json();
        setimgData(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
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
          style={{ display: "inline-flex" }}
        >
          <div
            id="mmComponent_images_2"
            className="dgControl dtl hover"
            style={{
              gridTemplateColumns: isImageOpen
                ? "repeat(3, minmax(280px, .2fr))"
                : "repeat(5, minmax(280px, 1fr)) ",
              display: "grid",
              gap: "1.8 rem",

              gridAutoRows: "238px",
              gridAutoFlow: "dense",
              width: "auto",
            }}
            data-nexturl="/images/async?q=narendra+modi&first=45&count=35&cw=1024&ch=768&relp=35&datsrc=I&layout=RowBased&apc=0&relo=2&relr=9&rely=1525&mmasync=1&dgState=x*193_y*1525_h*185_c*1_i*36_r*9"
            data-postdata=""
            data-iid="images.5996"
            data-layout="row"
          >
            {imgData?.map((val,index) => {
              return (
                <ImageCard
                  key = {index}
                  imgurl={val.image.thumbnailLink}
                  info={val.snippet}
                  setCurrentSelectedCard={setCurrentSelectedCard}
                  setIsImageOpen={setIsImageOpen}
                />
              );
            })}
          </div>
          {console.log(currentSelectedCard)}
          {
            currentSelectedCard
              ? <SideImage current={ImageData.filter(img => img.id === currentSelectedCard)[0]} isImageOpen={isImageOpen} setIsImageOpen={setIsImageOpen} />
              : ""
          }

        </div>
      </div>
    </>
  );
}

export default Container;
