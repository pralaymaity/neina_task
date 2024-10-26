import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/register", form);
      console.log("Registration Successful");

      console.log(response.data.message);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="h-[700px] ">
      <h2 className="text-center text-2xl text-slate-900 py-8 font-bold mb-4">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-50 p-8 w-8/12 mx-auto rounded-xl shadow-md"
      >
        <div className="mb-6">
          <label className="block text-gray-700">First Name:</label>
          <input
            className="w-6/12 p-4 mt-2 rounded-md border text-slate-900 border-blue-500 outline-none"
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Last Name:</label>
          <input
            className="w-6/12 p-4 mt-2 rounded-md border text-slate-900 border-blue-500 outline-none"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Email:</label>
          <input
            className="w-6/12 p-4 mt-2 rounded-md border text-slate-900 border-blue-500 outline-none"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            className="w-6/12 p-4 mt-2 rounded-md border text-slate-900 border-blue-500 outline-none"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="w-6/12 mt-4 px-6 py-2 font-semibold text-lg rounded-md bg-blue-950 border text-white"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
