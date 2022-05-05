import "./App.css";
import { AppNavbar } from "./components/Navbar.js";
import MyBlog from "./components/Blogs.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreationForm from "./components/Create";
import UpdateForm from "./components/Update";
import View from "./components/View";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<MyBlog />} />
          <Route path="/create" element={<CreationForm />} />
          <Route path="/update" element={<UpdateForm />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
