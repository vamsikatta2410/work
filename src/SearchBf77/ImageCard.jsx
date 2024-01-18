import React from "react";

function ImageCard(props) {
  return (
    <a href={props.imgurl} target="_blank" rel="noopener noreferrer">
      <div
        className="iuscp isv"
        style={{ height: 228, width: 273 }}
        data-hovstyle=""
        data-evt={1}
      >
        <div
          className="imgpt"
        >
          <a
            className="iusc"
            style={{ height: 180, width: 273 }}
          >
            <div className="img_cont hoff">
              <img
                className="mimg"
                style={{ backgroundColor: "#6b302b", color: "#6b302b" }}
                height={180}
                width={273}
                src={props.imgurl}
                alt="Loading ..."
              />
            </div>
          </a>
          <div className="img_info hon">
            <span className="nowrap">1880 x 1160 · jpeg</span>
            <div className="lnkw">
              <a
                title="medibulletin.com"
                target="_blank"
                data-hookid="pgdom"
              >
                medibulletin.com
              </a>
            </div>
          </div>
        </div>
        <div
          className="infopt"
          style={{ height: 48, maxWidth: "100%" }}
          data-hovstyle=""
        >
          <a
            className="inflnk"
            aria-label="On March 13 PM Narendra Modi will inaugurate India TB summit - Health ..."
          />
          <div className="infnmpt">
            <div className="infpd hoff">
              <ul className="b_dataList">
                <li>
                  <a
                    title="On March 13 PM Narendra Modi will inaugurate India TB summit - Health ..."
                  >
                    {props.info}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </li> */}
    </a>
  );
}

export default ImageCard;
