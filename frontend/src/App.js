import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Toast from "./components/Toast";

function App() {
  const [contacts, setContacts] = useState([]);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2000);
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://contact-management-app-25e6.onrender.com/api/contacts");

      if (!res.ok) {
        throw new Error("Failed to fetch contacts");
      }

      const data = await res.json();
      setContacts(data);
    } catch (error) {
      showToast("Unable to load contacts", "error");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`https://contact-management-app-25e6.onrender.com/api/contacts/${id}`, {
        method: "DELETE",
      });
      fetchContacts();
      showToast("Contact deleted successfully", "success");
    } catch (error) {
      showToast("Delete failed", "error");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <Toast message={toast.message} type={toast.type} />

      <div
        className="min-h-screen flex justify-center py-14"
        style={{
          background: "linear-gradient(to bottom, #FAF7F0, #D8D2C2)",
        }}
      >
        <div className="w-full max-w-md">
          <h1
            className="text-3xl font-extrabold text-center mb-10"
            style={{ color: "#4A4947" }}
          >
            Contact Management App
          </h1>

          <ContactForm onAdd={fetchContacts} showToast={showToast} />

          <ContactList
            contacts={contacts}
            loading={loading}
            onDelete={deleteContact}
          />
        </div>
      </div>
    </>
  );
}

export default App;
