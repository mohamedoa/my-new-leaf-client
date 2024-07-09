import "./TreeStage3.scss";

const TreeStage3 = () => (
  <div className="tree-stage-3">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect
        className="tree-stage-3__trunk"
        x="95"
        y="120"
        width="10"
        height="30"
      />
      <circle
        className="tree-stage-3__leaf"
        cx="100"
        cy="110"
        r="15"
        fill="green"
      />
      <circle
        className="tree-stage-3__leaf"
        cx="85"
        cy="115"
        r="10"
        fill="green"
      />
      <circle
        className="tree-stage-3__leaf"
        cx="115"
        cy="115"
        r="10"
        fill="green"
      />
    </svg>
  </div>
);

export default TreeStage3;
