import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const DeveloperList = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const truncateText = (text, limit = 100) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };
  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await axios.get(
          "https://api.weonlydevs.com/work-details"
        );
        setDevelopers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddDeveloper = () => {
    navigate("/add-developer"); // Navigate to the add developer form
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Developers</h2>
        <button className="btn btn-dark" onClick={handleAddDeveloper}>
          Add as Developer
        </button>
      </div>
      <div className="row">
        {developers.map((developer) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={developer._id}
          >
            <div className="card shadow-sm" style={{ height: "100%" }}>
              <img
                src={
                  developer.image
                    ? `http://localhost:3000/uploads/${developer.image
                        .split("/")
                        .pop()}`
                    : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                className="card-img-top rounded-circle mx-auto"
                alt={developer.name}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  marginTop: "20px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-black">{developer.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {developer.email}
                </p>
                <p className="card-text">
                  <strong>Title:</strong> {developer.title}
                </p>
                <p className="card-text">
                  <strong>Experience:</strong> {developer.experience}
                </p>
                <p className="card-text">
                  <strong>About:</strong> {truncateText(developer.about, 80)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperList;
