import "./WateringAnimation.scss";

const WateringAnimation = () => (
  <svg
    className="cloud"
    width="200"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="cloud">
      <circle cx="80" cy="40" r="15" fill="lightgray" />
      <circle cx="100" cy="40" r="15" fill="lightgray" />
      <circle cx="90" cy="30" r="15" fill="lightgray" />
      <circle cx="70" cy="35" r="15" fill="lightgray" />
      <circle cx="110" cy="35" r="15" fill="lightgray" />
    </g>
    <g id="droplets">
      <line
        className="droplet"
        x1="90"
        y1="55"
        x2="90"
        y2="75"
        stroke="blue"
        strokeWidth="2"
      />
      <line
        className="droplet"
        x1="80"
        y1="55"
        x2="80"
        y2="75"
        stroke="blue"
        strokeWidth="2"
      />
      <line
        className="droplet"
        x1="100"
        y1="55"
        x2="100"
        y2="75"
        stroke="blue"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export default WateringAnimation;
