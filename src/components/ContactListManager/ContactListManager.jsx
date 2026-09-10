import React, { useState } from "react";
import "./ContactListManager.css";


function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({name:'', email: '', phone:'', job_tile:'', birthday:'', notes:'', website:'', favourite:''});
  // Handle input change for name
  // function handleNameChange(event) {
  //   setName(event.target.value);
  // }

  // // Handle input change for email
  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
function handleChange(e){
  const {name, value} = e.target;
  setNewContact((prev) => ({
    ...prev,
    [name]: value
  }));
}
    

  // Add a new contact to the list
  function addContact() {
    // if (newContact.trim() !== "" && .trim() !== "") {
      setContacts((c) => [...c, newContact]);
      setNewContact({name:'', email: '', phone:'', job_tile:'', birthday:'', notes:'', website:'', favourite:''});
      
    // }
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
          name='name'
          placeholder="Enter contact name..."
          value={newContact.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name='email'
          placeholder="Enter email address..."
          value={newContact.email}
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
          <p className="empty-message">No contacts yet. Add one to get started!</p>
        ) : (
          <ol className="contacts-list">
            {contacts.map((contact, index) => (
              <li key={index} className="contact-item">
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-email">{contact.email}</span>
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