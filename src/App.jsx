import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Starred from "./routes/Starred";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/starred" element={<Starred />}></Route>
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
