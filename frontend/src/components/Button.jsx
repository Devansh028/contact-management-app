const Button = ({ children, disabled, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-full py-2.5 rounded-lg font-semibold transition-all duration-200"
      style={{
        backgroundColor: disabled ? "#B17457AA" : "#B17457",
        color: "#FAF7F0",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
