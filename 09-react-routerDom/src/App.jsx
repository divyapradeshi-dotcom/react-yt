import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound';
import {Route, Routes} from 'react-router-dom'
import Men from './pages/Men'
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
     <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetail/>}/>
         <Route path='/product' element ={<Product/>}/>
        <Route path='/product/men'element={<Men/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   
     <Footer/>

      
    </div>
  );
};

export default App;
