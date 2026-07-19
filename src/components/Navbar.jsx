import { useState } from "react";
import GIS from "../assets/images/GIS.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={GIS}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />

          <div>
            <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-white leading-tight">
              <span className="text-orange-500">
                Gulf International
              </span>
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              Scrap Trading
            </h1>

            <p className="hidden sm:block text-xs text-gray-300">
              Sole Proprietorship L.L.C
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 text-white font-medium">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-orange-400 transition"
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-orange-400 transition"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-orange-400 transition"
            >
              Services
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("materials")}
              className="hover:text-orange-400 transition"
            >
              Materials
            </button>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700">
          <div className="flex flex-col text-center py-4">

            <button
              onClick={() => scrollToSection("home")}
              className="py-3 text-white hover:text-orange-400"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="py-3 text-white hover:text-orange-400"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="py-3 text-white hover:text-orange-400"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("materials")}
              className="py-3 text-white hover:text-orange-400"
            >
              Materials
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="mx-6 mt-3 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Contact Us
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;