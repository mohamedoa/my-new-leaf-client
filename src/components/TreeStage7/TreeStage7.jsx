import "./TreeStage7.scss";

const TreeStage7 = ({ glow }) => (
  <div className={`tree-stage-7 ${glow ? "tree-stage-7__glow" : ""}`}>
    <svg
      className="tree-stage-7__image"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 300"
    >
      <rect
        className="tree-stage-7__trunk"
        x="85"
        y="60"
        width="30"
        height="90"
      />
      <circle className="tree-stage-7__leaf" cx="100" cy="50" r="40" />
      <circle className="tree-stage-7__leaf" cx="60" cy="90" r="30" />
      <circle className="tree-stage-7__leaf" cx="140" cy="90" r="30" />
    </svg>
  </div>
);

export default TreeStage7;
