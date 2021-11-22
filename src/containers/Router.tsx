import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
