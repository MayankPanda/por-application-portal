import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import Login from "./pages/loginPage";
import Home from "./pages/studenthomePage"
import AddDynamicInput from "./pages/dynamicForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="studentHome" element={<Home />} />
            <Route path="form" element={<AddDynamicInput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
