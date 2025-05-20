import React, { useState } from "react";

const LoanCalculator = () => {
  const [form, setForm] = useState({
    price: "",
    rate: "",
    downPayment: "",
    years: "",
  });

  const [result, setResult] = useState({
    monthly: 0,
    totalInterest: 0,
    totalPayment: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.price || isNaN(form.price) || form.price <= 0)
      newErrors.price = "Enter valid price";
    if (!form.rate || isNaN(form.rate) || form.rate <= 0)
      newErrors.rate = "Enter valid interest rate";
    if (!form.downPayment || isNaN(form.downPayment) || form.downPayment < 0)
      newErrors.downPayment = "Enter valid down payment";
    if (!form.years || isNaN(form.years) || form.years <= 0)
      newErrors.years = "Enter valid loan term";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const principal = parseFloat(form.price) - parseFloat(form.downPayment);
    const monthlyRate = parseFloat(form.rate) / 100 / 12;
    const numberOfPayments = parseFloat(form.years) * 12;

    const monthly =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const totalPayment = monthly * numberOfPayments;
    const totalInterest = totalPayment - principal;

    setResult({
      monthly: monthly.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    });
  };

  return (
    <div className=" container mx-auto px-20 py-5">
      <div className="md:flex border border-gray-300 rounded-4xl overflow-hidden">
        <div className="bg-white pl-14 py-15 pr-20 rounded-lg md:w-2/3 w-full">
          <h1 className="text-3xl font-bold">Auto Loan Calculator</h1>
          <p className="text-gray-500 mt-5 mb-10">
            Use our loan calculator to calculate payments over the life of your
            loan. Enter your information to see how much your monthly payments
            could be. You can adjust length of loan, down payment and interest
            rate to see how those changes raise or lower your payments.
          </p>
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="">
            <div className="flex gap-10">
              <div className="mb-4 w-1/2">
                <label className="block mb-1 font-medium text-gray-500">
                  Car Price ($)
                </label>
                <input
                  type="text"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-5 py-2 focus:border-blue-700 focus:outline-none"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}
              </div>

              <div className="mb-4 w-1/2">
                <label className="block mb-1 font-medium text-gray-500">
                  Interest Rate (%)
                </label>
                <input
                  type="text"
                  name="rate"
                  value={form.rate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-5 py-2 focus:border-blue-700 focus:outline-none"
                />
                {errors.rate && (
                  <p className="text-red-500 text-sm">{errors.rate}</p>
                )}
              </div>
            </div>

            <div className="flex gap-10">
              <div className="mb-4 w-1/2">
                <label className="block mb-1 font-medium text-gray-500">
                  Down Payment ($)
                </label>
                <input
                  type="text"
                  name="downPayment"
                  value={form.downPayment}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-5 py-2 focus:border-blue-700 focus:outline-none"
                />
                {errors.downPayment && (
                  <p className="text-red-500 text-sm">{errors.downPayment}</p>
                )}
              </div>

              <div className="mb-4 w-1/2">
                <label className="block mb-1 font-medium text-gray-500">
                  Loan Term (Years)
                </label>
                <input
                  type="text"
                  name="years"
                  value={form.years}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-5 py-2 focus:border-blue-700 focus:outline-none"
                />
                {errors.years && (
                  <p className="text-red-500 text-sm">{errors.years}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className=" text-[#050b20] hover:text-white px-6 py-2 border border-[#050b20] hover:bg-[#050b20] w-full mt-5 rounded-xl">
              Calculate
            </button>
          </form>
        </div>

        {/* Output Section */}
        <div className="mt-8 md:mt-0 px-13 py-24  md:w-1/3 w-full bg-[#050b20] text-white">
          <h2 className="text-3xl font-bold mb-10">Results</h2>
          <div className="space-y-6 text-lg">
            <div>
              <span className="font-semibold">Monthly Payment:</span> $
              {result.monthly}
            </div>
            <div>
              <span className="font-semibold">Total Interest:</span> $
              {result.totalInterest}
            </div>
            <div>
              <span className="font-semibold">Total Payment:</span> $
              {result.totalPayment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
