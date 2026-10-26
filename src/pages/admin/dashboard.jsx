import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Enquiries from "./Enquiries";

function Dashboard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Dashboard");

  const [enquiryCount, setEnquiryCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const [currentTime, setCurrentTime] = useState(new Date());

  const menuItems = [
    "Dashboard",
    "Enquiries",
    "Settings",
  ];

  // ==========================================
  // LIVE DATE + TIME
  // ==========================================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ==========================================
  // FETCH DASHBOARD STATISTICS
  // ==========================================

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/contact-data"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch enquiries");
      }

      const data = await response.json();

      const enquiries = data.enquiries || [];

      setEnquiryCount(enquiries.length);

      setPendingCount(
        enquiries.filter(
          (item) =>
            (item.status || "Pending") === "Pending"
        ).length
      );

      setCompletedCount(
        enquiries.filter(
          (item) =>
            item.status === "Completed"
        ).length
      );
    } catch (error) {
      console.error(
        "DASHBOARD STATS ERROR:",
        error
      );
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  // ==========================================
  // DATE FORMAT
  // ==========================================

  const formattedDate =
    currentTime.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // ==========================================
  // TIME FORMAT - 12 HOURS
  // ==========================================

  const formattedTime =
    currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () => {
    localStorage.removeItem("adminToken");
    
    navigate("/");
  };

  // ==========================================
  // NAVIGATION
  // ==========================================

  const changeTab = (tab) => {
    setActiveTab(tab);

    if (tab === "Enquiries") {
      fetchDashboardStats();
    }
  };

  // ==========================================
  // MENU ICON
  // ==========================================

  const getMenuIcon = (item) => {
    if (item === "Dashboard") return "📊";
    if (item === "Enquiries") return "📩";
    if (item === "Settings") return "⚙️";

    return "•";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white">

      {/* =====================================================
          TOP NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-40 h-16 bg-slate-950/95 backdrop-blur-xl border-b border-orange-500/20 shadow-2xl">

        <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <div className="relative">

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-xl shadow-lg shadow-orange-500/30 transition-all duration-500 hover:scale-110 hover:rotate-6">
                ♻️
              </div>

              <span className="absolute -right-1 -top-1 w-3 h-3 bg-green-400 border-2 border-slate-950 rounded-full animate-pulse"></span>

            </div>

            <div>

              <h1 className="font-black text-base sm:text-lg tracking-tight">
                Gulf Scrap
              </h1>

              <p className="text-orange-500 text-[9px] sm:text-[10px] font-bold tracking-[0.18em]">
                MANAGEMENT PORTAL
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3 sm:gap-5">

            {/* LIVE STATUS */}

            <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">

              <span className="relative flex h-2.5 w-2.5">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>

              </span>

              <span className="text-green-400 text-xs font-bold">
                SYSTEM ONLINE
              </span>

            </div>

            {/* ADMIN */}

            <div className="hidden sm:block text-right">

              <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                Welcome back
              </p>

              <p className="text-white font-bold text-sm">
                Administrator
              </p>

            </div>

            {/* AVATAR */}

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-black shadow-lg shadow-orange-500/20">
              A
            </div>

            {/* LOGOUT */}

            <button
              onClick={logout}
              className="
                hidden sm:block
                bg-red-500/10
                hover:bg-red-500
                border border-red-500/30
                hover:border-red-500
                text-red-400
                hover:text-white
                px-4
                py-2
                rounded-lg
                font-bold
                text-sm
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
              "
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="flex min-h-[calc(100vh-64px)]">

        {/* =====================================================
            DESKTOP SIDEBAR
        ===================================================== */}

        <aside className="hidden md:flex md:flex-col w-60 lg:w-64 bg-slate-950/80 border-r border-orange-500/10">

          {/* SIDEBAR HEADER */}

          <div className="p-6 border-b border-slate-800">

            <p className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-black">
              Control Center
            </p>

            <h2 className="text-white font-bold text-lg mt-1">
              Administration
            </h2>

            <p className="text-gray-500 text-xs mt-1">
              Manage your website
            </p>

          </div>

          {/* MENU */}

          <nav className="p-3 flex-1">

            {menuItems.map((item) => (

              <button
                key={item}
                onClick={() => changeTab(item)}
                className={`
                  relative
                  w-full
                  text-left
                  px-4
                  py-3.5
                  mb-2
                  rounded-xl
                  flex
                  items-center
                  gap-3
                  font-semibold
                  transition-all
                  duration-300
                  group
                  ${
                    activeTab === item
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                      : "text-gray-400 hover:text-white hover:bg-slate-800/80"
                  }
                `}
              >

                {/* ACTIVE INDICATOR */}

                {activeTab === item && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-white rounded-r-full"></span>
                )}

                <span
                  className={`
                    text-xl
                    transition-transform
                    duration-300
                    ${
                      activeTab === item
                        ? "scale-110"
                        : "group-hover:scale-110"
                    }
                  `}
                >
                  {getMenuIcon(item)}
                </span>

                <span>
                  {item}
                </span>

                {item === "Enquiries" &&
                  enquiryCount > 0 && (

                    <span
                      className={`
                        ml-auto
                        min-w-6
                        h-6
                        px-1.5
                        rounded-full
                        flex
                        items-center
                        justify-center
                        text-[10px]
                        font-black
                        ${
                          activeTab === item
                            ? "bg-white text-orange-600"
                            : "bg-orange-500 text-white"
                        }
                      `}
                    >
                      {enquiryCount}
                    </span>

                  )}

              </button>

            ))}

          </nav>

          {/* SIDEBAR BOTTOM */}

          <div className="p-4">

            <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-950/30 border border-orange-500/20 p-4">

              <div className="flex items-center gap-2">

                <span className="text-xl">
                  🛡️
                </span>

                <p className="text-white text-sm font-bold">
                  Secure Portal
                </p>

              </div>

              <p className="text-gray-500 text-xs mt-2 leading-5">
                Your administration panel is protected.
              </p>

            </div>

          </div>

        </aside>

        {/* =====================================================
            MOBILE BOTTOM NAVIGATION
        ===================================================== */}

        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-orange-500/20 shadow-2xl">

          <div className="flex">

            {menuItems.map((item) => (

              <button
                key={item}
                onClick={() => changeTab(item)}
                className={`
                  relative
                  flex-1
                  py-3
                  text-xs
                  font-bold
                  transition-all
                  duration-300
                  ${
                    activeTab === item
                      ? "text-orange-400"
                      : "text-gray-500"
                  }
                `}
              >

                {activeTab === item && (
                  <span className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-orange-500 rounded-full"></span>
                )}

                <div
                  className={`
                    text-xl
                    mb-1
                    transition-transform
                    duration-300
                    ${
                      activeTab === item
                        ? "scale-110"
                        : ""
                    }
                  `}
                >
                  {getMenuIcon(item)}
                </div>

                {item}

                {item === "Enquiries" &&
                  enquiryCount > 0 && (

                    <span className="absolute top-1 right-1/4 bg-orange-500 text-white text-[9px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">
                      {enquiryCount}
                    </span>

                  )}

              </button>

            ))}

          </div>

        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <main className="flex-1 overflow-auto pb-20 md:pb-0">

          {/* =================================================
              DASHBOARD
          ================================================= */}

          {activeTab === "Dashboard" && (

            <div className="p-5 sm:p-8 lg:p-10 max-w-[1600px] mx-auto">

              {/* =================================================
                  HERO
              ================================================= */}

              <section className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/70 p-6 sm:p-8 lg:p-10 shadow-2xl">

                {/* BACKGROUND EFFECTS */}

                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl"></div>

                <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>

                <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">

                  {/* HERO TEXT */}

                  <div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-5">

                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>

                      ADMIN DASHBOARD

                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">

                      Welcome back,
                      <span className="text-orange-500">
                        {" "}Administrator
                      </span>

                    </h1>

                    <p className="text-gray-400 mt-4 max-w-2xl leading-7">

                      Manage your Gulf Scrap website enquiries,
                      monitor activity and control your administration
                      settings from one secure dashboard.

                    </p>

                    {/* QUICK BUTTONS */}

                    <div className="flex flex-wrap gap-3 mt-7">

                      <button
                        onClick={() => changeTab("Enquiries")}
                        className="
                          group
                          bg-orange-500
                          hover:bg-orange-600
                          text-white
                          px-5
                          py-3
                          rounded-xl
                          font-bold
                          transition-all
                          duration-300
                          hover:scale-105
                          active:scale-95
                          shadow-lg
                          shadow-orange-500/20
                        "
                      >
                        <span className="group-hover:mr-1 transition-all">
                          📩
                        </span>{" "}
                        View Enquiries
                      </button>

                      <button
                        onClick={() => changeTab("Settings")}
                        className="
                          bg-slate-800
                          hover:bg-slate-700
                          border
                          border-slate-700
                          hover:border-orange-500/40
                          text-white
                          px-5
                          py-3
                          rounded-xl
                          font-bold
                          transition-all
                          duration-300
                          hover:scale-105
                          active:scale-95
                        "
                      >
                        ⚙️ Settings
                      </button>

                    </div>

                  </div>

                  {/* =================================================
                      LIVE CLOCK
                  ================================================= */}

                  <div className="relative">

                    <div className="w-full lg:w-80 rounded-3xl bg-slate-950/70 border border-orange-500/20 p-6 backdrop-blur-xl shadow-2xl">

                      {/* CLOCK HEADER */}

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">

                          <span className="relative flex h-2.5 w-2.5">

                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>

                          </span>

                          <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                            Live Time
                          </span>

                        </div>

                        <span className="text-orange-400">
                          🕐
                        </span>

                      </div>

                      {/* TIME */}

                      <div className="mt-5">

                        <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          {formattedTime}
                        </p>

                        <p className="text-orange-400 text-sm font-bold mt-2">
                          {formattedDate}
                        </p>

                      </div>

                      {/* DATE LINE */}

                      <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-3">

                        <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                          📅
                        </div>

                        <div>

                          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                            Portal Status
                          </p>

                          <p className="text-green-400 text-sm font-bold">
                            All systems operational
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  STATISTICS
              ================================================= */}

              <section className="mt-8">

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <p className="text-orange-500 text-xs font-black uppercase tracking-[0.2em]">
                      Overview
                    </p>

                    <h2 className="text-2xl font-black text-white mt-1">
                      Website Activity
                    </h2>

                  </div>

                  <button
                    onClick={fetchDashboardStats}
                    className="text-gray-400 hover:text-orange-400 text-sm font-semibold transition"
                  >
                    ↻ Refresh
                  </button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                  {/* TOTAL */}

                  <div className="group relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 shadow-xl shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-500/20">

                    <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/10"></div>

                    <div className="relative">

                      <div className="flex items-center justify-between">

                        <p className="text-orange-100 text-sm font-bold">
                          Total Enquiries
                        </p>

                        <div className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          📬
                        </div>

                      </div>

                      <h3 className="text-5xl font-black text-white mt-4">
                        {enquiryCount}
                      </h3>

                      <p className="text-orange-100 text-xs mt-3">
                        All website submissions
                      </p>

                    </div>

                  </div>

                  {/* PENDING */}

                  <div className="group bg-slate-900/90 border border-slate-700 hover:border-yellow-500/40 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:-translate-y-2">

                    <div className="flex items-center justify-between">

                      <p className="text-gray-400 text-sm font-bold">
                        Pending
                      </p>

                      <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition">
                        ⏳
                      </div>

                    </div>

                    <h3 className="text-5xl font-black text-yellow-400 mt-4">
                      {pendingCount}
                    </h3>

                    <p className="text-gray-500 text-xs mt-3">
                      Waiting for action
                    </p>

                  </div>

                  {/* COMPLETED */}

                  <div className="group bg-slate-900/90 border border-slate-700 hover:border-green-500/40 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:-translate-y-2">

                    <div className="flex items-center justify-between">

                      <p className="text-gray-400 text-sm font-bold">
                        Completed
                      </p>

                      <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition">
                        ✓
                      </div>

                    </div>

                    <h3 className="text-5xl font-black text-green-400 mt-4">
                      {completedCount}
                    </h3>

                    <p className="text-gray-500 text-xs mt-3">
                      Successfully handled
                    </p>

                  </div>

                  {/* WEBSITE */}

                  <div className="group bg-slate-900/90 border border-slate-700 hover:border-blue-500/40 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:-translate-y-2">

                    <div className="flex items-center justify-between">

                      <p className="text-gray-400 text-sm font-bold">
                        Website
                      </p>

                      <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition">
                        🌐
                      </div>

                    </div>

                    <h3 className="text-xl font-black text-white mt-5">
                      Gulf International Scrap
                    </h3>

                    <p className="text-blue-400 text-xs mt-3 font-semibold">
                      Website Management
                    </p>

                  </div>

                </div>

              </section>

              {/* =================================================
                  LOWER SECTION
              ================================================= */}

              <section className="mt-8 grid lg:grid-cols-3 gap-6">

                {/* QUICK ACTIONS */}

                <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">

                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      ⚡
                    </div>

                    <div>

                      <h2 className="text-xl font-black text-white">
                        Quick Actions
                      </h2>

                      <p className="text-gray-500 text-xs mt-1">
                        Manage your portal quickly
                      </p>

                    </div>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {/* ENQUIRIES */}

                    <button
                      onClick={() => changeTab("Enquiries")}
                      className="
                        group
                        text-left
                        p-5
                        rounded-2xl
                        bg-slate-800/70
                        border
                        border-slate-700
                        hover:border-orange-500/50
                        hover:bg-orange-500/5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                    >

                      <div className="flex items-center justify-between">

                        <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition">
                          📩
                        </div>

                        <span className="text-gray-600 group-hover:text-orange-400 transition">
                          →
                        </span>

                      </div>

                      <h3 className="text-white font-bold mt-4">
                        Manage Enquiries
                      </h3>

                      <p className="text-gray-500 text-xs mt-1">
                        View, edit and manage customer messages.
                      </p>

                    </button>

                    {/* SETTINGS */}

                    <button
                      onClick={() => changeTab("Settings")}
                      className="
                        group
                        text-left
                        p-5
                        rounded-2xl
                        bg-slate-800/70
                        border
                        border-slate-700
                        hover:border-purple-500/50
                        hover:bg-purple-500/5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                    >

                      <div className="flex items-center justify-between">

                        <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition">
                          ⚙️
                        </div>

                        <span className="text-gray-600 group-hover:text-purple-400 transition">
                          →
                        </span>

                      </div>

                      <h3 className="text-white font-bold mt-4">
                        Administrator Settings
                      </h3>

                      <p className="text-gray-500 text-xs mt-1">
                        Manage account and security settings.
                      </p>

                    </button>

                  </div>

                </div>

                {/* SECURITY CARD */}

                <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">

                  <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-green-500/5 blur-2xl"></div>

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl">
                        🛡️
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black">
                        SECURE
                      </span>

                    </div>

                    <h2 className="text-xl font-black text-white mt-5">
                      Security
                    </h2>

                    <p className="text-gray-500 text-sm leading-6 mt-2">
                      Your administrator session is protected
                      by the authentication system.
                    </p>

                    <div className="mt-5 space-y-3">

                      <div className="flex items-center gap-3">

                        <span className="w-2 h-2 rounded-full bg-green-500"></span>

                        <span className="text-gray-400 text-xs">
                          Authentication active
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <span className="w-2 h-2 rounded-full bg-green-500"></span>

                        <span className="text-gray-400 text-xs">
                          Secure admin session
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <span className="w-2 h-2 rounded-full bg-green-500"></span>

                        <span className="text-gray-400 text-xs">
                          Database connected
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  FOOTER INFO
              ================================================= */}

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">

                <p>
                  © {currentTime.getFullYear()} Gulf Scrap
                  Management Portal
                </p>

                <p className="flex items-center gap-2">

                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>

                  System operational

                </p>

              </div>

            </div>

          )}

          {/* =================================================
              ENQUIRIES
          ================================================= */}

          {activeTab === "Enquiries" && (

            <div className="p-0">

              <Enquiries />

            </div>

          )}

          {/* =================================================
              SETTINGS
          ================================================= */}

          {activeTab === "Settings" && (

            <div className="p-5 sm:p-8 lg:p-10 max-w-[1200px] mx-auto">

              {/* HEADER */}

              <div className="mb-8">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl">
                    ⚙️
                  </div>

                  <div>

                    <h1 className="text-3xl sm:text-4xl font-black text-white">
                      Settings
                    </h1>

                    <p className="text-gray-400 mt-1">
                      Manage your administrator settings.
                    </p>

                  </div>

                </div>

              </div>

              <div className="max-w-3xl space-y-6">

                {/* ACCOUNT */}

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">

                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      👤
                    </div>

                    <div>

                      <h2 className="text-xl font-black text-white">
                        Administrator Account
                      </h2>

                      <p className="text-gray-500 text-xs mt-1">
                        Account information
                      </p>

                    </div>

                  </div>

                  <label className="block text-gray-400 text-sm mb-2 font-semibold">
                    Username
                  </label>

                  <input
                    type="text"
                    value="Admin"
                    disabled
                    className="w-full bg-slate-950 border border-slate-800 text-gray-400 rounded-xl px-4 py-3"
                  />

                  <div className="mt-6">

                    <label className="block text-gray-400 text-sm mb-2 font-semibold">
                      Account Status
                    </label>

                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2.5 rounded-xl">

                      <span className="relative flex h-2 w-2">

                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>

                      </span>

                      Active

                    </div>

                  </div>

                </div>

                {/* SECURITY */}

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      🔐
                    </div>

                    <div>

                      <h2 className="text-xl font-black text-white">
                        Security
                      </h2>

                      <p className="text-gray-500 text-xs mt-1">
                        Protect your administrator session
                      </p>

                    </div>

                  </div>

                  <p className="text-gray-400 mt-5 leading-6">
                    Your administrator session is protected by
                    the authentication system.
                  </p>

                  <button
                    onClick={logout}
                    className="
                      mt-6
                      bg-red-500/10
                      hover:bg-red-500
                      border
                      border-red-500/30
                      hover:border-red-500
                      text-red-400
                      hover:text-white
                      px-5
                      py-3
                      rounded-xl
                      font-bold
                      transition-all
                      duration-300
                      hover:scale-105
                      active:scale-95
                    "
                  >
                    🚪 Logout from Admin Panel
                  </button>

                </div>

              </div>

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default Dashboard;