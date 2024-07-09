import "./TreeStage1.scss";

export default function TreeStage1() {
  return (
    <div className="tree-stage-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle className="tree-stage-1__trunk" cx="100" cy="150" r="5" />
        <line
          className="tree-stage-1__leaf"
          x1="100"
          y1="150"
          x2="100"
          y2="130"
        />
        <line
          className="tree-stage-1__leaf"
          x1="100"
          y1="140"
          x2="90"
          y2="135"
        />
        <line
          className="tree-stage-1__leaf"
          x1="100"
          y1="140"
          x2="110"
          y2="135"
        />
      </svg>
    </div>
  );
}
