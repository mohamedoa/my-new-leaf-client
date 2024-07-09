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
import WateringButton from "../../components/WateringButton/WateringButton";
import TreeDetails from "../../components/TreeDetails/TreeDetails";

const API_URL = import.meta.env.VITE_API_URL;

export default function HabitTree() {
  const [currentStage, setCurrentStage] = useState(1);
  const [watering, setWatering] = useState(false);
  const [glow, setGlow] = useState(false);
  const [habit, setHabit] = useState(null);
  const [habitProgress, setHabitProgress] = useState(null);
  const [error, setError] = useState(null);

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
      <TreeDetails
        habitName={habit.habit_name}
        habitProgressLength={habitProgress.length}
      />
      <WateringButton
        fetchHabitProgress={fetchHabitProgress}
        habitProgress={habitProgress}
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        setWatering={setWatering}
        setGlow={setGlow}
        setError={setError}
      />
    </section>
  );
}
