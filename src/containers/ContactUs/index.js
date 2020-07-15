import React from "react";
import "./style.css";

const ContactUs = (props) => {
  return (
    <div className="contactContainer">
      <div className="mainContactContainer">
        <h2>Contact me</h2>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">Mobile</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              <textarea required="required"></textarea>
              <span className="text">Type your message here...</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
