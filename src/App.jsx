import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkVeil from "./back/DarkVeil";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">

        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <DarkVeil />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;