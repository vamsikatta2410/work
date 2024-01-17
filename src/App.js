import React from 'react';
import NewHome from './New Home/NewHome';
import Result from './result/Result';
import News from './news/News'
import Videos from './BingVideo/BingVideo'
import Images from './SearchBf77/Search'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ComingSoon from './ComingSoon/ComingSoon'
import NewHomePage from './result/NewHomePage'
import Login from './result/Login';
import Business from './result/Business';


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
          <Route path='/login' element={<Login/>}/>
          <Route path='/business' element={<Business/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
