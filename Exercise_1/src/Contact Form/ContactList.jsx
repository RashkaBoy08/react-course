import { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { ContactItem } from "./ContactItem";

export const ContactList = () => {
  const { state } = useContext(ContactContext);

  return (
    <div className="contact-list">
      {state.length === 0 ? (
        <p className="contact-list__empty">
          No contacts yet. Add someone to get started.
        </p>
      ) : (
        <ul className="contact-list__items">
        {state.map((contact) => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
        </ul>
      )}
    </div>
  );
};
