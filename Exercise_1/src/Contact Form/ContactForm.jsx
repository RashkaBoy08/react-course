import { useContext, useState } from "react";
import { ContactContext } from "./ContactContext";

export const ContactForm = () => {
  const { state, dispatch, editingId, cancelEdit } =
    useContext(ContactContext);
  const contactToEdit = state.find((c) => c.id === editingId);

  const [formData, setFormData] = useState({
    name: contactToEdit?.name ?? "",
    email: contactToEdit?.email ?? "",
    phone: contactToEdit?.phone ?? "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      dispatch({
        type: "EDIT_CONTACT",
        payload: { id: editingId, ...formData },
      });
    } else {
      const nextId = Math.max(0, ...state.map((contact) => contact.id)) + 1;
      dispatch({
        type: "ADD_CONTACT",
        payload: { id: nextId, ...formData, FAV_CONTACT: false },
      });
    }

    setFormData({ name: "", email: "", phone: "" });
    cancelEdit();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Alex Morgan"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="alex@example.com"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__actions">
        <button className="contact-button contact-button--primary" type="submit">
          {editingId !== null ? "Update contact" : "Add contact"}
        </button>
        {editingId !== null && (
          <button
            className="contact-button contact-button--secondary"
            type="button"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};
