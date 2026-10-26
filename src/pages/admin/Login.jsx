import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/secure-auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        // Save login token
        localStorage.setItem("adminToken", data.token);

        // Go to dashboard
        navigate("/admin/dashboard");
      } else {
        setError(
          data.message || "Invalid Admin Identification."
        );
      }
    } catch (err) {
      console.error("Login Error:", err);

      setError(
        "Server connection offline. Make sure backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="bg-slate-900 border border-orange-500/20 rounded-2xl shadow-2xl p-6 sm:p-8">

          {/* HEADER */}

          <div className="text-center mb-8">

            <div className="mx-auto w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30">
              🔐
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-5">
              GULF SCRAP
            </h1>

            <p className="text-orange-500 font-semibold tracking-widest mt-2">
              MANAGEMENT PORTAL
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Administrator Login
            </p>

          </div>

          {/* ERROR */}

          {error && (
            <div className="bg-red-900/30 text-red-400 border border-red-900/50 text-sm text-center p-3 rounded-lg font-semibold mb-5">
              {error}
            </div>
          )}

          {/* FORM */}

          <form
            onSubmit={handleLoginSubmit}
            className="space-y-5"
          >

            {/* ADMIN ID */}

            <div>

              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                Admin ID
              </label>

              <input
                type="text"
                placeholder="Enter Admin ID"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                autoComplete="username"
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-700"
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                Passkey
              </label>

              <input
                type="password"
                placeholder="Enter Passkey"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="current-password"
                required
                className="w-full p-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-700"
              />

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-orange-600/50 disabled:cursor-not-allowed text-white font-bold p-3 rounded-lg transition"
            >
              {loading
                ? "Authenticating..."
                : "Authenticate"}
            </button>

          </form>

          {/* BACK TO WEBSITE */}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full mt-4 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white p-3 rounded-lg transition"
          >
            ← Back to Website
          </button>

        </div>

        <p className="text-center text-gray-500 text-xs mt-5">
          Gulf International Scrap Trading
        </p>

      </div>

    </div>
  );
}

export default Login;