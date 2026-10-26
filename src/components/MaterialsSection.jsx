import { useState } from "react";
import { useNavigate } from "react-router-dom";

import iron from "../assets/images/iron.png";
import aluminium from "../assets/images/aluminium.png";
import copper from "../assets/images/copper.png";
import brass from "../assets/images/brass.png";
import steel from "../assets/images/steel.png";
import cable from "../assets/images/cable.png";

const materials = [
  {
    title: "Iron Scrap",
    image: iron,
    description:
      "We purchase all grades of iron scrap from factories, warehouses, workshops, construction sites and industrial facilities across the UAE at competitive market prices.",
  },
  {
    title: "Aluminium Scrap",
    image: aluminium,
    description:
      "We buy aluminium sheets, profiles, castings, wheels and industrial aluminium scrap with fast pickup and fair market prices.",
  },
  {
    title: "Copper Scrap",
    image: copper,
    description:
      "We purchase copper wire, cables, pipes, motors and all other copper scrap with instant evaluation and reliable collection.",
  },
  {
    title: "Brass Scrap",
    image: brass,
    description:
      "We accept brass valves, fittings, rods, plumbing materials and mixed brass scrap from commercial and industrial customers.",
  },
  {
    title: "Steel Scrap",
    image: steel,
    description:
      "We buy structural steel, heavy steel, machinery, fabrication waste and demolition scrap throughout the UAE.",
  },
  {
    title: "Cable Scrap",
    image: cable,
    description:
      "We purchase insulated copper cables, aluminium cables, electrical wiring and communication cables in bulk quantities.",
  },
];

/* =========================
   LOADING IMAGE
========================= */

function MaterialImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-56 sm:h-60 md:h-64 lg:h-60 xl:h-64 bg-[#151B22] overflow-hidden">

      {/* Loading Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 overflow-hidden bg-[#151B22]">

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.5s_infinite] -translate-x-full"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-white/10 border-t-orange-500 rounded-full animate-spin"></div>
          </div>

        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      />

      {/* Dark Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

    </div>
  );
}

/* =========================
   MATERIALS SECTION
========================= */

function MaterialsSection() {
  const navigate = useNavigate();

  const goToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate("/contact");
  };

  return (
    <section
      id="materials"
      className="
        relative
        w-full
        min-h-screen
        bg-[#080B0F]
        text-white
        pt-16
        sm:pt-20
        lg:pt-24
        pb-16
        sm:pb-20
        px-4
        sm:px-6
        lg:px-8
        scroll-mt-24
      "
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>


      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* =========================
            HEADING
        ========================= */}

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">

          <span className="inline-block text-orange-500 uppercase tracking-[3px] sm:tracking-[5px] font-semibold text-xs sm:text-sm lg:text-base">
            Materials We Buy
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mt-3 sm:mt-4 tracking-tight">
            Scrap Materials
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 px-2">
            We purchase a wide range of scrap metals from industrial,
            commercial and construction sources across the UAE.
          </p>

        </div>


        {/* =========================
            MATERIAL CARDS
        ========================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {materials.map((material) => (

            <article
              key={material.title}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                bg-[#11161D]
                border
                border-white/10
                shadow-xl
                hover:border-orange-500/30
                hover:shadow-orange-500/10
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Image */}
              <MaterialImage
                src={material.image}
                alt={material.title}
              />


              {/* Card Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-7">

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {material.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-7 flex-1">
                  {material.description}
                </p>


                {/* Button */}
                <div className="mt-6">

                  <button
                    onClick={goToContact}
                    className="
                      w-full
                      sm:w-auto
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      bg-orange-500
                      hover:bg-orange-400
                      active:scale-95
                      text-white
                      px-6
                      py-3
                      rounded-xl
                      font-semibold
                      shadow-lg
                      shadow-orange-500/20
                      hover:shadow-orange-500/30
                      transition-all
                      duration-300
                    "
                  >
                    Contact Us

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default MaterialsSection;