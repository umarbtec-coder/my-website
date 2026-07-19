import hero from "../assets/images/background.png";

import About from "./About";
import Services from "./Services";
import Materials from "./Materials";
import Contact from "./Contact";

function Home() {
  return (
    <>
      {/* ================= HOME ================= */}
      <section id="home" className="min-h-screen scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center">

          {/* Left Side */}
          <div className="text-2xl sm:text-3xl font-bold px-6 sm:px-8 md:px-10 lg:pl-24 lg:pr-16 py-12 sm:py-16 lg:py-20 flex flex-col items-center text-center">
            <span className="uppercase tracking-[4px] text-orange-400 font-semibold text-lg sm:text-xl md:text-2xl">
              Gulf International Scrap Trading
            </span>

            <br />

            <p className="mt-8 text-base sm:text-lg text-gray-300 leading-7 sm:leading-8 max-w-xl">
              We specialize in scrap metal collection, industrial site
              clearance, demolition support and metal trading throughout
              the UAE with environmentally responsible recycling services.
            </p>

            <br />
            <br />

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition"
              >
                Request a Quote
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-black text-white transition"
              >
                Our Services
              </button>

            </div>
          </div>

          {/* Right Side */}
          <div className="h-[280px] sm:h-[380px] md:h-[450px] lg:h-[600px] w-full px-6 sm:px-8 md:px-10 lg:pr-20 py-6 sm:py-8 lg:py-14">
            <img
              src={hero}
              alt="Scrap Yard"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

        </div>
      </section>

      {/* ================= Statistics ================= */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400">
              20+
            </h2>
            <p className="mt-3 text-gray-300 text-sm sm:text-base">
              Years Experience
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400">
              500+
            </h2>
            <p className="mt-3 text-gray-300 text-sm sm:text-base">
              Projects Completed
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400">
              1000+
            </h2>
            <p className="mt-3 text-gray-300 text-sm sm:text-base">
              Satisfied Clients
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-400">
              50K+
            </h2>
            <p className="mt-3 text-gray-300 text-sm sm:text-base">
              Tons Recycled
            </p>
          </div>

        </div>
      </section>

      <br />
      <br />

      {/* ================= About ================= */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <br />
      <br />

      {/* ================= Services ================= */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <br />
      <br />

      {/* ================= Materials ================= */}
      <section id="materials" className="scroll-mt-24">
        <Materials />
      </section>

      <br />
      <br />

      {/* ================= Contact ================= */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <br />
      <br />
    </>
  );
}

export default Home;