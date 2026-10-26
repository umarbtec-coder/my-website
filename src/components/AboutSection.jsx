import GlareHover from "../animation/GlareHover";

function AboutSection() {
  return (
    <section className="relative min-h-screen bg-[#080B0F] text-white pt-16 sm:pt-20 lg:pt-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>


      {/* ================= COMPANY SECTION ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mb-12 sm:mb-16">

        <div className="max-w-4xl">

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-5">

            <span className="w-10 h-px bg-orange-500"></span>

            <span className="text-orange-500 text-sm font-semibold uppercase tracking-[0.2em]">
              About Our Company
            </span>

          </div>


          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-7 tracking-tight">

            Who{" "}
            <span className="text-orange-500">
              We Are...
            </span>

          </h2>


          {/* Description */}
          <p className="text-sm sm:text-lg leading-8 text-gray-400">

            <span className="font-bold text-orange-500">
              Gulf International Scrap Trading Sole Proprietorship L.L.C
            </span>{" "}
            is a trusted recycling and scrap trading company serving businesses
            throughout the UAE.

          </p>


          <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-400">

            We purchase and process ferrous and non-ferrous scrap materials
            while ensuring environmentally responsible recycling practices. Our
            experienced team delivers competitive pricing, transparent business
            dealings, and timely collection services.

          </p>


          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">

            <div className="flex items-center gap-3 text-gray-300">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500">
                ✓
              </span>

              Reliable Scrap Collection
            </div>


            <div className="flex items-center gap-3 text-gray-300">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500">
                ✓
              </span>

              Competitive Market Prices
            </div>


            <div className="flex items-center gap-3 text-gray-300">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500">
                ✓
              </span>

              Sustainable Recycling Solutions
            </div>


            <div className="flex items-center gap-3 text-gray-300">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500">
                ✓
              </span>

              Trusted Business Partner
            </div>

          </div>

        </div>

      </div>


      {/* ================= MISSION / VISION / VALUES ================= */}
      <div className="relative pt-4 sm:pt-8 pb-20 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">


          {/* ================= MISSION ================= */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.2}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >

            <div className="group relative border border-white/10 hover:border-orange-500/50 rounded-2xl p-6 sm:p-8 h-full bg-[#11161D] hover:bg-[#151B23] shadow-xl hover:shadow-orange-500/10 transition-all duration-500">

              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>

              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-xl font-bold mb-6">
                M
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Mission
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-7">
                Deliver dependable scrap trading solutions with integrity,
                professionalism, and customer satisfaction. We are committed to
                providing timely, efficient, and environmentally responsible
                recycling services.
              </p>

            </div>

          </GlareHover>


          {/* ================= VISION ================= */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.2}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >

            <div className="group relative border border-white/10 hover:border-orange-500/50 rounded-2xl p-6 sm:p-8 h-full bg-[#11161D] hover:bg-[#151B23] shadow-xl hover:shadow-orange-500/10 transition-all duration-500">

              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>

              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-xl font-bold mb-6">
                V
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Vision
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-7">
                Become one of the leading recycling and scrap trading companies
                in the UAE through innovation, sustainability, and exceptional
                customer service. We strive to contribute to a cleaner and
                greener future through responsible recycling practices.
              </p>

            </div>

          </GlareHover>


          {/* ================= VALUES ================= */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.2}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >

            <div className="group relative border border-white/10 hover:border-orange-500/50 rounded-2xl p-6 sm:p-8 h-full bg-[#11161D] hover:bg-[#151B23] shadow-xl hover:shadow-orange-500/10 transition-all duration-500">

              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>

              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-xl font-bold mb-6">
                V
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Values
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-7">
                Integrity, quality, transparency, environmental responsibility,
                and long-term customer relationships. We are committed to
                delivering reliable and sustainable solutions that exceed
                customer expectations.
              </p>

            </div>

          </GlareHover>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;