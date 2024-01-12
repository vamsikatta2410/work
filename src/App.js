import React from 'react';
import NewHome from './New Home/NewHome';
import Result from './result/Result';
import News from './news/News';
import Videos from './BingVideo/BingVideo';
import Images from './SearchBf77/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComingSoon from './ComingSoon/ComingSoon';
import NewHomePage from './result/NewHomePage';
import { Helmet } from 'react-helmet'


function App() {
  return (
    <>
      <Helmet>
        <script src="/js/vendor/jquery.js"></script>
        <script src="/js/vendor/waypoints.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/wow.js"></script>
        <script src="/js/slick.min.js"></script>
        <script src="/js/magnific-popup.js"></script>
        <script src="/js/counterup.js"></script>
        <script src="/js/nice-select.js"></script>
        <script src="/js/swiper-bundle.js"></script>
        <script src="/js/meanmenu.js"></script>
        <script src="/js/tilt.jquery.js"></script>
        <script src="/js/isotope-pkgd.js"></script>
        <script src="/js/imagesloaded-pkgd.js"></script>
        <script src="/js/ajax-form.js"></script>
        <script src="/js/gsap.min.js"></script>
        <script src="/js/ScrollTrigger.min.js"></script>
        <script src="/js/ScrollSmoother.min.js"></script>
        <script src="/js/split-text.min.js"></script>

        {/* <!-- Add these lines before your main.js script tag --> */}
        <script src="https://unpkg.com/gsap@3.9.1/dist/gsap.min.js"></script>
        <script src="https://unpkg.com/gsap@3.9.1/dist/ScrollTrigger.min.js"></script>
        <script src="https://unpkg.com/gsap@3.9.1/dist/ScrollToPlugin.min.js"></script>

        {/* <!-- Your main.js script --> */}
        <script src="/js/main.js"></script>


      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/home" element={<NewHomePage />} />
          <Route path="/result/:name" element={<Result />} />
          <Route path="/news/:name" element={<News />} />
          <Route path="/videos/:name" element={<Videos />} />
          <Route path="/images/:name" element={<Images />} />
          <Route path="/ComingSoon/" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
