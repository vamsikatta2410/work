import React from 'react';
import NewHome from './New Home/NewHome';
import Result from './result/Result';
import News from './news/News'
import Videos from './BingVideo/BingVideo'
import Images from './SearchBf77/Search'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComingSoon from './ComingSoon/ComingSoon'
import NewHomePage from './result/NewHomePage'
import { Helmet } from 'react-helmet'
import Contact from './result/Contact';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/home" element={<NewHomePage />} />
          <Route path="/result/:name" element={<Result />} />
          <Route path="/news/:name" element={<News />} />
          <Route path="/videos/:name" element={<Videos />} />
          <Route path="/images/:name" element={<Images />} />
          <Route path="/ComingSoon/" element={<ComingSoon />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
