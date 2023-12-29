import React from 'react'

import axios from 'axios'
import { UserContextProvider } from './Component/ContextAPI/ContextProvider';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Component/Home';
import { Dashboard } from './Component/Dashboard';
import { Quiz } from './Component/Quiz';
import { Rank } from './Component/Rank';
import { Testing } from './Component/Testing';

function App() {

  
    
  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
      <Routes>
        
        <Route index element={<Home/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='quiz' element={<Quiz/>} />
        <Route path='rank' element={<Rank/>} />
        <Route path='testing' element={<Testing/>} />

      </Routes>
      </BrowserRouter>
    </UserContextProvider>
    </>
  );
}

export default App;
