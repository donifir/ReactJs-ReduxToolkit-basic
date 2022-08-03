import React from "react";
import AddSuplier from "./componenst/AddSuplier";
import ShowSuplier from "./componenst/ShowSuplier";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditSuplier from "./componenst/EditSuplier";

function App() {
  return (
    <div className="container pt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddSuplier />}/>
          <Route path="/edit/:id" element={<EditSuplier />}/>
          <Route path="/" element={<ShowSuplier />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
