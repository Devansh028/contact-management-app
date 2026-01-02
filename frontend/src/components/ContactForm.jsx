import { useState } from "react";
import Button from "./Button";

const ContactForm = ({ onAdd, showToast }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isInvalid =
    !form.name ||
    !form.phone ||
    !/\S+@\S+\.\S+/.test(form.email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isInvalid) return;

    await fetch("https://contact-management-app-25e6.onrender.com/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", email: "", phone: "", message: "" });
    onAdd();
    showToast("Contact added successfully", "success");
  };

  return (
    <div
      className="rounded-2xl p-6 shadow-md hover:shadow-lg transition"
      style={{ backgroundColor: "#D8D2C2" }}
    >
      <h2
        className="text-xl font-semibold mb-5"
        style={{ color: "#4A4947" }}
      >
        Add Contact
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2.5 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: "#FAF7F0",
            borderColor: "#D8D2C2",
            color: "#4A4947",
          }}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2.5 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: "#FAF7F0",
            borderColor: "#D8D2C2",
            color: "#4A4947",
          }}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2.5 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: "#FAF7F0",
            borderColor: "#D8D2C2",
            color: "#4A4947",
          }}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2.5 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: "#FAF7F0",
            borderColor: "#D8D2C2",
            color: "#4A4947",
          }}
        />

        <Button type="submit" disabled={isInvalid}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
