import { useReducer, useState } from "react";
import { initialState, reducer } from "./ContactReducer";
import { ContactContext } from "./ContactContext";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import "./ContactApp.css";

export const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <ContactContext.Provider
      value={{ state, dispatch, handleEdit, editingId, cancelEdit }}
    >
      <main className="contact-app">
        <div className="contact-app__container">
          <header className="contact-app__header">
            <p className="contact-app__eyebrow">YOUR ADDRESS BOOK</p>
            <h1>Contacts</h1>
            <p className="contact-app__intro">
              Keep the people who matter close.
            </p>
          </header>

          <div className="contact-app__content">
            <section className="contact-panel" aria-labelledby="contact-form-title">
              <div className="contact-panel__heading">
                <p className="contact-panel__eyebrow">
                  {editingId !== null ? "MAKE A CHANGE" : "NEW CONNECTION"}
                </p>
                <h2 id="contact-form-title">
                  {editingId !== null ? "Update contact" : "Add a contact"}
                </h2>
              </div>
              <ContactForm key={editingId ?? "new"} />
            </section>

            <section className="contact-panel" aria-labelledby="contact-list-title">
              <div className="contact-panel__heading contact-panel__heading--row">
                <div>
                  <p className="contact-panel__eyebrow">PEOPLE YOU KNOW</p>
                  <h2 id="contact-list-title">Your contacts</h2>
                </div>
                <span className="contact-count" aria-label={`${state.length} contacts`}>
                  {state.length}
                </span>
              </div>
              <ContactList />
            </section>
          </div>
        </div>
      </main>
    </ContactContext.Provider>
  );
};
