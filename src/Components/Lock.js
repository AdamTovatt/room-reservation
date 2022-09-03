import { Color } from "./constants";

export function Lock({ color, size }) {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="102.273"
        y="216.218"
        width="303.538"
        height="252.034"
        style={{
          "fill-opacity": "0",
          "stroke-linejoin": "round",
          "stroke-linecap": "square",
          "stroke-dashoffset": "-1px",
          "stroke-width": "39px",
          stroke: color,
          "paint-order": "stroke",
          fill: "none",
        }}
        rx="51.969"
        ry="51.969"
      />
      <path
        d="M 365.961 147.533 C 365.961 149.249 365.95 214.616 365.869 216.312 L 140.429 215.76 C 140.348 214.064 140.363 149.249 140.363 147.533 C 140.363 87.369 190.864 38.595 253.162 38.595 C 315.458 38.595 365.961 87.369 365.961 147.533 Z"
        style={{
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "fill-opacity": "0",
          "stroke-width": "39px",
          stroke: color,
          "paint-order": "stroke",
          fill: "none",
        }}
      />
    </svg>
  );
}

export default Lock;
