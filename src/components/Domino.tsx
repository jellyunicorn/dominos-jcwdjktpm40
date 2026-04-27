interface DominoProps {
  firstNum: number;
  secondNum: number;
}

export default function Domino({firstNum, secondNum}: DominoProps) {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        padding: "4px 6px",
        alignItems: "center"
      }}
    >
      <p>{firstNum}</p>
      <p>-</p>
      <p>{secondNum}</p>
    </div>
  );
}
