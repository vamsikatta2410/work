import React from 'react'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import './styles.css'
import videoBg from '../assets/video.mp4'

const goBack = () => {
  window.history.back()
}
const ComingSoon = () => {
  return (
    <>
      <section className="page">
        {/* overlay */}
        <div className="overlay">
          <video src={videoBg} autoPlay loop muted />
        </div>

        <div className="page__content">
          <h1>Launching Soon</h1>
          {/* <h3>
          Leave your email and we'll let you know once the site goes live.
        </h3> */}
          <FlipClockCountdown
            className="flip-clock"
            to={new Date().getTime() + 48 * 3600 * 1000 + 5000}
          />
          <button onClick={goBack} className="btn-coming">
            Back
          </button>
        </div>
      </section>
    </>
  )
}

export default ComingSoon
