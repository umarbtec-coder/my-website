import { Link, useNavigate, useLocation } from "react-router-dom";
import GIS from "../assets/images/GIS.png";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    // If already on Home, scroll directly
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Navigate to Home first, then scroll
      navigate("/");

      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  };

  return (
    <footer className="relative bg-[#06080B] text-gray-300 border-t border-white/10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">


          {/* ================= COMPANY ================= */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="relative">

                <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full"></div>

                <img
                  src={GIS}
                  alt="GIS Logo"
                  className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain rounded-full"
                />

              </div>

              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">

                Gulf International
                <br />

                <span className="text-orange-500">
                  Scrap Trading
                </span>

              </h2>

            </div>


            <p className="text-sm sm:text-base text-gray-500 leading-7 max-w-sm">

              Trusted scrap metal recycling and trading company providing
              reliable collection, industrial clearance and environmentally
              responsible recycling services across the UAE.

            </p>


            {/* Tagline */}

            <div className="mt-6 flex items-center gap-3">

              <span className="w-8 h-px bg-orange-500"></span>

              <span className="text-xs uppercase tracking-widest text-gray-500">
                Professional • Reliable • Sustainable
              </span>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm sm:text-base">

              <li>
                <button
                  onClick={() => goToSection("home")}
                  className="group flex items-center gap-2 text-gray-500 hover:text-orange-500 transition cursor-pointer"
                >
                  <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("about")}
                  className="group flex items-center gap-2 text-gray-500 hover:text-orange-500 transition cursor-pointer"
                >
                  <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("services")}
                  className="group flex items-center gap-2 text-gray-500 hover:text-orange-500 transition cursor-pointer"
                >
                  <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("materials")}
                  className="group flex items-center gap-2 text-gray-500 hover:text-orange-500 transition cursor-pointer"
                >
                  <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                  Materials
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToSection("contact")}
                  className="group flex items-center gap-2 text-gray-500 hover:text-orange-500 transition cursor-pointer"
                >
                  <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                  Contact
                </button>
              </li>

            </ul>

          </div>


          {/* ================= SERVICES ================= */}
          <div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-500">

              <li className="hover:text-orange-500 transition">
                Scrap Collection
              </li>

              <li className="hover:text-orange-500 transition">
                Industrial Site Clearance
              </li>

              <li className="hover:text-orange-500 transition">
                Trading
              </li>

              <li className="hover:text-orange-500 transition">
                Scrap Recycling
              </li>

              <li className="hover:text-orange-500 transition">
                Demolition Support
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
              Contact
            </h3>


            <div className="space-y-5 text-sm sm:text-base">


              {/* Address */}

              <div className="flex gap-3">

                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  📍
                </span>

                <p className="text-gray-500 leading-6">

                  Musaffah - M42
                  <br />
                  Abu Dhabi
                  <br />
                  United Arab Emirates (UAE)

                </p>

              </div>


              {/* Phone */}

              <div className="flex items-center gap-3">

                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  📞
                </span>

                <p className="text-gray-500">
                  +971 0551945353
                </p>

              </div>


              {/* Email */}

              <div className="flex items-center gap-3">

                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  ✉️
                </span>

                <p className="text-gray-500 break-all">
                  info@gulfscraps.com
                </p>

              </div>


              {/* Hours */}

              <div className="flex gap-3">

                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  🕒
                </span>

                <p className="text-gray-500 leading-6">

                  Mon - Sat
                  <br />
                  8:00 AM - 6:00 PM

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}

      <div className="relative border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left">

            © {new Date().getFullYear()} Gulf International Scrap Trading
            Sole Proprietorship L.L.C. All Rights Reserved.

          </p>


          <p className="text-xs sm:text-sm text-gray-600">

            Designed by:{" "}
            <span className="text-orange-500">
              Umar Khan
            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;