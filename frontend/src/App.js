import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import Login from "./pages/loginPage";
import Home from "./pages/studenthomePage"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="studentHome" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
