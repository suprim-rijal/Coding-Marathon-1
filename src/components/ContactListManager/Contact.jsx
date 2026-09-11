function Contact({contact, onDelete}){
    return(
        <li className="contact-item">
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-email">{contact.email}</span>
                  <span className="contact-phone">{contact.phone}</span>
                  <span className="contact-job_title">{contact.job_title}</span>
                  <span className="contact-birthday">{contact.birthday}</span>
                  <span className="contact-notes">{contact.notes}</span>
                  <span className="contact-website">{contact.website}</span>
                  <span className="contact-favourite">
                    {/* if true ==> Favourite: ✅ else "Favourite: ❌"*/}
                    {contact.favourite ? "Favourite: ✅" : "Favourite: ❌"}
                  </span>
                </div>
                <button
                  onClick={onDelete}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
    )

}

export default Contact;