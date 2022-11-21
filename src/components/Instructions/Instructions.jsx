import React from "react";
import "./Instructions.css";

function Instructions() {

  return (
    <div className="instructions">
      <div className="text-container">
        <p>
          Press the "add card" button to add the new Card. Use the "sort cards"
          button to sort the Cards by the increase. Press an X icon on the top
          right to delete them.
        </p>
      </div>
    </div>
  );
}

export default React.memo(Instructions);
