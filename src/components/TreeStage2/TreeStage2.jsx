import "./TreeStage2.scss";

const TreeStage2 = () => (
  <div className="tree-stage-2">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect
        className="tree-stage-2__trunk"
        x="97"
        y="140"
        width="6"
        height="20"
      />
      <line
        className="tree-stage-2__leaf"
        x1="100"
        y1="140"
        x2="100"
        y2="110"
      />
      <line className="tree-stage-2__leaf" x1="100" y1="130" x2="90" y2="120" />
      <line
        className="tree-stage-2__leaf"
        x1="100"
        y1="130"
        x2="110"
        y2="120"
      />
    </svg>
  </div>
);

export default TreeStage2;
