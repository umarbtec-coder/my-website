function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 scroll-mt-24 flex flex-col items-center"
    >
      <br />

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-white uppercase tracking-[5px] font-semibold text-sm sm:text-base">
          Contact Us
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mt-3">
          Let's <span className="text-orange-500">Connect</span>
        </h1>
      </div>

      <br />

      {/* Contact Section */}
      <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left Side - Form */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5">
              Send us a message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 border border-slate-600 text-white placeholder-gray-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-slate-800 border border-slate-600 text-white placeholder-gray-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your requirements..."
                className="w-full bg-slate-800 border border-slate-600 text-white placeholder-gray-400 rounded-lg px-4 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div>

            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5">
              Contact Information
            </h2>

            <div className="space-y-5">

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  Gulf International Scrap Trading
                </h3>

                <p className="text-gray-400 text-sm">
                  Abu Dhabi, UAE
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-orange-500">
                  📍 Address
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  Musaffah -
                  <br />
                  M42 - Abu Dhabi
                  <br />
                  United Arab Emirates (UAE)
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-orange-500">
                  📞 Phone
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  +971 XX XXX XXXX
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-orange-500">
                  ✉️ Email
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  umartrading5@gmail.com
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-orange-500">
                  🕒 Working Hours
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  Monday – Saturday
                  <br />
                  8:00 AM – 6:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;