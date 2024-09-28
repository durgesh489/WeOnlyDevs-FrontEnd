import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CostCalculator = () => {
  const [formData, setFormData] = useState({
    serviceType: "web",
    pages: 5,
    designComplexity: "basic",
    features: [],
    hosting: false,
    platform: "web",
  });

  const [estimate, setEstimate] = useState({ price: 0, duration: 0 });

  const featureOptions = [
    "User Authentication",
    "Payment Gateway",
    "Database Integration",
    "Admin Panel",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "features") {
        setFormData((prevState) => ({
          ...prevState,
          features: checked
            ? [...prevState.features, value]
            : prevState.features.filter((feature) => feature !== value),
        }));
      } else {
        setFormData((prevState) => ({ ...prevState, [name]: checked }));
      }
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const calculateEstimate = () => {
    let baseCost = formData.serviceType === "web" ? 100 : 200; // Base cost for web or app
    let duration = formData.serviceType === "web" ? 10 : 20; // Base duration (days)

    baseCost += formData.pages * 100; // Adding cost per page/screen
    duration += formData.pages * 2; // Adding duration per page

    if (formData.designComplexity === "intermediate") {
      baseCost += 100;
      duration += 5;
    } else if (formData.designComplexity === "advanced") {
      baseCost += 200;
      duration += 10;
    }

    baseCost += formData.features.length * 200; // Adding feature costs
    duration += formData.features.length * 2; // Adding time for features

    if (formData.hosting) {
      baseCost += 200;
    }

    if (formData.platform === "both") {
      baseCost += 1500;
      duration += 7;
    }

    setEstimate({ price: baseCost, duration });
  };

  return (
    <div className="container mt-5">
      <h2>Cost Calculator</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">
            Type of Service
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="form-select"
            value={formData.serviceType}
            onChange={handleInputChange}
          >
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="pages" className="form-label">
            Number of Pages/Screens
          </label>
          <input
            type="number"
            className="form-control"
            id="pages"
            name="pages"
            min="1"
            value={formData.pages}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="designComplexity" className="form-label">
            Design Complexity
          </label>
          <select
            id="designComplexity"
            name="designComplexity"
            className="form-select"
            value={formData.designComplexity}
            onChange={handleInputChange}
          >
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Features</label>
          {featureOptions.map((feature) => (
            <div key={feature} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="features"
                value={feature}
                id={feature}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor={feature}>
                {feature}
              </label>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={calculateEstimate}
        >
          Calculate Estimate
        </button>
      </form>

      {estimate.price > 0 && (
        <div className="mt-4 p-3 bg-light border rounded">
          <h4>Estimated Price: ${estimate.price}</h4>
          <p>Estimated Duration: {estimate.duration} days</p>
        </div>
      )}
    </div>
  );
};

export default CostCalculator;
