import React from "react";

function Contact() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h1 className="page-title">Connect with Us</h1>
              <p className="page-description">
                Reach out and connect with OBERON INFOTECH for innovative IT
                solutions tailored to your business needs. Let's start
                collaborating today!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="contact-form-head">
                <h2 className="mb0">Leave a Message Here</h2>
                <p>We will connect you to OBERON INFOTECH ASAP.</p>
              </div>
              <div className="contact-form mt30">
                <form method="post" action="#">
                  <div className="row">
                    <div className="form-group pb-3 col-6">
                      <label htmlFor="name">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group pb-3 col-6">
                      <label htmlFor="mobileno">
                        Mobile No <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobileno"
                        name="mobileno"
                        required
                      />
                    </div>
                    <div className="form-group pb-3 col-6">
                      <label htmlFor="email">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group pb-3 col-6">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                      />
                    </div>
                    <div className="form-group pb-3 col-12">
                      <label htmlFor="message">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-default">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="row mb20 contactinfo">
                <div className="col-3">
                  <h4 className="mb0">Phone</h4>
                  <p>+91 765 989 1716 </p>
                </div>
                <div className="col-3">
                  <h4 className="mb0">Inquire with us</h4>
                  <p>info@obexplorers.com</p>
                </div>
                <div className="col-3">
                  <h4 className="mb0">Email</h4>
                  <p>info@obexplorers.com</p>
                </div>
                <div className="col-3">
                  <h4 className="mb0">Head Office</h4>
                  <p>
                    #203, 2nd Floor, SBR CV Towers, Madhapur Hyderabad-500081
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
