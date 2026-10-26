import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./pages/admin/ProtectedRoute";

function App() {
  const location = useLocation();

  // Hide Navbar and Footer on admin login and admin pages
  const isAdminPage =
    location.pathname.includes("/gis-secure-panel") ||
    location.pathname.includes("/admin");

  return (
    <div className="min-h-screen w-full bg-[#080B0F] text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      {!isAdminPage && <Navbar />}

      {/* ================= MAIN CONTENT ================= */}
      <main className="w-full">

        <Routes>

          {/* ================= WEBSITE ================= */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/materials"
            element={<Materials />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* ================= ADMIN LOGIN ================= */}

          <Route
            path="/gis-secure-panel"
            element={<Login />}
          />

          {/* ================= ADMIN DASHBOARD ================= */}

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* ================= 404 ================= */}

          <Route
            path="*"
            element={
              <div className="min-h-[calc(100vh-80px)] w-full bg-slate-950 text-white flex items-center justify-center px-6">

                <div className="text-center">

                  <h1 className="text-6xl sm:text-7xl font-bold text-orange-500">
                    404
                  </h1>

                  <p className="text-gray-400 mt-3">
                    Page Not Found
                  </p>

                  <button
                    onClick={() => {
                      window.location.href = "/my-website/";
                    }}
                    className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Back to Home
                  </button>

                </div>

              </div>
            }
          />

        </Routes>

      </main>

      {/* ================= FOOTER ================= */}
      {!isAdminPage && <Footer />}

    </div>
  );
}

export default App;