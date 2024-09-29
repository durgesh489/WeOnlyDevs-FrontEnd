import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const WorkList = () => {
  const [works, setWorks] = useState([]);

  // Fetch all works on component mount
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get(
          "https://api.weonlydevs.com/work-details"
        );
        setWorks(response.data);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <div className="container mt-5">
      {/* Top section with title and button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Work List</h2>
        <Link to="/post-work">
          <button className="btn btn-dark">Post Work</button>
        </Link>
      </div>

      {/* Display list of works */}
      {works.length > 0 ? (
        <div className="list-group">
          {works.map((work) => (
            <div key={work._id} className="list-group-item">
              {work.approve === 1 ? (
                <>
                  <h5>{work.projectDescription}</h5>

                  <p>
                    <strong>Client:</strong> {work.clientName} <br />
                    <strong>Email:</strong> {work.clientEmail} <br />
                    <strong>Budget:</strong> {work.projectBudget} <br />
                    <strong>Deadline:</strong> {work.deadline} <br />
                    <strong>Tech Stack:</strong> {work.techStack} <br />
                    <strong>Additional Notes:</strong> {work.additionalNotes}{" "}
                    <br />
                  </p>
                </>
              ) : (
                <span></span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>
          No works found. You can post new work using the "Post Work" button.
        </p>
      )}
    </div>
  );
};

export default WorkList;
