import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WorkDetailsForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    projectDescription: "",
    projectBudget: "",
    deadline: "",
    additionalNotes: "",
    techStack: "",
    resources: null,
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Using useNavigate for redirection

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resources") {
      setFormData({ ...formData, resources: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://147.79.70.33:5000/work-details", dataToSend);
      setMessage("Work details submitted successfully!");
      
      // Reset form
      setFormData({
        clientName: "",
        clientEmail: "",
        projectDescription: "",
        projectBudget: "",
        deadline: "",
        additionalNotes: "",
        techStack: "",
        resources: null,
      });

      // Redirect to Work List page after 1 second
      setTimeout(() => {
        navigate("/"); // Redirect to Work List page
      }, 1000);

    } catch (error) {
      setMessage("Error submitting work details");
      console.error("Error submitting work details:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Work Details Submission</h2>
      <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
        {/* Form fields remain unchanged */}
        <div className="mb-3">
          <label htmlFor="clientName" className="form-label">Client Name</label>
          <input
            type="text"
            className="form-control"
            id="clientName"
            name="clientName"
            required
            value={formData.clientName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="clientEmail" className="form-label">Client Email</label>
          <input
            type="email"
            className="form-control"
            id="clientEmail"
            name="clientEmail"
            required
            value={formData.clientEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="projectDescription" className="form-label">Project Description</label>
          <textarea
            className="form-control"
            id="projectDescription"
            name="projectDescription"
            rows="3"
            required
            value={formData.projectDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="projectBudget" className="form-label">Project Budget</label>
          <input
            type="text"
            className="form-control"
            id="projectBudget"
            name="projectBudget"
            required
            value={formData.projectBudget}
            onChange={handleChange}
            placeholder="Enter budget (e.g., $1000 )"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            name="deadline"
            required
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="techStack" className="form-label">Technology Stack</label>
          <input
            type="text"
            className="form-control"
            id="techStack"
            name="techStack"
            placeholder="e.g., React, Node.js, MongoDB"
            value={formData.techStack}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resources" className="form-label">Resources / Files</label>
          <input
            type="file"
            className="form-control"
            id="resources"
            name="resources"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
          <textarea
            className="form-control"
            id="additionalNotes"
            name="additionalNotes"
            rows="3"
            value={formData.additionalNotes}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark w-100">Submit Work Details</button>
      </form>
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default WorkDetailsForm;
