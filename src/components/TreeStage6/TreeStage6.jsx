import "./TreeStage6.scss";

const TreeStage6 = () => (
  <div className="tree-stage-6">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect
        className="tree-stage-6__trunk"
        x="85"
        y="60"
        width="30"
        height="90"
      />
      <circle
        className="tree-stage-6__leaf"
        cx="100"
        cy="50"
        r="40"
        fill="green"
      />
      <circle
        className="tree-stage-6__leaf"
        cx="60"
        cy="90"
        r="30"
        fill="green"
      />
      <circle
        className="tree-stage-6__leaf"
        cx="140"
        cy="90"
        r="30"
        fill="green"
      />
    </svg>
  </div>
);

export default TreeStage6;
