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

function Materials() {
  const goToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="materials"
      className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 scroll-mt-24 flex flex-col items-center"
    >
      <br />

      <div className="max-w-7xl w-full mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-orange-500 uppercase tracking-[6px] font-semibold text-base sm:text-lg">
            Materials We Buy
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Scrap Materials
          </h2>

          <br />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {materials.map((material, index) => (
            <div
              key={index}
              className="border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={material.image}
                alt={material.title}
                className="w-full h-56 sm:h-60 md:h-64 object-cover"
              />

              <div className="p-6 sm:p-8 text-center">

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {material.title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-7 mb-6">
                  {material.description}
                </p>

                <button
                  onClick={goToContact}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Contact Us
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Materials;