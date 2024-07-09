import "./TreeStage5.scss";

const TreeStage5 = () => (
  <div className="tree-stage-5">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect
        className="tree-stage-5__trunk"
        x="90"
        y="80"
        width="20"
        height="70"
      />
      <circle
        className="tree-stage-5__leaf"
        cx="100"
        cy="70"
        r="30"
        fill="green"
      />
      <circle
        className="tree-stage-5__leaf"
        cx="75"
        cy="90"
        r="20"
        fill="green"
      />
      <circle
        className="tree-stage-5__leaf"
        cx="125"
        cy="90"
        r="20"
        fill="green"
      />
    </svg>
  </div>
);

export default TreeStage5;
