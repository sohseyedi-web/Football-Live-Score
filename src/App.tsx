import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
