import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
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
        title: "Success!",
        text: "You have logged in successfully.",
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
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full focus:outline-none focus:border-2 rounded-xl"
              value={form.email}
              onChange={handleChange}
              defaultValue={"abc@gamil.com"}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10 focus:outline-none focus:border-2 rounded-xl"
                value={form.password}
                onChange={handleChange}
                defaultValue={123456}
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

          <div className="flex justify-between items-center mt-2">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              <span className="label-text text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-700 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-primary bg-blue-700 rounded-full w-full mt-4">
            Login
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <NavLink to="/register" className="text-blue-700 hover:underline">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
