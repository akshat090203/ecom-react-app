import "./App.css";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import LearnHooks from "./Components/Modules/LearnHooks";


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/LearnHooks" element={<LearnHooks />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
