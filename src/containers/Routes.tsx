import { BrowserRouter, Route, Routes as RRDRoutes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RRDRoutes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </RRDRoutes>
    </BrowserRouter>
  );
};
