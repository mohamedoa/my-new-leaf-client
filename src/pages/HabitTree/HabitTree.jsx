import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HabitTree.scss";
import WateringAnimation from "../../components/WateringAnimation/WateringAnimation";
import TreeStage1 from "../../components/TreeStage1/TreeStage1";
import TreeStage2 from "../../components/TreeStage2/TreeStage2";
import TreeStage3 from "../../components/TreeStage3/TreeStage3";
import TreeStage4 from "../../components/TreeStage4/TreeStage4";
import TreeStage5 from "../../components/TreeStage5/TreeStage5";
import TreeStage6 from "../../components/TreeStage6/TreeStage6";
import TreeStage7 from "../../components/TreeStage7/TreeStage7";

const API_URL = import.meta.env.VITE_API_URL;

export default function HabitTree() {
  const [currentStage, setCurrentStage] = useState(1);
  const [watering, setWatering] = useState(false);
  const [glow, setGlow] = useState(false);
  const [habit, setHabit] = useState(null);
  const [habitProgress, setHabitProgress] = useState(null);
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();

  const renderCurrentStage = () => {
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

  const fetchHabitProgress = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/habits/${id}/progress`);
      setHabitProgress(data);

      // If habit progress is more than 7 in the DB, limit it to 7 in the front end
      // i.e. currentStage will never be 8+
      if (data.length > 7) {
        setCurrentStage(7);
      } else {
        setCurrentStage(data.length);
      }
    } catch (error) {
      setError(error);
    }
  };

  const fetchHabit = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/habits/${id}`);
      setHabit(data);
    } catch (error) {
      setError(error);
    }
  };

  const updateHabitProgress = async () => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/habits/${id}/progress`,
        {
          habit_id: id,
        }
      );
      setCurrentStage(habitProgress.length);
      fetchHabitProgress();
    } catch (error) {
      setError(error);
    }
  };

  const handleWatering = () => {
    setWatering(true);
    setIsDisabled(true);

    // After watering animation finishes
    setTimeout(() => {
      setWatering(false);
      if (currentStage < 7) {
        // If current stage is between 0 and 6, increase stage stage to show next tree
        setCurrentStage(currentStage + 1);
        setIsDisabled(false);
      } else {
        // Instead if growing the tree, make it glow for 1.5s
        setGlow(true);
        setTimeout(() => {
          setGlow(false);
          setIsDisabled(false);
        }, 1500);
      }
    }, 2000);
  };

  const handleButtonClick = () => {
    handleWatering();
    updateHabitProgress();
  };

  useEffect(() => {
    fetchHabit();
    fetchHabitProgress();
  }, [id]);

  if (!habit || !habitProgress) {
    return <p>Loading!!!</p>;
  }

  return (
    <section className="tree">
      {error && <p>Error fetching habit.</p>}
      {watering && <WateringAnimation />}
      {renderCurrentStage()}
      <h2 className="tree__header">{`The ${habit.habit_name} Tree`}</h2>
      <article className="tree__age">{`${habitProgress.length} Days Old`}</article>
      <button
        className="tree__water"
        onClick={handleButtonClick}
        disabled={isDisabled}
      >
        Water Your Tree
      </button>
    </section>
  );
}
