import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Recipes } from "./pages/recipes";
import { Explore } from "./pages/explore";
import { FoodContextProvider } from "./context/FoodContext";
import GlobalStyle from "./globalStyle";

const Router: React.FC = () => {
  return (
    <FoodContextProvider>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </HashRouter>
    </FoodContextProvider>
  );
};

export { Router };
