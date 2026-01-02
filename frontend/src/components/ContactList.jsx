const ContactList = ({ contacts, onDelete, loading }) => {
  if (loading) {
    return (
      <p
        className="text-center mt-6 font-medium"
        style={{ color: "#4A4947" }}
      >
        Loading contacts...
      </p>
    );
  }

  if (contacts.length === 0) {
    return (
      <p
        className="text-center mt-6 font-medium"
        style={{ color: "#4A4947" }}
      >
        No contacts yet. Add your first contact 
      </p>
    );
  }

  return (
    <div
      className="rounded-2xl p-6 mt-6 shadow-md hover:shadow-lg transition"
      style={{ backgroundColor: "#D8D2C2" }}
    >
      <h2
        className="text-xl font-semibold mb-4"
        style={{ color: "#4A4947" }}
      >
        Contact List
      </h2>

      <ul className="space-y-3">
        {contacts.map((c) => (
          <li
            key={c._id}
            className="p-4 rounded-xl flex justify-between items-start transition"
            style={{
              backgroundColor: "#FAF7F0",
              border: "1px solid rgba(74,73,71,0.15)",
            }}
          >
            <div>
              <p className="font-medium" style={{ color: "#4A4947" }}>
                {c.name}
              </p>
              <p className="text-sm" style={{ color: "#4A4947" }}>
                {c.email}
              </p>
              <p className="text-sm" style={{ color: "#4A4947" }}>
                {c.phone}
              </p>
            </div>

            <button
              onClick={() => onDelete(c._id)}
              className="text-sm font-medium"
              style={{ color: "#B17457" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
