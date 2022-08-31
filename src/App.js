import logo from "./logo.svg";
import "./CSS/sb-admin-2.css";
import "./CSS/sb-admin-2.min.css";
import './CSS/App.css'
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashbord";
import Tables from "./Tables";
import Colors from "./Colors";
import Borders from "./Borders";
import React from "chart.js";
import Cards from "./Cards";
import Buttons from "./Buttons";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import CreateProduct from "./CreateProduct";
import View from "./View";
import Edit from "./CSS/Edit";
import Studentmanagement from "./Studentmanagement";
import ViewStudents from "./ViewStudents";
import ChangeMentor from "./ChangeMentor";
import CreateStudent from "./CreateStudent";
import CreateMentor from "./CreateMentor";
import { UserProvider } from "./UserContext";
function App() {
  return (
    <BrowserRouter>
            <UserProvider>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar></Navbar>
            <Routes>
            <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Tables" element={<Tables />} />
              <Route path="/Colors" element={<Colors />} />
              <Route path="/Cards" element={<Cards />} />
              <Route path="/Buttons" element={<Buttons />} />
              <Route path="/Borders" element={<Borders />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/products/:id" element={<View/>}></Route>
              <Route path="/Edit/:id" element={<Edit/>}></Route>
              <Route path="/Login" element={<Login />} />
              <Route path="/CreateProduct" element={<CreateProduct />} />
              <Route path="/Studentmanagement" element={<Studentmanagement />} />
              <Route path="/ViewStudents/:Name" element={<ViewStudents/>} />
              <Route path="/ChangeMentor/:id" element={<ChangeMentor/>} />
              <Route path="/CreateStudent" element={<CreateStudent/>} />
              <Route path="/CreateMentor" element={<CreateMentor/>} />
            </Routes>
          </div>
        </div>
      </div>
              </UserProvider>
    </BrowserRouter>
  );
}

export default App;
