import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SubmitListing = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    features: [],
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      const newFeatures = checked
        ? [...prev.features, value]
        : prev.features.filter((f) => f !== value);
      return { ...prev, features: newFeatures };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.model || !form.price) {
      Swal.fire("Error", "Please fill all required fields", "error");
      return;
    }

    Swal.fire("Success", "Listing submitted successfully!", "success");
    navigate("/");
  };

  return (
    <div className="min-h-screen px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-xl p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Submit Car Listing
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Car Name *"
              className="input input-bordered w-full bg-white focus:outline-none border-gray-300"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="model"
              placeholder="Model *"
              className="input input-bordered w-full bg-white border-gray-300"
              value={form.model}
              onChange={handleChange}
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              className="input input-bordered w-full bg-white border-gray-300"
              value={form.year}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price ($) *"
              className="input input-bordered w-full bg-white border-gray-300"
              value={form.price}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="mileage"
              placeholder="Mileage (miles)"
              className="input input-bordered w-full bg-white border-gray-300"
              value={form.mileage}
              onChange={handleChange}
            />
            <select
              name="fuelType"
              className="select select-bordered w-full bg-white border-gray-300"
              value={form.fuelType}
              onChange={handleChange}>
              <option value="">Fuel Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
            </select>
            <select
              name="transmission"
              className="select select-bordered w-full bg-white border-gray-300"
              value={form.transmission}
              onChange={handleChange}>
              <option value="">Transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
              <option value="cvt">CVT</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
              Features:
            </label>
            <div className="flex flex-wrap gap-4">
              {[
                "Sunroof",
                "Navigation",
                "Bluetooth",
                "Backup Camera",
                "Leather Seats",
              ].map((feature) => (
                <label
                  key={feature}
                  className="label cursor-pointer text-gray-700">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm mr-2"
                    value={feature}
                    onChange={handleCheckbox}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          <div>
            <textarea
              name="description"
              rows="4"
              placeholder="Description"
              className="textarea textarea-bordered w-full bg-white border-gray-300"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            {form.image && (
              <img
                src={URL.createObjectURL(form.image)}
                alt="Preview"
                className="mt-4 rounded-md w-40 h-auto border border-gray-300"
              />
            )}
          </div>

          <div className="flex justify-between my-4">
            <button
              type="submit"
              className="btn bg-blue-700 hover:bg-blue-800 text-white rounded-full w-fit text-lg">
              Submit Listing
            </button>
            <NavLink
              to="/"
              className="btn bg-red-700 hover:bg-red-800 text-white rounded-full w-fit text-lg">
              Cancel
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitListing;
