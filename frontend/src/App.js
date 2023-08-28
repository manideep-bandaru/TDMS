import React from 'react';
import Home from './components/pages/Home';
import Query from './components/pages/Query';
import Profile from './components/pages/Profile';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Course from './components/pages/Course';
import Departments from './components/pages/Departments';
import CourseForm from './components/pages/CourseForm';
import ProfInfo from './components/pages/ProfInfo';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/course" element={<Course />} />
        <Route path="/department" element={<Departments />} />
        <Route path="/courseform" element={<CourseForm />} />
        <Route path="/profinfo" element={<ProfInfo />} />
        <Route path="/query" element={<Query />} />
        <Route path="/profile" element={<Profile />} />
     </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
