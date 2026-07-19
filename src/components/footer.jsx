import GIS from "../assets/images/GIS.png";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

        {/* Company */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={GIS}
              alt="GIS Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />

            <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
              Gulf International
              <br />
              Scrap Trading
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-400 leading-7">
            Trusted scrap metal recycling and trading company providing
            reliable collection, industrial clearance, and environmentally
            responsible recycling services across the UAE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="/#home" className="hover:text-orange-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/#about" className="hover:text-orange-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="/#services" className="hover:text-orange-500 transition">
                Services
              </a>
            </li>

            <li>
              <a href="/#materials" className="hover:text-orange-500 transition">
                Materials
              </a>
            </li>

            <li>
              <a href="/#contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
            Our Services
          </h3>

          <ul className="space-y-3 text-sm sm:text-base">
            <li>Scrap Collection</li>
            <li>Industrial Site Clearance</li>
            <li>Metal Trading</li>
            <li>Scrap Recycling</li>
            <li>Demolition Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-sm sm:text-base">
            <p>
              📍 Musaffah - M42
              <br />
              Abu Dhabi
              <br />
              United Arab Emirates (UAE)
            </p>

            <p>📞 +971 XX XXX XXXX</p>

            <p>✉️ umartrading5@gmail.com</p>

            <p>
              🕒 Mon - Sat
              <br />
              8:00 AM - 6:00 PM
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Gulf International Scrap Trading Sole Proprietorship L.L.C.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            All Rights Reserved.
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mt-3 md:mt-0">
            Designed by: Umar Khan
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;