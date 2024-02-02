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
import Page from './result/Page';
import Signup from './result/Signup';
import Company from './company/Company'
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Login2 from './login/Login2';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<NewHome />} />
          <Route path="/" element={<NewHomePage />} />
          <Route path="/result/:name" element={<Result />} />
          <Route path="/news/:name" element={<News />} />
          <Route path="/videos/:name" element={<Videos />} />
          <Route path="/images/:name" element={<Images />} />
          <Route path="/ComingSoon/" element={<ComingSoon />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/temp' element={<Page/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='login2' element={<Login2/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
