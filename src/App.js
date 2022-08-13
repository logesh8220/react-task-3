import logo from './logo.svg';
import './CSS/sb-admin-2.css';
import './CSS/sb-admin-2.min.css';
import Sidebar from './sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashbord';
import Tables from './Tables';
import Colors from './Colors';
import Borders from './Borders';
import React from 'chart.js';
import Cards from './Cards';
import Buttons from './Buttons';
import Login from './Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Others from './Others';
function App() {
  return (
<BrowserRouter>
<div id='wrapper'>
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar></Navbar>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Tables' element={<Tables/>}/>
            <Route path='/Colors' element={<Colors/>}/>
            <Route path='/Cards' element={<Cards/>}/>
            <Route path='/Buttons' element={<Buttons/>}/>
            <Route path='/Borders' element={<Borders/>}/>
            <Route path= '/Others' element={<Others/>}/>
            <Route path='/Login' element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </div>
</BrowserRouter>
  );
}

export default App;
