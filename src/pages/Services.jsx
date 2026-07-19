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

function Services() {
  return (
    <section
      id="services"
      className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 scroll-mt-24 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-orange-500 uppercase tracking-[6px] font-semibold text-base sm:text-lg md:text-xl">
            WHAT WE DO
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
            Our <span className="text-orange-500">Services</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 place-items-center">

          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-[390px] rounded-2xl overflow-hidden bg-[#050505] border border-slate-700 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-[290px] object-cover"
              />

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;