import React from 'react'

export default function Loader() {
  return (
    <div>
      <div id="startup">
        <svg
          className="spinner-container"
          width="65px"
          height="65px"
          viewBox="0 0 52 52"
        >
          <circle
            className="path"
            cx="26px"
            cy="26px"
            r="20px"
            fill="none"
            stroke-width="4px"
          />
        </svg>
      </div>
    </div>
  );
}
