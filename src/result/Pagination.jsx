import React from 'react'

const Pagination = ({ title }) => {
  return (
    <>
      <li className="b_pag">
        <nav role="navigation" aria-label="More results for narendra modi">
          <h4 className="b_hide">Pagination</h4>
          <ul className="sb_pagF">
            <li>
              <a className="sb_pagS sb_pagS_bp b_widePag sb_bp">1</a>
            </li>
            <li>
              <a
                className="b_widePag sb_bp"
                aria-label="Page 2"
                href={`q=${title}&sp=-1&ghc=1&lq=0&pq=${title}&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&first=11&FORM=PERE`}
                h="ID=SERP,6967.1"
              >
                2
              </a>
            </li>
            <li>
              <a
                className="b_widePag sb_bp"
                aria-label="Page 3"
                href={`q=${title}&sp=-1&ghc=1&lq=0&pq=${title}&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&first=21&FORM=PERE1`}
                h="ID=SERP,6968.1"
              >
                3
              </a>
            </li>
            <li>
              <a
                className="b_widePag sb_bp"
                aria-label="Page 4"
                href={`q=${title}&sp=-1&ghc=1&lq=0&pq=${title}&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&first=31&FORM=PERE2`}
                h="ID=SERP,6969.1"
              >
                4
              </a>
            </li>
            <li>
              <a
                className="sb_pagN sb_pagN_bp b_widePag sb_bp "
                title="Next page"
                href={`q=${title}&sp=-1&ghc=1&lq=0&pq=${title}&sc=10-12&qs=n&sk=&cvid=283AF97774854901A9D7C5C2B2F582DD&ghsh=0&ghacc=0&ghpl=&first=11&FORM=PORE`}
                h="ID=SERP,6970.1"
              >
                <div className="sw_next">Next</div>
              </a>
            </li>
          </ul>
        </nav>
      </li>
    </>
  )
}

export default Pagination
