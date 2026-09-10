import React, { useState } from "react";
import "./ContactListManager.css";
import Contact from "./Contact";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  //State for controlling all the inputs of the form
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
      //checkbox uses 'checked', others are all 'value'
      //syntax breakdown:[name]: if (type ===checkbox) ==>checked else ==> value
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Add a new contact to the list
  function addContact() {
    //validation -checking if empty field is passed or not (expect checkbox which is either true or false)
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
      <label className="checkbox-label">
          <input
            type="checkbox"
            name="favourite"
            checked={newContact.favourite}
            onChange={handleChange}
            className="checkbox-input"
          />
          Add to Favourite
        </label>
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
              <Contact
                key={index}
                contact={contact}
                onDelete={() => deleteContact(index)}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ContactListManager;
