import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1C1C28]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </main>
    </div>
  );
}
