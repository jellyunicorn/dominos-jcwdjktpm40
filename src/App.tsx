import { useEffect, useState } from "react";
import Button from "./components/Button";
import Domino from "./components/Domino";
import {
  doubleNumber,
  flip,
  remove,
  removeDupes,
  sortAsc,
  sortDesc,
} from "./helpers/helper";

export default function App() {
  const defaultData = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const defaultDataString = JSON.stringify(defaultData);

  const [data, setData] = useState(structuredClone(defaultData));
  const [doublesCount, setDoublesCount] = useState(doubleNumber(data));
  const [deleteTotal, setDeleteTotal] = useState<number>(0);

  const handleSortAsc = () => {
    let result = [...data];
    result = sortAsc(result);
    setData(result);
  };

  const handleSortDesc = () => {
    let result = [...data];
    result = sortDesc(result);
    setData(result);
  };

  const handleFlip = () => {
    let result = [...data];
    result = flip(result);
    setData(result);
  };

  const handleDelete = () => {
    let result = [...data];
    result = remove(result, deleteTotal);
    setData(result);
  };

  const handleDeleteDupes = () => {
    let result = [...data];
    result = removeDupes(result);
    setData(result);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteTotal(Number(e.target.value));
  };

  const handleReset = () => {
    setData(structuredClone(defaultData));
  };

  useEffect(() => {
    setDoublesCount(doubleNumber(data));
  }, [data])

  return (
    <div style={{ marginLeft: "24px", marginTop: "16px" }}>
      <h1
        style={{
          color: "#448f64",
          fontFamily: "Comic Sans MS, Comic Sans",
          fontSize: "48px",
        }}
      >
        Dominoes
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "8px",
          gap: "6px",
        }}
      >
        <h2 style={{ fontFamily: "Arial, Sans" }}>Source:</h2>
        <p>{defaultDataString}</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "8px",
          gap: "6px",
        }}
      >
        <h2 style={{ fontFamily: "Arial, Sans" }}>Double Numbers:</h2>
        <p>{doublesCount}</p>
      </div>

      <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
        {data.map((domino) => (
          <Domino firstNum={domino[0]} secondNum={domino[1]} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
        <Button text="Sort (Asc)" onClick={handleSortAsc} />
        <Button text="Sort (Desc)" onClick={handleSortDesc} />
        <Button text="Flip" onClick={handleFlip} />
        <Button text="Remove Duplicates" onClick={handleDeleteDupes} />
        <Button text="Reset" onClick={handleReset} />
      </div>

      <input
        type="text"
        value={deleteTotal}
        onChange={handleInput}
        style={{ marginTop: "8px", marginRight: "6px" }}
      />
      <Button text="Remove" onClick={handleDelete} />
    </div>
  );
}
