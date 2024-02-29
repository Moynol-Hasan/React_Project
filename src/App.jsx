import "./App.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Button from "./components/Button/Button";
import List from "./components/List/List"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Button/>} />
        <Route path="/List" element={<List/>} />

      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
