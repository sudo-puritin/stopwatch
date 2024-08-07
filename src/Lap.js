import React from "react";

function Lap({ laps }) {
  return (
    <div
      className="lapsWrapper"
      style={{ display: laps?.length ? "block" : "none" }}
    >
      <div className="title">
        <div>Lap</div>
        <div>Lap Times</div>
      </div>
      <div className="lapList">
        <ul>
          {laps?.map((lap, index) => (
            <li key={index}>
              <div>{`${index + 1}`}</div>
              <div>{lap}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lap;
