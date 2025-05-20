import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!form.type) newErrors.type = "Please select a user type";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      Swal.fire({
        title: "Account Created!",
        text: "Your account has been registered.",
        icon: "success",
        confirmButtonText: "Continue",
      }).then(() => {
        navigate("/");
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md shadow-xl bg-base-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full bg-white focus:outline-none focus:border-2 rounded-xl"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full bg-white focus:outline-none focus:border-2 rounded-xl"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full bg-white pr-10 focus:outline-none focus:border-2 rounded-xl"
                value={form.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-xl text-gray-600"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Type */}
          <div>
            <label className="label">
              <span className="label-text">User Type</span>
            </label>
            <select
              name="type"
              className="select select-bordered w-full bg-white rounded-xl"
              value={form.type}
              onChange={handleChange}
              required>
              <option value="">Select type</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="seller">Seller</option>
              <option value="agency">Agency</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary bg-blue-700 rounded-full w-full mt-4">
            Register
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-700 hover:underline">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
