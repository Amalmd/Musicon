import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <>
      {/* <Register />
      <Login /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
