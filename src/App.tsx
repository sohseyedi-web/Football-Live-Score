import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
