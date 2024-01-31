import React, { useState, useEffect } from 'react'
import Result from './Result'

const RelatedSearch = ({ title, name }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const relatedData = [
    {
      subtitle: "news today",
      link: ""
    },
    {
      subtitle: "live today",
      link: "",
    },
    {
      subtitle: "live speech today",
      link: "",
    },
    {
      subtitle: "wikipedia",
      link: "",
    },
    {
      subtitle: "youtube",
      link: "",
    },
    {
      subtitle: "house",
      link: "",
    },
    {
      subtitle: "history",
      link: "",
    },
    {
      subtitle: "biography",
      link: "",
    }
  ];

  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>} */}
      <li className="b_ans" h="SERP,6820.1">
        <div className="b_rs" id="brsv3">
          <p style={{fontSize : '18px',marginTop:'20px',color:'black'}}>
            Related searches for <strong style={{fontWeight:'bold'}}>{title}</strong>
          </p>
          <ul className="b_vList b_divsec">
            {
              relatedData.map((item, index) => {
                return (
                  <li data-priority key={index}>
                    <a
                      href={`/result/${name + ' ' + item.subtitle}`}
                      h="ID=SERP,6823.1"
                    >
                      <div
                        className="b_suggestionIcon "
                        style={{ marginBottom: '20px' }}
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={20} fill="transparent" />
                          <path
                            className="gray70_fill"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.6 2C4.50777 2 2 4.50777 2 7.6C2 10.6922 4.50777 13.2 7.6 13.2C8.85766 13.2 10.0186 12.7852 10.9535 12.0849L16.6343 17.7657C16.9467 18.0781 17.4533 18.0781 17.7657 17.7657C18.0781 17.4533 18.0781 16.9467 17.7657 16.6343L12.0849 10.9535C12.7852 10.0186 13.2 8.85766 13.2 7.6C13.2 4.50777 10.6922 2 7.6 2ZM7.59999 3.6C9.80857 3.6 11.6 5.39143 11.6 7.6C11.6 9.80857 9.80857 11.6 7.59999 11.6C5.39142 11.6 3.59999 9.80857 3.59999 7.6C3.59999 5.39143 5.39142 3.6 7.59999 3.6Z"
                          />
                        </svg>
                      </div>
                      <div className="b_suggestionText" style={{fontSize:'15px'}}>
                        {name} <strong>{item.subtitle}</strong>
                      </div>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </li>
    </>
  )
}

export default RelatedSearch
