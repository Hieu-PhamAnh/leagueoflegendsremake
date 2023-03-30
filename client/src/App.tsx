import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Champions from "./pages/Champions";
import Search from "./pages/Search";
import UserInformation from "./pages/User";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/news" element={<div>News</div>} />
          <Route path="/search" element={<Search />} />
          <Route path="/user/:username" element={<UserInformation />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
