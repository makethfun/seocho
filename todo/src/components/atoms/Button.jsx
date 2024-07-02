function Button({
  text,
  onClick = () => {},
  type = "btn",
  size = "base",
  className = "",
}) {
  return (
    // <button
    //   onClick={onClick}
    //   className={`${type === "btn" ? "" : "btn-"}${type} text-${size} ${className}`}
    // >
    //   {text}
    // </button>
    <button
      onClick={onClick}
      className={`${type === "btn" ? "" : "btn-"}${type} text-${size} ${className}`}
      //   style={style}
    >
      {text}
    </button>
  );
}

export default Button;
