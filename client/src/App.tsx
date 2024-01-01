import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kanye from "./pages/Kanye";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kanye" element={<Kanye />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
