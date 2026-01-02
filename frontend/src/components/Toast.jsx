const Toast = ({ message, type }) => {
  if (!message) return null;

  return (
    <div
      className="fixed top-6 right-6 px-5 py-2.5 rounded-lg shadow-md animate-fade-in"
      style={{
        backgroundColor: type === "success" ? "#B17457" : "#4A4947",
        color: "#FAF7F0",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
