import { useState } from "react";
import bg from "./assets/bg.png";
import character from "./assets/character.png";

export default function World() {
  const [x, setX] = useState(0);

  return (
    <div className="world">
      <div
        className="bg"
        style={{ transform: `translateX(${-x}px)` }}
      />
      <img src={character} className="character" alt="player" />
      <div className="controls">
        <button onClick={() => setX(x - 50)}>◀</button>
        <button onClick={() => setX(x + 50)}>▶</button>
      </div>
    </div>
  );
}
