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
    <div>
      <h2>Registration</h2>
      <form onSubmit={(e) => e.preventDefault()}>

        <label >First Name:</label>
        <input
          type="text"
          name="firstName"         
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <label >Last Name:</label>
        <input
          type="text"
          name="lastName"         
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <label >Email:</label>
        <input
          type="email"
          name="email"         
          value={form.email}
          onChange={handleChange}
          required
        />

        <label >Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Registration;
