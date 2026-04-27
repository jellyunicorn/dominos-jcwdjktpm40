interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "5px 10px",
        backgroundColor: "#3066ff",
        color: "white",
        border: "1px solid #0032bc",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      <p>{text}</p>
    </button>
  );
}
