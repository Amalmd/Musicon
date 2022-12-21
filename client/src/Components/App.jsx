import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";
/* import puppeteer from "puppeteer.js";
 */
function App() {
  /* (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://youtube.com/");
  })(); */
  return (
    <>
      <Register />
      <Login />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
