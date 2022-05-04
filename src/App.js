import "./App.css";
import React, { useState } from "react";
import { AppNavbar } from "./components/Navbar.js";
import { MyBlog } from "./components/Blogs.js";
import blogData from "./database/data";

const App = () => {
  return (
    <div className="App">
      <AppNavbar />
      <div className="blog-container">
        {blogData.map((ele) => {
          <MyBlog ele={ele} />;
        })}
        <MyBlog />
      </div>
    </div>
  );
};

export default App;
