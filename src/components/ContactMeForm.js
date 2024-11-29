import React, { useState } from "react";
import "../CSS/ContactMeForm.css";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formDataObj = new FormData(event.target);

    formDataObj.append("access_key", "f05b9f22-e68c-428f-a069-c3ba45583a81"); // Replace with your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsPopupVisible(true); // Show the popup
        setFormData({ name: "", email: "", message: "" }); // Reset the formData state
      } else {
        console.error("Submission error:", data);
        setResult(data.message || "Error submitting the form.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Close the popup
    setResult(""); // Reset result message
  };

  return (
    <div className="contact-form-container">
      <h2>Get in Touch</h2>
      <p>I'm available for collaboration and open to new opportunities.<br /> Fill out the form below, and I'll get back to you soon!</p>
      <form onSubmit={onSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
      {result && <p className="form-result">{result}</p>}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>Thank you for reaching out! I'll get back to you shortly.</p>
            <button onClick={closePopup} className="popup-button">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
