
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import IndexUsers from "./pages/users/Index";
import ShowUser from "./pages/users/Show";
import RouterUsers from "./pages/users/Router";




function App() {
  return (
    <BrowserRouter>
   <Header />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/users/*" element={<RouterUsers />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
