import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Planning from "./pages/Planning";
import Journal from "./pages/Journal";

function App() {


  return (
    <BrowserRouter basename="/personal-journal">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;