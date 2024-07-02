import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>{/* <Route path='' element={}/> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
