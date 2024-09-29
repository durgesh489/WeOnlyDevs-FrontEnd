import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Modal } from "react-bootstrap"; // Import Modal from react-bootstrap

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    experience: "",
    about: "",
    image: null,
  });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.post("https://api.weonlydevs.com/developers", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Show the success modal
      setShowModal(true);
      // Reset the form
      setFormData({
        name: "",
        email: "",
        title: "",
        experience: "",
        about: "",
        image: null,
      });
    } catch (error) {
      console.error("Error creating developer:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/developers"); // Navigate back to developers list
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-black">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name} // Controlled input
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-black">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email} // Controlled input
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label text-black">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Title"
                required
                value={formData.title} // Controlled input
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="experience" className="form-label text-black">
                Experience
              </label>
              <input
                type="text"
                className="form-control"
                id="experience"
                name="experience"
                placeholder="Experience"
                required
                value={formData.experience} // Controlled input
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="about" className="form-label text-black">
                About
              </label>
              <textarea
                className="form-control"
                id="about"
                name="about"
                rows="3"
                placeholder="About"
                required
                value={formData.about} // Controlled input
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label text-black">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Submit
            </button>
          </form>

          {/* Success Modal */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>You are added as a developer in OnlyDevs!</Modal.Body>
            <Modal.Footer>
              <button className="btn btn-dark"onClick={handleCloseModal}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
