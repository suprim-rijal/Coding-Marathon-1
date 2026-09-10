import React, { useState } from "react";
import "./ContactListManager.css";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    job_title: "",
    birthday: "",
    notes: "",
    website: "",
    favourite: false,
  });

  function handleChange(e) {
    console.log(e);
    const { name, value, type, checked } = e.target;
    setNewContact((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Add a new contact to the list
  function addContact() {
    if (
      newContact.name.trim() !== "" &&
      newContact.email.trim() !== "" &&
      newContact.phone.trim() !== "" &&
      newContact.job_title.trim() !== "" &&
      newContact.birthday.trim() !== "" &&
      newContact.notes.trim() !== "" &&
      newContact.website.trim() !== ""
    ) {
      setContacts((c) => [...c, newContact]);
      setNewContact({
        name: "",
        email: "",
        phone: "",
        job_title: "",
        birthday: "",
        notes: "",
        website: "",
        favourite: false,
      });
    } else {
      alert("Please Enter All the Fields");
    }
  }

  // Delete a contact from the list
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="app-container">
      <h1>Contact List Manager</h1>

      <div className="input-section">
        <input
          type="text"
          name="name"
          placeholder="Enter contact name..."
          value={newContact.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email address..."
          value={newContact.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={newContact.phone}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="job_title"
          placeholder="Enter the job title"
          value={newContact.job_title}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="date"
          name="birthday"
          placeholder="Enter birthday"
          value={newContact.birthday}
          onChange={handleChange}
          className="input-field"
        />
        <textarea
          type="textarea"
          name="notes"
          placeholder="Enter notes here"
          value={newContact.notes}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="url"
          name="website"
          placeholder="Enter website"
          value={newContact.website}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="checkbox"
          name="favourite"
          checked={newContact.favourite}
          onChange={handleChange}
          className="input-field"
        />
        <button onClick={addContact} className="add-button">
          Add Contact
        </button>
      </div>

      <div className="contacts-section">
        <h2>Your Contacts ({contacts.length})</h2>
        {contacts.length === 0 ? (
          <p className="empty-message">
            No contacts yet. Add one to get started!
          </p>
        ) : (
          <ol className="contacts-list">
            {contacts.map((contact, index) => (
              <li key={index} className="contact-item">
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-email">{contact.email}</span>
                  <span className="contact-phone">{contact.phone}</span>
                  <span className="contact-job_title">{contact.job_title}</span>
                  <span className="contact-birthday">{contact.birthday}</span>
                  <span className="contact-notes">{contact.notes}</span>
                  <span className="contact-website">{contact.website}</span>
                  <span className="contact-favourite">
                    {contact.favourite ? "Favourite: ✅" : "Favourite: ❌"}
                  </span>
                </div>
                <button
                  onClick={() => deleteContact(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ContactListManager;
