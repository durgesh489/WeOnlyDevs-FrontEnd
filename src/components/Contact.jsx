import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_kq02k5r", "template_u4py6au", formData, "dimHq7uSV50HzZVG3")
      .then((response) => {
        console.log("Message sent successfully!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert(error.message);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-black">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-black">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label text-black">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark w-100">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
