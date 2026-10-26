import { useState } from "react";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [statusMessage, setStatusMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch(
        "http://localhost:3000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      console.log("CONTACT RESPONSE:", data);

      if (response.ok) {
        setStatusMessage(
          "Message sent successfully!"
        );

        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatusMessage(
          data.message ||
            "Failed to submit enquiry."
        );
      }
    } catch (error) {
      console.error(
        "CONTACT ERROR:",
        error
      );

      setStatusMessage(
        "Error connecting to server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#080B0F] text-white px-5 py-20 sm:py-24 lg:py-32 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>


      <div className="max-w-6xl mx-auto relative z-10">

        {/* ================= TITLE ================= */}

        <div className="text-center mb-12 sm:mb-16">

          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="w-8 sm:w-12 h-px bg-orange-500"></span>

            <p className="text-orange-500 font-semibold tracking-[4px] uppercase text-xs sm:text-sm">
              Contact Us
            </p>

            <span className="w-8 sm:w-12 h-px bg-orange-500"></span>

          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-3">
            Let's{" "}
            <span className="text-orange-500">
              Connect
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base lg:text-lg leading-7">
            Have scrap materials to trade or need a reliable collection
            service? Get in touch with our team today.
          </p>

        </div>


        {/* ================= MAIN BOX ================= */}

        <div className="relative bg-[#11161D] border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl">

          {/* Top Accent */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">


            {/* ================= FORM ================= */}

            <div>

              <div className="mb-7">

                <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                  Get In Touch
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Send us a message
                </h2>

                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Tell us what you need and our team will get back to you.
                </p>

              </div>


              {/* Status Message */}

              {statusMessage && (
                <p className="mb-5 p-4 rounded-xl bg-green-950/40 text-green-400 border border-green-900/50">
                  {statusMessage}
                </p>
              )}


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}

                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                    className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300"
                  />

                </div>


                {/* Email */}

                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                    className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300"
                  />

                </div>


                {/* Message */}

                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Your Requirements
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                    required
                    className="w-full rounded-xl bg-[#0B0F14] border border-white/10 px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300 resize-none"
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3.5 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {loading
                    ? "Sending..."
                    : "Send Message →"}
                </button>

              </form>

            </div>


            {/* ================= CONTACT INFORMATION ================= */}

            <div className="lg:border-l lg:border-white/10 lg:pl-10">

              <div className="mb-7">

                <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                  Our Details
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Contact Information
                </h2>

                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Reach out to Gulf International Scrap Trading for reliable
                  scrap trading and recycling solutions.
                </p>

              </div>


              <div className="space-y-6">


                {/* Company */}

                <div className="p-5 rounded-xl bg-[#0B0F14] border border-white/5">

                  <h3 className="text-lg font-semibold text-white">
                    Gulf International Scrap Trading
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Abu Dhabi, UAE
                  </p>

                </div>


                {/* Address */}

                <div className="flex gap-4">

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    📍
                  </div>

                  <div>

                    <h4 className="text-orange-500 font-semibold mb-1">
                      Address
                    </h4>

                    <p className="text-gray-400 leading-7">
                      Musaffah
                      <br />
                      M42 - Abu Dhabi
                      <br />
                      United Arab Emirates
                    </p>

                  </div>

                </div>


                {/* Phone */}

                <div className="flex gap-4">

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    📞
                  </div>

                  <div>

                    <h4 className="text-orange-500 font-semibold mb-1">
                      Phone
                    </h4>

                    <p className="text-gray-400">
                      +971 0551945353
                    </p>

                  </div>

                </div>


                {/* Email */}

                <div className="flex gap-4">

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    ✉️
                  </div>

                  <div>

                    <h4 className="text-orange-500 font-semibold mb-1">
                      Email
                    </h4>

                    <p className="text-gray-400 break-all">
                      info@gulfscraps.com
                    </p>

                  </div>

                </div>


                {/* Working Hours */}

                <div className="flex gap-4">

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    🕒
                  </div>

                  <div>

                    <h4 className="text-orange-500 font-semibold mb-1">
                      Working Hours
                    </h4>

                    <p className="text-gray-400">
                      Monday – Saturday
                      <br />
                      8:00 AM – 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;