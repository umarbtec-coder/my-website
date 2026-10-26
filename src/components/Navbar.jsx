import { useState } from "react";
import { Link } from "react-router-dom";
import GIS from "../assets/images/GIS.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top and close mobile menu
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setMenuOpen(false);
  };

  // Home navigation
  const goToHome = () => {
    goToTop();

    setTimeout(() => {
      const base = "/my-website";

      if (window.location.pathname === base) {
        window.history.replaceState(null, "", base + "/");
      }
    }, 0);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        w-full
        bg-[#0B0F14]/95
        backdrop-blur-md
        border-b
        border-white/10
        shadow-2xl
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          h-20
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =====================================================
            LOGO
        ===================================================== */}
        <Link
          to="/"
          onClick={goToHome}
          className="flex items-center gap-3 group min-w-0"
        >

          {/* Logo Image */}
          <div className="relative flex-shrink-0">

            <div
              className="
                absolute
                inset-0
                bg-orange-500/20
                blur-lg
                rounded-full
                group-hover:bg-orange-500/40
                transition-all
                duration-300
              "
            ></div>

            <img
              src={GIS}
              alt="GIS Logo"
              className="
                relative
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-full
                object-cover
                border
                border-orange-500/40
              "
            />

          </div>

          {/* Company Text */}
          <div className="leading-tight min-w-0">

            <h1
              className="
                text-[20px]
                sm:text-[22px]
                lg:text-[24px]
                font-bold
                tracking-tight
                text-white
              "
            >
              <span className="text-orange-500">
                Gulf International
              </span>{" "}
              Scrap Trading
            </h1>

            <p
              className="
                text-[12px]
                sm:text-[13px]
                lg:text-[14px]
                text-gray-400
                tracking-wide
                mt-0.5
              "
            >
              Sole Proprietorship L.L.C
            </p>

          </div>

        </Link>


        {/* =====================================================
            DESKTOP MENU
        ===================================================== */}
        <div className="hidden lg:flex items-center gap-2">

          {/* Home */}
          <Link
            to="/"
            onClick={goToHome}
            className="
              px-4
              py-2
              text-[16px]
              text-gray-300
              hover:text-orange-400
              hover:bg-white/5
              rounded-lg
              font-medium
              transition-all
              duration-300
            "
          >
            Home
          </Link>


          {/* About */}
          <Link
            to="/about"
            onClick={goToTop}
            className="
              px-4
              py-2
              text-[16px]
              text-gray-300
              hover:text-orange-400
              hover:bg-white/5
              rounded-lg
              font-medium
              transition-all
              duration-300
            "
          >
            About
          </Link>


          {/* Services */}
          <Link
            to="/services"
            onClick={goToTop}
            className="
              px-4
              py-2
              text-[16px]
              text-gray-300
              hover:text-orange-400
              hover:bg-white/5
              rounded-lg
              font-medium
              transition-all
              duration-300
            "
          >
            Services
          </Link>


          {/* Materials */}
          <Link
            to="/materials"
            onClick={goToTop}
            className="
              px-4
              py-2
              text-[16px]
              text-gray-300
              hover:text-orange-400
              hover:bg-white/5
              rounded-lg
              font-medium
              transition-all
              duration-300
            "
          >
            Materials
          </Link>


          {/* Contact */}
          <Link
            to="/contact"
            onClick={goToTop}
            className="
              ml-3
              px-6
              py-2.5
              text-[16px]
              bg-orange-500
              hover:bg-orange-400
              text-white
              rounded-lg
              font-semibold
              shadow-lg
              shadow-orange-500/20
              hover:shadow-orange-500/40
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            Contact Us
          </Link>

        </div>


        {/* =====================================================
            MOBILE BUTTON
        ===================================================== */}
        <button
          className="
            lg:hidden
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/5
            text-gray-200
            hover:text-orange-400
            hover:border-orange-500/40
            transition-all
            duration-300
            text-[24px]
          "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      {menuOpen && (
        <div
          className="
            lg:hidden
            bg-[#0B0F14]
            border-t
            border-white/10
            shadow-2xl
          "
        >

          <div className="px-4 py-4 space-y-1">

            {/* Home */}
            <Link
              to="/"
              onClick={goToHome}
              className="
                block
                px-4
                py-3
                text-[16px]
                rounded-lg
                text-gray-300
                hover:text-orange-400
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              Home
            </Link>


            {/* About */}
            <Link
              to="/about"
              onClick={goToTop}
              className="
                block
                px-4
                py-3
                text-[16px]
                rounded-lg
                text-gray-300
                hover:text-orange-400
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              About
            </Link>


            {/* Services */}
            <Link
              to="/services"
              onClick={goToTop}
              className="
                block
                px-4
                py-3
                text-[16px]
                rounded-lg
                text-gray-300
                hover:text-orange-400
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              Services
            </Link>


            {/* Materials */}
            <Link
              to="/materials"
              onClick={goToTop}
              className="
                block
                px-4
                py-3
                text-[16px]
                rounded-lg
                text-gray-300
                hover:text-orange-400
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              Materials
            </Link>


            {/* Contact */}
            <Link
              to="/contact"
              onClick={goToTop}
              className="
                block
                mt-3
                bg-orange-500
                hover:bg-orange-400
                text-white
                py-3
                rounded-lg
                text-center
                text-[16px]
                font-semibold
                shadow-lg
                shadow-orange-500/20
                transition-all
                duration-300
              "
            >
              Contact Us
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;