import GlareHover from "../component/GlareHover";

function About() {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 text-white">

      {/* Company Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        <br />

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Who <span className="text-red-500">We Are...</span>
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            <span className="font-bold text-red-500">
              Gulf International Scrap Trading Sole Proprietorship L.L.C
            </span>{" "}
            is a trusted recycling and scrap trading company serving
            businesses throughout the UAE.
          </p>

          <br />

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            We purchase and process ferrous and non-ferrous scrap
            materials while ensuring environmentally responsible
            recycling practices. Our experienced team delivers
            competitive pricing, transparent business dealings, and
            timely collection services.
          </p>

          <br />

          <div className="space-y-3 text-base sm:text-lg">
            <div>✅ Reliable Scrap Collection</div>
            <div>✅ Competitive Market Prices</div>
            <div>✅ Sustainable Recycling Solutions</div>
            <div>✅ Trusted Business Partner</div>
          </div>

        </div>

      </section>

      <br />

      {/* Mission | Vision | Values */}
      <section className="pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Mission */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="border border-orange-500 rounded-xl p-6 sm:p-8 h-full overflow-hidden">

              <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-5">
                Mission
              </h3>

              <p className="text-gray-300 leading-7 sm:leading-8 break-words whitespace-normal text-sm sm:text-base">
                Deliver dependable scrap trading solutions with
                integrity, professionalism, and customer satisfaction.
                We are committed to providing timely, efficient,
                and environmentally responsible recycling
                services.
              </p>

            </div>
          </GlareHover>

          {/* Vision */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="border border-orange-500 rounded-xl p-6 sm:p-8 h-full overflow-hidden">

              <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-5">
                Vision
              </h3>

              <p className="text-gray-300 leading-7 sm:leading-8 break-words whitespace-normal text-sm sm:text-base">
                Become one of the leading recycling and scrap
                trading companies in the UAE through innovation,
                sustainability, and exceptional customer service.
                We strive to contribute to a cleaner and greener
                future through responsible recycling practices.
              </p>

            </div>
          </GlareHover>

          {/* Values */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="border border-orange-500 rounded-xl p-6 sm:p-8 h-full overflow-hidden">

              <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-5">
                Values
              </h3>

              <p className="text-gray-300 leading-7 sm:leading-8 break-words whitespace-normal text-sm sm:text-base">
                Integrity, quality, transparency,
                environmental responsibility, and
                long-term customer relationships.
                We are committed to delivering reliable and
                sustainable solutions that exceed customer
                expectations.
              </p>

            </div>
          </GlareHover>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
              20+
            </h2>
            <p className="mt-3 text-sm sm:text-lg">
              Years Experience
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
              500+
            </h2>
            <p className="mt-3 text-sm sm:text-lg">
              Clients Served
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
              1000+
            </h2>
            <p className="mt-3 text-sm sm:text-lg">
              Tons Recycled
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
              UAE
            </h2>
            <p className="mt-3 text-sm sm:text-lg">
              Nationwide Service
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;