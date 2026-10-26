import { useState } from "react";
import axios from "axios";

function AddMaterial({ onMaterialAdded, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/materials",
        formData
      );

      console.log("Material added:", response.data);

      alert("Material added successfully!");

      // Clear form
      setFormData({
        name: "",
        category: "",
        description: "",
        image: "",
      });

      // Refresh Dashboard materials
      if (onMaterialAdded) {
        await onMaterialAdded();
      }

      // Close popup
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Add material error:", error);

      if (error.response) {
        alert(
          error.response.data.message ||
            "Failed to add material."
        );
      } else {
        alert(
          "Cannot connect to backend. Make sure your Express server is running."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">

      {/* Header */}
      <div className="bg-slate-950 px-6 py-5 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Add Scrap Material
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Add a new material to your database
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-white text-3xl transition"
        >
          ×
        </button>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-6 space-y-5"
      >

        {/* Material Name */}
        <div>

          <label className="block mb-2 text-sm font-semibold text-slate-700">
            Material Name *
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Example: Copper Scrap"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />

        </div>

        {/* Category */}
        <div>

          <label className="block mb-2 text-sm font-semibold text-slate-700">
            Category *
          </label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Example: Non-Ferrous"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />

        </div>

        {/* Description */}
        <div>

          <label className="block mb-2 text-sm font-semibold text-slate-700">
            Description *
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter material description"
            rows="4"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />

        </div>

        {/* Image URL */}
        <div>

          <label className="block mb-2 text-sm font-semibold text-slate-700">
            Image URL
          </label>

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />

          <p className="text-xs text-slate-400 mt-1">
            Optional
          </p>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">

          <button
            type="button"
            onClick={onClose}
            className="flex-1 border border-slate-300 text-slate-700 hover:bg-slate-100 px-5 py-3 rounded-lg font-semibold transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-5 py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Adding..." : "Add Material"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default AddMaterial;