import React, { useState, useEffect } from 'react'

const RelatedSearch = ({ title }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>} */}
      <li className="b_ans" h="SERP,6820.1">
        <div className="b_rs" id="brsv3">
          <h2 className>
            Related searches for <strong>{title}</strong>
          </h2>
          <ul className="b_vList b_divsec">
            {/* {data.map((result, index) => ( */}
            <li data-priority>
              <a
                href="search0f81.html?q=modi+news+today&FORM=QSRE1"
                h="ID=SERP,6821.1"
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
                  </svg>{' '}
                </div>
                <div className="b_suggestionText">
                  modi <strong>news today</strong>
                </div>
                {/* <div className="b_suggestionText">{result}</div> */}
              </a>
            </li>
            {/* ))} */}

            <li data-priority>
              <a
                href="search5244.html?q=pm+modi+live+today&FORM=QSRE2"
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
                <div className="b_suggestionText">
                  <strong>pm</strong> modi <strong>live today</strong>
                </div>
              </a>
            </li>
            <li data-priority>
              <a
                href="search078e.html?q=modi+live+speech+today&FORM=QSRE3"
                h="ID=SERP,6825.1"
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
                <div className="b_suggestionText">
                  modi <strong>live speech today</strong>
                </div>
              </a>
            </li>
            <li data-priority>
              <a
                href="search7336.html?q=pm+modi+live+speech+today&FORM=QSRE4"
                h="ID=SERP,6827.1"
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
                <div className="b_suggestionText">
                  <strong>pm</strong> modi <strong>live speech today</strong>
                </div>
              </a>
            </li>
            <li data-priority>
              <a
                href="searchfe3a.html?q=history+of+modi&FORM=QSRE5"
                h="ID=SERP,6829.1"
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
                <div className="b_suggestionText">
                  <strong>history of</strong> modi
                </div>
              </a>
            </li>
            <li data-priority>
              <a
                href="search318e.html?q=about+pm+modi&FORM=QSRE6"
                h="ID=SERP,6831.1"
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
                <div className="b_suggestionText">
                  <strong>about pm</strong> modi
                </div>
              </a>
            </li>
            <li data-priority>
              <a
                href="searchfc5e.html?q=narendra+modi+wikipedia&FORM=QSRE7"
                h="ID=SERP,6833.1"
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
                <div className="b_suggestionText">
                  narendra modi
                  <strong>wikipedia</strong>
                </div>
              </a>
            </li>
            <li data-priority>
              <a
                href="searchf227.html?q=narendra+modi+tv+shows&FORM=QSRE8"
                h="ID=SERP,6835.1"
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
                <div className="b_suggestionText">
                  narendra modi
                  <strong>tv shows</strong>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  )
}

export default RelatedSearch
