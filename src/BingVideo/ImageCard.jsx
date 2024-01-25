import React from 'react'

function ImageCard(props) {

  const maxLength = 60;
  const croppedName = props.info.length > maxLength ? props.info.slice(0, maxLength) + '...' : props.info;

  return (
    <>
      <div
        className="iuscp isv"
        style={{ height: 270, width: 250}}
        data-hovstyle=""
        data-evt={1}
      >
        <div className="imgpt">
          <a
            className="iusc"
            style={{ height: 180, width: '100%' }}
            m='{"sid":"","cturl":"","cid":"0BjwHh2e","purl":"https://medibulletin.com/on-march-13-pm-narendra-modi-will-inaugurate-india-tb-summit/","murl":"https://i1.wp.com/medibulletin.com/wp-content/uploads/2018/02/Narendra_Modi.jpg?fit=1880%2C1160&ssl=1","turl":"https://tse2.mm.bing.net/th?id=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&pid=15.1","md5":"d018f01e1d9e50074f1c07e26f8718b2","shkey":"V5UC0BS3EXgz1O4MtYpfkCyDmLGmk3wLy1/6XsJMtYY=","t":"On March 13 PM Narendra Modi will inaugurate India TB summit - Health ...","mid":"C4385EB6EA808B1F89854180EB766B47BD2A7C1B","desc":"modi narendra pm indian india tb inaugurate summit march"}'
            href={`https://www.youtube.com/watch?v=${props.link}`}
            h="ID=images,5228.1"
          >
            <div className="img_cont hoff">
              <img
                className="mimg"
                style={{ backgroundColor: '#6b302b', color: '#6b302b' }}
                height={180}
                width="100%"
                src={props.imgurl}
                alt="Image result for narendra modi"
              />
            </div>
          </a>
          <div className="img_info hon">
            <div className="lnkw">
              <a
                title="youtube.com"
                target="_blank"
                data-hookid="pgdom"
                // href="https://medibulletin.com/on-march-13-pm-narendra-modi-will-inaugurate-india-tb-summit/"
                href="https://www.youtube.com/results?search_query=narendra+modi"
                h="ID=images,5924.1"
                style={{ textDecorationStyle: 'none' }}
              >
                {/* medibulletin.com */}
                youtube.com
              </a>
            </div>
          </div>
        </div>
        <div
          className="infopt"
          style={{ height: 'auto', maxWidth: 'auto' }}
          data-hovstyle=""
        >
          <a
            className="inflnk"
            aria-label="On March 13 PM Narendra Modi will inaugurate India TB summit - Health ..."
            // href="search84fd.html?view=detailV2&ccid=0BjwHh2e&id=C4385EB6EA808B1F89854180EB766B47BD2A7C1B&thid=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&mediaurl=https%3a%2f%2fi1.wp.com%2fmedibulletin.com%2fwp-content%2fuploads%2f2018%2f02%2fNarendra_Modi.jpg%3ffit%3d1880%252C1160%26ssl%3d1&exph=1160&expw=1880&q=narendra+modi&simid=608040745365371033&FORM=IRPRST&ck=6B1D07FF9BC7F45D75B9791B0DF40B79&selectedIndex=0"
            href={`https://www.youtube.com/watch?v=${props.link}`}
            h="ID=images,5228.2"
          />
          <div className="infnmpt">
            <div className="infpd hoff">
              <ul className="b_dataList">
                <li>
                  <a
                    title="On March 13 PM Narendra Modi will inaugurate India TB summit - Health ..."
                    href="search84fd.html?view=detailV2&ccid=0BjwHh2e&id=C4385EB6EA808B1F89854180EB766B47BD2A7C1B&thid=OIP.0BjwHh2eUAdPHAfib4cYsgHaEk&mediaurl=https%3a%2f%2fi1.wp.com%2fmedibulletin.com%2fwp-content%2fuploads%2f2018%2f02%2fNarendra_Modi.jpg%3ffit%3d1880%252C1160%26ssl%3d1&exph=1160&expw=1880&q=narendra+modi&simid=608040745365371033&FORM=IRPRST&ck=6B1D07FF9BC7F45D75B9791B0DF40B79&selectedIndex=0"
                    h="ID=images,5228.3"
                    style={{
                      lineHeight: '1.1',
                      fontSize: '13px',
                      fontWeight: '600',
                    }}
                  >
                    {croppedName}
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="infpd hoff"
              style={{ lineHeight: '2', marginBottom: '10px' }}
            >
              <ul
                className="b_dataList"
                style={{ display: 'flex', lineHeight: '1.6', fontSize: '10px' }}
              >
              </ul>
              <div
                className="mc_vtvc_meta_row"
                style={{
                  lineHeight: ' 16px',
                  fontSize: '11px',
                  height: '17px',
                  overflow: 'hidden',
                  textOverflow: ' ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  className="mc_vtvc_meta_row_channel"
                  style={{ margin: '10px' }}
                >
                  {props.channelTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </li> */}
    </>
  )
}

export default ImageCard
