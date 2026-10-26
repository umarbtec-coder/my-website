import { useEffect, useState } from "react";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Edit modal
  const [editingEnquiry, setEditingEnquiry] = useState(null);
  const [saving, setSaving] = useState(false);

  // ==============================
  // FORMAT DATE + TIME
  // ==============================

  const formatDateTime = (dateValue) => {
    if (!dateValue) {
      return {
        date: "Date unavailable",
        time: "",
        full: "Date unavailable",
      };
    }

    const date = new Date(dateValue);

    if (isNaN(date.getTime())) {
      return {
        date: "Date unavailable",
        time: "",
        full: "Date unavailable",
      };
    }

    const datePart = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const timePart = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const fullPart = `${datePart}, ${timePart}`;

    return {
      date: datePart,
      time: timePart,
      full: fullPart,
    };
  };

  // ==============================
  // FETCH ENQUIRIES
  // ==============================

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:3000/api/contact-data"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch enquiries");
      }

      const data = await response.json();

      setEnquiries(data.enquiries || []);
    } catch (error) {
      console.error("FETCH ENQUIRIES ERROR:", error);

      setError(
        "Cannot connect to backend. Make sure the server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // ==============================
  // UPDATE STATUS
  // ==============================

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/contact-status/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update status"
        );
      }

      const updatedContact =
        data.contact || data.enquiry;

      setEnquiries((previous) =>
        previous.map((item) =>
          item._id === id
            ? {
                ...item,
                ...(updatedContact || {}),
                status,
              }
            : item
        )
      );
    } catch (error) {
      console.error("UPDATE STATUS ERROR:", error);

      alert("Failed to update enquiry status.");
    }
  };

  // ==============================
  // OPEN EDIT MODAL
  // ==============================

  const openEditModal = (enquiry) => {
    setEditingEnquiry({
      _id: enquiry._id,
      name: enquiry.name || "",
      email: enquiry.email || "",
      message: enquiry.message || "",
      status: enquiry.status || "Pending",
    });
  };

  // ==============================
  // CLOSE EDIT MODAL
  // ==============================

  const closeEditModal = () => {
    if (saving) {
      return;
    }

    setEditingEnquiry(null);
  };

  // ==============================
  // SAVE EDIT
  // ==============================

  const saveEdit = async () => {
    if (!editingEnquiry) {
      return;
    }

    if (!editingEnquiry.name.trim()) {
      alert("Please enter the name.");
      return;
    }

    if (!editingEnquiry.email.trim()) {
      alert("Please enter the email.");
      return;
    }

    if (!editingEnquiry.message.trim()) {
      alert("Please enter the message.");
      return;
    }

    try {
      setSaving(true);

      const response = await fetch(
        `http://localhost:3000/api/contact/${editingEnquiry._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: editingEnquiry.name.trim(),
            email: editingEnquiry.email.trim(),
            message: editingEnquiry.message.trim(),
            status: editingEnquiry.status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update enquiry"
        );
      }

      const updatedEnquiry =
        data.enquiry || data.contact;

      setEnquiries((previous) =>
        previous.map((item) =>
          item._id === editingEnquiry._id
            ? updatedEnquiry
            : item
        )
      );

      setEditingEnquiry(null);

      alert("Enquiry updated successfully.");
    } catch (error) {
      console.error("SAVE EDIT ERROR:", error);

      alert(
        error.message ||
          "Failed to update enquiry."
      );
    } finally {
      setSaving(false);
    }
  };

  // ==============================
  // DELETE ENQUIRY
  // ==============================

  const deleteEnquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete enquiry"
        );
      }

      setEnquiries((previous) =>
        previous.filter(
          (item) => item._id !== id
        )
      );
    } catch (error) {
      console.error("DELETE ENQUIRY ERROR:", error);

      alert("Failed to delete enquiry.");
    }
  };

  // ==============================
  // STATUS STYLE
  // ==============================

  const getStatusStyle = (status) => {
    switch (status) {
      case "Contacted":
        return "bg-blue-500/20 text-blue-300 border-blue-500/40";

      case "Completed":
        return "bg-green-500/20 text-green-300 border-green-500/40";

      default:
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/40";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 p-5 md:p-8">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="mb-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20 animate-pulse">
                📩
              </div>

              <div>

                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Enquiries
                </h1>

                <p className="text-gray-400 mt-1">
                  Manage website contact enquiries
                </p>

              </div>

            </div>

          </div>

          <button
            onClick={fetchEnquiries}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
          >
            {loading ? "Loading..." : "↻ Refresh"}
          </button>

        </div>

      </div>

      {/* =====================================
          STAT CARDS
      ===================================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        {/* TOTAL */}

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-orange-500/20">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-orange-950 font-bold uppercase tracking-wide text-sm">
                Total Enquiries
              </p>

              <h2 className="text-5xl font-black text-white mt-2">
                {enquiries.length}
              </h2>

            </div>

            <div className="text-5xl opacity-80 animate-bounce">
              📬
            </div>

          </div>

        </div>

        {/* PENDING */}

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/40">

          <p className="text-gray-400 font-semibold">
            Pending
          </p>

          <h2 className="text-4xl font-bold text-yellow-400 mt-2">
            {
              enquiries.filter(
                (item) =>
                  (item.status || "Pending") ===
                  "Pending"
              ).length
            }
          </h2>

        </div>

        {/* COMPLETED */}

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-500/40">

          <p className="text-gray-400 font-semibold">
            Completed
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            {
              enquiries.filter(
                (item) =>
                  item.status === "Completed"
              ).length
            }
          </h2>

        </div>

      </div>

      {/* =====================================
          LOADING
      ===================================== */}

      {loading && (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-12 text-center">

          <div className="text-4xl mb-4 animate-spin">
            ⏳
          </div>

          <p className="text-orange-400 text-lg font-bold">
            Loading enquiries...
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Please wait while we fetch your enquiries.
          </p>

        </div>
      )}

      {/* =====================================
          ERROR
      ===================================== */}

      {!loading && error && (
        <div className="bg-red-950/60 border border-red-500/40 rounded-2xl p-6">

          <div className="flex items-start gap-4">

            <div className="text-3xl animate-pulse">
              ⚠️
            </div>

            <div>

              <h2 className="text-red-300 font-bold text-lg">
                Connection Error
              </h2>

              <p className="text-red-400 mt-1">
                {error}
              </p>

              <button
                onClick={fetchEnquiries}
                className="mt-4 bg-red-600 hover:bg-red-500 hover:scale-105 active:scale-95 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300"
              >
                Try Again
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =====================================
          EMPTY
      ===================================== */}

      {!loading &&
        !error &&
        enquiries.length === 0 && (

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-12 text-center">

            <div className="text-6xl mb-5 animate-bounce">
              📭
            </div>

            <h2 className="text-2xl font-bold text-white">
              No Enquiries Yet
            </h2>

            <p className="text-gray-400 mt-2">
              Website contact form submissions
              will appear here.
            </p>

          </div>

        )}

      {/* =====================================
          ENQUIRY LIST
      ===================================== */}

      {!loading &&
        !error &&
        enquiries.length > 0 && (

          <div className="space-y-5">

            {enquiries.map((enquiry) => {

              const currentStatus =
                enquiry.status || "Pending";

              const dateInfo =
                formatDateTime(
                  enquiry.createdAt
                );

              return (

                <div
                  key={enquiry._id}
                  className="bg-slate-900 border border-slate-700 hover:border-orange-500/40 rounded-2xl shadow-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-orange-500/5"
                >

                  {/* =====================================
                      TOP ROW
                  ===================================== */}

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                    {/* USER */}

                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-lg transition-all duration-500 hover:rotate-12 hover:scale-110">
                        {enquiry.name
                          ? enquiry.name
                              .charAt(0)
                              .toUpperCase()
                          : "?"}
                      </div>

                      <div>

                        <h2 className="text-xl font-bold text-white">
                          {enquiry.name}
                        </h2>

                        <p className="text-orange-400 mt-1 break-all">
                          {enquiry.email}
                        </p>

                      </div>

                    </div>

                    {/* STATUS */}

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">

                      <span
                        className={`px-3 py-1.5 rounded-full border text-xs font-bold ${getStatusStyle(
                          currentStatus
                        )}`}
                      >
                        {currentStatus}
                      </span>

                      <select
                        value={currentStatus}
                        onChange={(e) =>
                          updateStatus(
                            enquiry._id,
                            e.target.value
                          )
                        }
                        className="bg-slate-800 text-white border border-slate-600 hover:border-orange-500 rounded-lg px-4 py-2.5 font-semibold outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-all duration-300"
                      >

                        <option
                          value="Pending"
                          className="bg-slate-800 text-yellow-300"
                        >
                          Pending
                        </option>

                        <option
                          value="Contacted"
                          className="bg-slate-800 text-blue-300"
                        >
                          Contacted
                        </option>

                        <option
                          value="Completed"
                          className="bg-slate-800 text-green-300"
                        >
                          Completed
                        </option>

                      </select>

                    </div>

                  </div>

                  {/* =====================================
                      MESSAGE
                  ===================================== */}

                  <div className="mt-6">

                    <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">
                      Message
                    </p>

                    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 transition-all duration-300 hover:border-slate-600">

                      <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
                        {enquiry.message ||
                          "No message provided."}
                      </p>

                    </div>

                  </div>

                  {/* =====================================
                      BOTTOM
                  ===================================== */}

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5 pt-5 border-t border-slate-800">

                    {/* =====================================
                        ANIMATED DATE
                    ===================================== */}

                    <div className="group">

                      <div
                        className="
                          relative
                          flex
                          items-center
                          gap-3
                          bg-slate-800/80
                          border
                          border-slate-700
                          rounded-xl
                          px-4
                          py-3
                          transition-all
                          duration-500
                          hover:border-orange-500/60
                          hover:bg-slate-800
                          hover:scale-[1.02]
                          overflow-hidden
                        "
                      >

                        {/* Animated shine */}

                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>

                        {/* Calendar */}

                        <div className="relative w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">

                          <span className="text-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                            📅
                          </span>

                        </div>

                        {/* Date */}

                        <div className="relative">

                          <div className="flex items-center gap-2">

                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                              Received
                            </p>

                            {/* Animated dot */}

                            <span className="relative flex h-2 w-2">

                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>

                              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>

                            </span>

                          </div>

                          <p className="text-gray-200 font-semibold text-sm mt-0.5">
                            {dateInfo.date}
                          </p>

                          <div className="flex items-center gap-1.5 mt-0.5">

                            <span className="text-orange-400 text-xs">
                              🕐
                            </span>

                            <p className="text-orange-400 text-xs font-semibold">
                              {dateInfo.time}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* =====================================
                        ACTION BUTTONS
                    ===================================== */}

                    <div className="flex gap-3">

                      {/* EDIT */}

                      <button
                        onClick={() =>
                          openEditModal(enquiry)
                        }
                        className="
                          bg-blue-600
                          hover:bg-blue-500
                          hover:scale-105
                          active:scale-95
                          text-white
                          px-5
                          py-2.5
                          rounded-lg
                          font-bold
                          transition-all
                          duration-300
                          shadow-lg
                          shadow-blue-500/10
                        "
                      >
                        ✏ Edit
                      </button>

                      {/* DELETE */}

                      <button
                        onClick={() =>
                          deleteEnquiry(
                            enquiry._id
                          )
                        }
                        className="
                          bg-red-600
                          hover:bg-red-500
                          hover:scale-105
                          active:scale-95
                          text-white
                          px-5
                          py-2.5
                          rounded-lg
                          font-bold
                          transition-all
                          duration-300
                          shadow-lg
                          shadow-red-500/10
                        "
                      >
                        🗑 Delete
                      </button>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        )}

      {/* =====================================
          EDIT MODAL
      ===================================== */}

      {editingEnquiry && (

        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeEditModal();
            }
          }}
        >

          <div className="w-full max-w-2xl bg-slate-900 border border-orange-500/30 rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_0.25s_ease-out]">

            {/* MODAL HEADER */}

            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-black text-white">
                    Edit Enquiry
                  </h2>

                  <p className="text-orange-100 text-sm mt-1">
                    Update enquiry information
                  </p>

                </div>

                <button
                  onClick={closeEditModal}
                  disabled={saving}
                  className="w-10 h-10 rounded-lg bg-black/20 hover:bg-black/40 hover:rotate-90 text-white text-2xl font-bold transition-all duration-300"
                >
                  ×
                </button>

              </div>

            </div>

            {/* MODAL FORM */}

            <div className="p-6 space-y-5">

              {/* NAME */}

              <div>

                <label className="block text-gray-300 font-bold text-sm mb-2">
                  Name
                </label>

                <input
                  type="text"
                  value={editingEnquiry.name}
                  onChange={(e) =>
                    setEditingEnquiry({
                      ...editingEnquiry,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter name"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="block text-gray-300 font-bold text-sm mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={editingEnquiry.email}
                  onChange={(e) =>
                    setEditingEnquiry({
                      ...editingEnquiry,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter email"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />

              </div>

              {/* STATUS */}

              <div>

                <label className="block text-gray-300 font-bold text-sm mb-2">
                  Status
                </label>

                <select
                  value={editingEnquiry.status}
                  onChange={(e) =>
                    setEditingEnquiry({
                      ...editingEnquiry,
                      status: e.target.value,
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 cursor-pointer transition-all duration-300"
                >

                  <option
                    value="Pending"
                    className="bg-slate-800 text-yellow-300"
                  >
                    Pending
                  </option>

                  <option
                    value="Contacted"
                    className="bg-slate-800 text-blue-300"
                  >
                    Contacted
                  </option>

                  <option
                    value="Completed"
                    className="bg-slate-800 text-green-300"
                  >
                    Completed
                  </option>

                </select>

              </div>

              {/* MESSAGE */}

              <div>

                <label className="block text-gray-300 font-bold text-sm mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  value={editingEnquiry.message}
                  onChange={(e) =>
                    setEditingEnquiry({
                      ...editingEnquiry,
                      message: e.target.value,
                    })
                  }
                  placeholder="Enter message"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none transition-all duration-300"
                />

              </div>

            </div>

            {/* MODAL FOOTER */}

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 p-6 bg-slate-950 border-t border-slate-800">

              <button
                onClick={closeEditModal}
                disabled={saving}
                className="bg-slate-700 hover:bg-slate-600 hover:scale-105 active:scale-95 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
              >
                Cancel
              </button>

              <button
                onClick={saveEdit}
                disabled={saving}
                className="bg-orange-500 hover:bg-orange-600 hover:scale-105 active:scale-95 disabled:bg-orange-500/50 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
              >
                {saving
                  ? "Saving..."
                  : "✓ Save Changes"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Enquiries;