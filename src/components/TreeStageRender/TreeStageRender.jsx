import TreeStage1 from "../TreeStage1/TreeStage1";
import TreeStage2 from "../TreeStage2/TreeStage2";
import TreeStage3 from "../TreeStage3/TreeStage3";
import TreeStage4 from "../TreeStage4/TreeStage4";
import TreeStage5 from "../TreeStage5/TreeStage5";
import TreeStage6 from "../TreeStage6/TreeStage6";
import TreeStage7 from "../TreeStage7/TreeStage7";

const TreeStageRender = ({ currentStage, glow }) => {
  switch (currentStage) {
    case 1:
      return <TreeStage1 />;
    case 2:
      return <TreeStage2 />;
    case 3:
      return <TreeStage3 />;
    case 4:
      return <TreeStage4 />;
    case 5:
      return <TreeStage5 />;
    case 6:
      return <TreeStage6 />;
    case 7:
      return <TreeStage7 glow={glow} />;
    default:
      return null;
  }
};

export default TreeStageRender;
