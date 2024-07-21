
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import RouterUsers from "./pages/users/Router";
import RouterPosts from "./pages/posts/Router";




function App() {
  return (
    <BrowserRouter>
   <Header />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/users/*" element={<RouterUsers />}></Route>
    <Route path="/posts/*" element={<RouterPosts />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
