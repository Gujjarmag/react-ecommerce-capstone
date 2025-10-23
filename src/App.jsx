import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
