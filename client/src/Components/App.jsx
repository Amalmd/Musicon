import "./App.css";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";
import {useEffect} from "react";

function App() {
   const navigate = useNavigate();
   useEffect(() => {
      if (localStorage.getItem("userValues")) navigate("/");
      else if (!localStorage.getItem("userValues")) navigate("/login");
   }, []);

   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </>
   );
}

export default App;
