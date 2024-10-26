import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/login", { email, password });
      login(response.data.user);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="h-[600px] ">
      <h2 className="text-center text-2xl text-slate-900 py-8 font-bold mb-4">Login</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-slate-50 p-8 w-6/12 mx-auto rounded-xl shadow-md"
      >
        <div className="mb-6">
          <label className="block text-gray-700">Email:</label>
          <input
            className="w-6/12 p-4 mt-2 rounded-md border text-slate-900 border-blue-500 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            className="w-6/12 p-4 mt-2 rounded-md border text-slate-900 border-blue-500 outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button
          className="w-6/12 mt-4 px-6 py-2 font-semibold text-lg rounded-md bg-blue-950 border text-white"
          onClick={handleSubmit}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
