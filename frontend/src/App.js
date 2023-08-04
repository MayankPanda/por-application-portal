import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import Login from "./pages/loginPage";
import Home from "./pages/studenthomePage"
import AddDynamicInput from "./pages/dynamicForm";
import Render from './pages/testrender';
import DisplayForm from './pages/displayForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="studentHome" element={<Home />} />
            <Route path="form" element={<AddDynamicInput />} />
            <Route path="render" element={<Render />} />
            <Route path="fill" element={<DisplayForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
