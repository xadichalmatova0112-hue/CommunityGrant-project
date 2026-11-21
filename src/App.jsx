import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Apply from "./Apply";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1C1C28]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply/>} />
         
        </Routes>
      </main>
    </div>
  );
}
