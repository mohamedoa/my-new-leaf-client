import "./TreeStage4.scss";

const TreeStage4 = () => (
  <div className="tree-stage-4">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect
        className="tree-stage-4__trunk"
        x="90"
        y="100"
        width="20"
        height="50"
      />
      <circle
        className="tree-stage-4__leaf"
        cx="100"
        cy="80"
        r="20"
        fill="green"
      />
      <circle
        className="tree-stage-4__leaf"
        cx="75"
        cy="90"
        r="15"
        fill="green"
      />
      <circle
        className="tree-stage-4__leaf"
        cx="125"
        cy="90"
        r="15"
        fill="green"
      />
    </svg>
  </div>
);

export default TreeStage4;
