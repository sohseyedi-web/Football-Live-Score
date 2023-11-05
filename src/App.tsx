import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
