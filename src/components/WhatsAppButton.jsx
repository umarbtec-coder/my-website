import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      @keyframes whatsapp-float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }

      @keyframes whatsapp-glow {
        0%, 100% {
          box-shadow:
            0 8px 25px rgba(37, 211, 102, 0.25),
            0 0 0 0 rgba(37, 211, 102, 0.35);
        }
        50% {
          box-shadow:
            0 10px 30px rgba(37, 211, 102, 0.35),
            0 0 0 8px rgba(37, 211, 102, 0);
        }
      }

      @keyframes whatsapp-dot {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.35);
          opacity: 0.65;
        }
      }

      @keyframes whatsapp-icon {
        0%, 100% {
          transform: rotate(0deg) scale(1);
        }
        50% {
          transform: rotate(-8deg) scale(1.08);
        }
      }

      .whatsapp-button {
        animation:
          whatsapp-float 3s ease-in-out infinite,
          whatsapp-glow 2.5s ease-in-out infinite;
      }

      .whatsapp-button:hover {
        animation: none;
        transform: translateY(-6px) scale(1.03);
      }

      .whatsapp-button:hover .whatsapp-icon {
        animation: whatsapp-icon 0.6s ease-in-out;
      }

      .whatsapp-label {
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        white-space: nowrap;
        transition:
          max-width 0.4s ease,
          opacity 0.3s ease,
          margin 0.4s ease;
        margin-left: 0;
      }

      .whatsapp-button:hover .whatsapp-label {
        max-width: 150px;
        opacity: 1;
        margin-left: 10px;
      }

      .whatsapp-dot {
        animation: whatsapp-dot 1.6s ease-in-out infinite;
      }

      @media (max-width: 640px) {
        .whatsapp-button {
          width: 58px !important;
          height: 58px !important;
          right: 18px !important;
          bottom: 18px !important;
          border-radius: 50% !important;
        }

        .whatsapp-label {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <a
      href="https://wa.me/919422322089?text=Hi!%20I'd%20like%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-button"
      style={{
        position: "fixed",
        right: "26px",
        bottom: "26px",
        height: "62px",
        minWidth: "62px",
        padding: "0 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #25D366 0%, #1DA851 100%)",
        borderRadius: "32px",
        textDecoration: "none",
        zIndex: 1000,
        border: "2px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
    >
      {/* WhatsApp Icon */}
      <span
        className="whatsapp-icon"
        style={{
          width: "34px",
          height: "34px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "transform 0.3s ease",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.703 4.607 1.912 6.47L4 29l7.723-1.879A11.93 11.93 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm6.995 17.02c-.297.833-1.474 1.532-2.393 1.72-.634.13-1.464.234-4.257-.914-3.573-1.47-5.87-5.065-6.05-5.302-.176-.237-1.44-1.916-1.44-3.653s.907-2.59 1.23-2.945c.322-.355.703-.443.937-.443.234 0 .468.002.673.012.216.011.505-.082.79.605.297.71 1.01 2.448 1.098 2.626.088.178.147.386.03.622-.117.237-.176.386-.352.593-.176.207-.37.462-.528.62-.176.176-.36.367-.155.72.206.355.914 1.51 1.964 2.446 1.35 1.203 2.49 1.576 2.845 1.752.355.176.562.148.77-.089.206-.237.884-1.031 1.12-1.385.235-.355.47-.296.79-.178.323.118 2.05.968 2.402 1.144.352.176.587.267.674.415.088.148.088.858-.209 1.69z" />
        </svg>
      </span>

      {/* Text */}
      <span
        className="whatsapp-label"
        style={{
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.2px",
        }}
      >
        Chat on WhatsApp
      </span>

      {/* Notification Dot */}
      <span
        className="whatsapp-dot"
        style={{
          position: "absolute",
          top: "4px",
          right: "4px",
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          background: "#FF4B4B",
          border: "2px solid #ffffff",
        }}
      />
    </a>
  );
}