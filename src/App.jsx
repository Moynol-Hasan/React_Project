import "./App.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Form from "./components/InputFields/Form";
import List from "./components/List/List"
import InputField from './components/InputFields/InputField';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Form/>} />
        <Route path="/List" element={<List/>} />

      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
