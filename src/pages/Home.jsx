import { useEffect, useState } from "react";

import hero from "../assets/images/background.png";

import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import MaterialsSection from "../components/MaterialsSection";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const duration = 20000;
    const startTime = Date.now();

    const animateCounters = () => {
      const progress = Math.min(
        (Date.now() - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setExperience(Math.floor(20 * easedProgress));
      setProjects(Math.floor(100 * easedProgress));
      setClients(Math.floor(500 * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, []);

  return (
    <div
      className="
        w-full
        min-h-screen
        bg-[#080B0F]
        text-white
        overflow-hidden
        pt-20
      "
    >

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        id="home"
        className="
          relative
          w-full
          min-h-[calc(100vh-80px)]
          flex
          items-center
          overflow-hidden
          px-4
          sm:px-8
          lg:px-12
          xl:px-16
          pt-10
          sm:pt-12
          lg:pt-14
          pb-10
          sm:pb-12
          lg:pb-14
          scroll-mt-24
        "
      >

        {/* Background Glow - Top Left */}
        <div
          className="
            absolute
            top-0
            left-0
            w-72
            sm:w-96
            h-72
            sm:h-96
            bg-orange-500/10
            blur-3xl
            rounded-full
            pointer-events-none
          "
        ></div>


        {/* Background Glow - Bottom Right */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-72
            sm:w-96
            h-72
            sm:h-96
            bg-orange-500/5
            blur-3xl
            rounded-full
            pointer-events-none
          "
        ></div>


        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
          "
        >

          {/* ===================================================
              HERO GRID

              MOBILE:
              Text → Image

              DESKTOP:
              Text | Image
          =================================================== */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              lg:gap-14
              items-center
              w-full
            "
          >

            {/* =================================================
                HERO CONTENT
            ================================================= */}
            <div
              className="
                order-1
                lg:order-1
                text-center
                lg:text-left
              "
            >

              {/* Trusted Label */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  mb-5
                  rounded-full
                  border
                  border-orange-500/30
                  bg-orange-500/10
                "
              >

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-orange-500
                    flex-shrink-0
                  "
                ></span>

                <span
                  className="
                    text-orange-400
                    text-xs
                    sm:text-sm
                    font-semibold
                    tracking-wider
                    uppercase
                  "
                >
                  Trusted Scrap Trading Company
                </span>

              </div>


              {/* Main Heading */}
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-5xl
                  xl:text-6xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                "
              >
                Gulf International

                <span className="block text-orange-500 mt-2">
                  Scrap Trading L.L.C
                </span>
              </h1>


              {/* Secondary Heading */}
              <h2
                className="
                  mt-5
                  text-xl
                  sm:text-2xl
                  lg:text-2xl
                  xl:text-3xl
                  font-bold
                  text-gray-200
                "
              >
                Scrap
                <span className="text-orange-500">
                  {" "}Recycling{" "}
                </span>
                & Trading Solutions
              </h2>


              {/* Description */}
              <p
                className="
                  mt-5
                  text-gray-400
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-7
                  max-w-xl
                  mx-auto
                  lg:mx-0
                "
              >
                We specialize in scrap metal collection, industrial site
                clearance, demolition support and metal trading across the UAE
                with environmentally responsible recycling services.
              </p>


              {/* Buttons */}
              <div
                className="
                  mt-7
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  justify-center
                  lg:justify-start
                "
              >

                {/* Request Quote */}
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="
                    group
                    bg-orange-500
                    hover:bg-orange-400
                    text-white
                    px-7
                    py-3.5
                    rounded-xl
                    font-semibold
                    shadow-xl
                    shadow-orange-500/20
                    hover:shadow-orange-500/40
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  Request a Quote

                  <span
                    className="
                      inline-block
                      ml-2
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    →
                  </span>
                </button>


                {/* Explore Services */}
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="
                    border
                    border-white/20
                    bg-white/5
                    hover:bg-white
                    hover:text-black
                    text-white
                    px-7
                    py-3.5
                    rounded-xl
                    font-semibold
                    backdrop-blur-sm
                    transition-all
                    duration-300
                  "
                >
                  Explore Services
                </button>

              </div>


              {/* Trust Line */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  lg:justify-start
                  gap-3
                  text-sm
                  text-gray-500
                "
              >

                <span className="w-8 h-px bg-orange-500"></span>

                Professional • Reliable • Sustainable

              </div>

            </div>


            {/* =================================================
                HERO IMAGE
            ================================================= */}
            <div
              className="
                order-2
                lg:order-2
                relative
                w-full
              "
            >

              {/* Image Glow */}
              <div
                className="
                  absolute
                  -inset-4
                  bg-orange-500/10
                  blur-3xl
                  rounded-3xl
                  pointer-events-none
                "
              ></div>


              {/* Image Container */}
              <div
                className="
                  relative
                  w-full
                  aspect-[16/10]
                  lg:aspect-[16/9]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  shadow-2xl
                  bg-gray-900
                "
              >

                {/* Loading Effect */}
                {!imageLoaded && (
                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      bg-gray-900
                      image-loading
                    "
                  ></div>
                )}


                {/* Hero Image */}
                <img
                  src={hero}
                  alt="Scrap Yard"
                  onLoad={() => setImageLoaded(true)}
                  className={`
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    ${
                      imageLoaded
                        ? "opacity-100 hover:scale-105"
                        : "opacity-0"
                    }
                  `}
                />


                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                ></div>


                {/* Image Badge */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    sm:bottom-5
                    sm:left-5
                    sm:right-auto
                  "
                >

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-3
                      bg-black/70
                      backdrop-blur-md
                      border
                      border-white/10
                      px-4
                      py-2.5
                      sm:px-5
                      sm:py-3
                      rounded-xl
                    "
                  >

                    <div
                      className="
                        w-3
                        h-3
                        rounded-full
                        bg-orange-500
                        flex-shrink-0
                      "
                    ></div>

                    <div>

                      <p
                        className="
                          text-white
                          font-semibold
                          text-sm
                        "
                      >
                        UAE Wide Service
                      </p>

                      <p
                        className="
                          text-gray-400
                          text-xs
                        "
                      >
                        Reliable Scrap Solutions
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}
      <section
        className="
          relative
          w-full
          bg-[#11161D]
          border-y
          border-white/5
          py-10
        "
      >

        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-5
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-8
            lg:gap-0
          "
        >

          {/* Experience */}
          <div
            className="
              text-center
              lg:border-r
              border-white/10
            "
          >

            <h2
              className="
                text-4xl
                sm:text-5xl
                font-black
                text-orange-500
              "
            >
              {experience}+
            </h2>

            <p
              className="
                mt-2
                text-gray-400
                text-sm
                sm:text-base
              "
            >
              Years Experience
            </p>

          </div>


          {/* Projects */}
          <div
            className="
              text-center
              lg:border-r
              border-white/10
            "
          >

            <h2
              className="
                text-4xl
                sm:text-5xl
                font-black
                text-orange-500
              "
            >
              {projects}+
            </h2>

            <p
              className="
                mt-2
                text-gray-400
                text-sm
                sm:text-base
              "
            >
              Projects Completed
            </p>

          </div>


          {/* Clients */}
          <div
            className="
              text-center
              lg:border-r
              border-white/10
            "
          >

            <h2
              className="
                text-4xl
                sm:text-5xl
                font-black
                text-orange-500
              "
            >
              {clients}+
            </h2>

            <p
              className="
                mt-2
                text-gray-400
                text-sm
                sm:text-base
              "
            >
              Happy Clients
            </p>

          </div>


          {/* UAE */}
          <div className="text-center">

            <h2
              className="
                text-4xl
                sm:text-5xl
                font-black
                text-orange-500
              "
            >
              UAE
            </h2>

            <p
              className="
                mt-2
                text-gray-400
                text-sm
                sm:text-base
              "
            >
              Nationwide Service
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}
      <div
        id="about"
        className="w-full scroll-mt-28"
      >
        <AboutSection />
      </div>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <div
        id="services"
        className="w-full scroll-mt-28"
      >
        <ServicesSection />
      </div>


      {/* =====================================================
          MATERIALS
      ===================================================== */}
      <div
        id="materials"
        className="w-full scroll-mt-28"
      >
        <MaterialsSection />
      </div>


      {/* =====================================================
          CONTACT
      ===================================================== */}
      <div
        id="contact"
        className="w-full scroll-mt-28"
      >
        <ContactSection />
      </div>

      {/* Existing WhatsApp Button */}
      <WhatsAppButton />

    </div>
  );
}

export default Home;