import React from "react";
import { ContactContext } from "./ContactContext";

export const ContactItem = ({ contact }) => {
  const { dispatch, handleEdit, editingId, cancelEdit } =
    React.useContext(ContactContext);

  return (
    <article className="contact-card">
      <div className="contact-card__details">
        <h3 className="contact-card__name">
          {contact.name}
          {contact.FAV_CONTACT && (
            <span className="contact-card__favorite" aria-label="Favorite contact">
              ★
            </span>
          )}
        </h3>
        <a className="contact-card__detail" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <a
          className="contact-card__detail"
          href={`tel:${String(contact.phone).replace(/[^\d+]/g, "")}`}
        >
          {contact.phone}
        </a>
      </div>

      <button
        className={`contact-button contact-button--small ${
          contact.FAV_CONTACT ? "contact-button--favorite" : ""
        }`}
        type="button"
        aria-pressed={contact.FAV_CONTACT}
        onClick={() =>
          dispatch({ type: "FAV_CONTACT", payload: { id: contact.id } })
        }
      >
        {contact.FAV_CONTACT ? "★ Favorited" : "☆ Favorite"}
      </button>

      <button
        className="contact-button contact-button--small contact-button--secondary"
        type="button"
        onClick={() => handleEdit(contact.id)}
      >
        Edit
      </button>

      <button
        className="contact-button contact-button--small contact-button--danger"
        type="button"
        onClick={() => {
          if (editingId === contact.id) cancelEdit();
          dispatch({ type: "DELETE_CONTACT", payload: contact.id });
        }}
      >
        Delete
      </button>
    </article>
  );
};
