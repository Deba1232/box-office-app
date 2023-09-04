import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./routes/Home";
import Starred from "./routes/Starred";
import Show from "./routes/Show";

import MainLayout from "./components/MainLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/starred" element={<Starred />}></Route>
          </Route>

          <Route path="/show/:showId" element={<Show />} />

          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
