import collection from "../assets/images/collection.png";
import clearance from "../assets/images/clearance.png";
import trading from "../assets/images/trading.png";

const services = [
  {
    title: "Scrap Metal Collection",
    image: collection,
    description:
      "We provide fast and reliable pickup services for ferrous and non-ferrous scrap from factories, warehouses, workshops and construction sites throughout the UAE.",
  },
  {
    title: "Site Clearance",
    image: clearance,
    description:
      "Complete dismantling, demolition support, machinery removal, warehouse clearance and responsible recycling for industrial and commercial projects.",
  },
  {
    title: "Trading",
    image: trading,
    description:
      "We buy and sell all grades of iron, steel, copper, aluminium, brass, stainless steel and other recyclable components at competitive market prices.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#080B0F] pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 md:px-8 lg:px-10 scroll-mt-24 flex flex-col items-center overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-12 sm:mb-16">

          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="w-8 sm:w-12 h-px bg-orange-500"></span>

            <p className="text-orange-500 uppercase tracking-[4px] sm:tracking-[6px] font-semibold text-xs sm:text-sm">
              What We Do
            </p>

            <span className="w-8 sm:w-12 h-px bg-orange-500"></span>

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white">
            Our{" "}
            <span className="text-orange-500">
              Services
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base lg:text-lg leading-7">
            Reliable scrap collection, site clearance and trading solutions
            designed for businesses across the UAE.
          </p>

        </div>


        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-8 place-items-center">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative w-full max-w-[400px] rounded-2xl overflow-hidden bg-[#11161D] border border-white/10 hover:border-orange-500/50 shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500"
            >

              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 z-10"></div>


              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 sm:h-60 md:h-64 lg:h-72 xl:h-[290px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Service Number */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-orange-500 font-bold">
                  0{index + 1}
                </div>

              </div>


              {/* ================= CONTENT ================= */}
              <div className="p-6 sm:p-7">

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-7">
                  {service.description}
                </p>


                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-2 text-orange-500 text-sm font-semibold">

                  <span className="w-8 h-px bg-orange-500"></span>

                  Gulf Scrap

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;