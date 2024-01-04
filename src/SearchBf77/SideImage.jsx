function SideImage(props) {
    return (
    <>
      <div
        className="side-part"
        style={{
          visibility: props.isImageOpen ? "visible" : "hidden",
          width: props.isImageOpen ? "600px" : "0px",
          backgroundColor: "transparent",
          position: "relative",
          height: "808px",
          borderRadius: "15px",
        }}
      >
        <div
          className="side-inner-part"
          style={{
            backgroundColor: "#ffff",
            height: "800px",
            opacity: 1,
            borderRadius: "20px",
            margin: "0px 0px 0px 10px",
          }}
        >
          <div
            className="side-top"
            style={{
              width: "auto",
              height: "50px",
              backgroundColor: "#e9edf1",
              display: "flex",
              WebkitBorderTopLeftRadius: "10px",
            }}
          >
            <div className="pic-source" style={{ width: "90%" }}></div>
            <div
              className="cut-section"
              style={{
                alignItems: "center",
                justifyItems: "center",
                justifySelf: "center",
                marginTop: "6px",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // alert("Hello hide the side part");
                  props.setIsImageOpen(false)
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  height={38}
                  width= {props.isImageOpen ?38 : 0}
                  jsname="lZmugf"
                  color="#fff"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div
              className="expanded-pic"
              style={{
                height: "400px",
                position: "relative",
                backgroundColor: "#141414",
              }}
            >
              <a
                className="iusc"
                style={{ height: "100%", width: "auto" }}
                m='{"sid":"","cturl":"","cid":"0BjwHh2e","purl":"https://medibulletin.com/on-march-13-pm-narendra-modi-will-inaugurate-india-tb-summit/","murl":"https://i1.wp.com/medibulletin.com/wp-content/uploads/2018/02/Narendra_Modi.jpg?fit=1880%2C1160&ssl=1","turl":"https://tse2.mm.bing.net/th?id=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&pid=15.1","md5":"d018f01e1d9e50074f1c07e26f8718b2","shkey":"V5UC0BS3EXgz1O4MtYpfkCyDmLGmk3wLy1/6XsJMtYY=","t":"On March 13 PM Narendra Modi will inaugurate India TB summit - Health ...","mid":"C4385EB6EA808B1F89854180EB766B47BD2A7C1B","desc":"modi narendra pm indian india tb inaugurate summit march"}'
                onclick="sj_evt.fire('IFrame.Navigate', this.href); return false;"
                href="search84fd.html?view=detailV2&ccid=0BjwHh2e&id=C4385EB6EA808B1F89854180EB766B47BD2A7C1B&thid=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&mediaurl=https%3a%2f%2fi1.wp.com%2fmedibulletin.com%2fwp-content%2fuploads%2f2018%2f02%2fNarendra_Modi.jpg%3ffit%3d1880%252C1160%26ssl%3d1&exph=1160&expw=1880&q=narendra+modi&simid=608040745365371033&FORM=IRPRST&ck=6B1D07FF9BC7F45D75B9791B0DF40B79&selectedIndex=0"
                h="ID=images,5228.1"
              >
                <div className="img_cont hoff">
                  <img
                    className="mimg"
                    style={{ backgroundColor: "#6b302b", color: "#6b302b" }}
                    height={360}
                    width={540}
                    // src="https://tse2.mm.bing.net/th/id/OIP.0BjwHh2eUAdPHAfib4cYsgHaEk?w=273&h=180&c=7&r=0&o=5&pid=1.7"
                    src={props.current.imgurl}
                    alt="Image result for narendra modi"
                  />
                </div>
              </a>
            </div>
            <div className="img-info">
              <div
                className="infopt"
                style={{
                  position: "relative",
                  height: 68,
                  backgroundColor: "#e9edf1",
                  maxWidth: "100%",
                }}
                data-hovstyle=""
              >
                <a
                  className="inflnk"
                  aria-label="On March 13 PM Narendra Modi will inaugurate India TB summit - Health ..."
                  href="search84fd.html?view=detailV2&ccid=0BjwHh2e&id=C4385EB6EA808B1F89854180EB766B47BD2A7C1B&thid=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&mediaurl=https%3a%2f%2fi1.wp.com%2fmedibulletin.com%2fwp-content%2fuploads%2f2018%2f02%2fNarendra_Modi.jpg%3ffit%3d1880%252C1160%26ssl%3d1&exph=1160&expw=1880&q=narendra+modi&simid=608040745365371033&FORM=IRPRST&ck=6B1D07FF9BC7F45D75B9791B0DF40B79&selectedIndex=0"
                  h="ID=images,5228.2"
                />
                <div
                  className="infnmpt"
                  style={{
                    lineHeight: "1.2",
                    border: "1px solid grey",
                    WebkitBorderBottomLeftRadius: "10px",
                  }}
                >
                  <div className="infpd hoff">
                    <ul className="b_dataList">
                      <li>
                        <a
                          title="On March 13 PM Narendra Modi will inaugurate India TB summit - Health ..."
                          href="search84fd.html?view=detailV2&ccid=0BjwHh2e&id=C4385EB6EA808B1F89854180EB766B47BD2A7C1B&thid=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&mediaurl=https%3a%2f%2fi1.wp.com%2fmedibulletin.com%2fwp-content%2fuploads%2f2018%2f02%2fNarendra_Modi.jpg%3ffit%3d1880%252C1160%26ssl%3d1&exph=1160&expw=1880&q=narendra+modi&simid=608040745365371033&FORM=IRPRST&ck=6B1D07FF9BC7F45D75B9791B0DF40B79&selectedIndex=0"
                          h="ID=images,5228.3"
                          style={{ lineHeight: "1.1", fontSize: "22px" }}
                        >
                          {props.current.info}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideImage;
