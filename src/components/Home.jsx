import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">
            Welcome to Our Web & App Development Services
          </h1>
          <p className="lead">
            We craft high-quality web and mobile applications tailored to your
            business needs.
          </p>
          <a href="#services" className="btn btn-outline-light btn-lg mt-4">
            Explore Our Services
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row">
            {/* Web Development Service */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <img
                    src="/images/web.jpg"
                    alt="Web Development"
                    width={"100%"}
                  />
                  <h3 className="card-title">Web Development</h3>
                  <p className="card-text">
                    We build responsive, scalable, and visually appealing
                    websites with cutting-edge technology. From static pages to
                    dynamic eCommerce platforms, we ensure a robust online
                    presence for your business.
                  </p>
                </div>
                <div className="card-footer bg-white">
                  <a href="/web" className="btn btn-dark w-100">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* App Development Service */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <img
                    src="/images/app.jpg"
                    alt="Web Development"
                    width={"100%"}
                  />
                  <h3 className="card-title">App Development</h3>
                  <p className="card-text">
                    We develop mobile apps that provide seamless user
                    experiences across all devices. Whether it’s iOS, Android,
                    or cross-platform, our apps deliver performance and
                    functionality that drive results.
                  </p>
                </div>
                <div className="card-footer bg-white">
                  <a href="/app" className="btn btn-dark w-100">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-people-fill display-4 mb-3 text-primary"></i>
              <h4>Expert Team</h4>
              <p>
                Our experienced team ensures quality at every stage of the
                development process.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightning-charge-fill display-4 mb-3 text-warning"></i>
              <h4>Fast Delivery</h4>
              <p>
                We guarantee timely project delivery without compromising
                quality.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-stars display-4 mb-3 text-success"></i>
              <h4>Customer Focus</h4>
              <p>
                Our services are tailored to meet your specific needs and exceed
                your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2>Get in Touch</h2>
          <p className="lead">
            Have a project in mind? Let's make it a reality together.
          </p>
          <a href="/contact" className="btn btn-dark btn-lg mt-3">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 OnlyDevs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
