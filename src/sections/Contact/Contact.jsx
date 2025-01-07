import React, { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing contacts from localStorage
    const savedContacts = localStorage.getItem("contacts");
    const contacts = savedContacts ? JSON.parse(savedContacts) : [];

    // Add the new contact
    const updatedContacts = [...contacts, formData];
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    // Show success message and reset form
    setSuccessMessage("Contact details saved successfully!");
    setFormData({ name: "", email: "", message: "" });

    // Clear success message after a few seconds
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  return (
    <div>
      <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>

        {successMessage && <p className="successMessage">{successMessage}</p>}
      </section>
    </div>
  );
}

export default Contact;
