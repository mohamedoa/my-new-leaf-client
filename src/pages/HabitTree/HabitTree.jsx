import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HabitTree.scss";
import WateringAnimation from "../../components/WateringAnimation/WateringAnimation";
import WateringButton from "../../components/WateringButton/WateringButton";
import TreeDetails from "../../components/TreeDetails/TreeDetails";
import TreeStageRender from "../../components/TreeStageRender/TreeStageRender";

const API_URL = import.meta.env.VITE_API_URL;

export default function HabitTree() {
  const [currentStage, setCurrentStage] = useState(1);
  const [watering, setWatering] = useState(false);
  const [glow, setGlow] = useState(false);
  const [habit, setHabit] = useState(null);
  const [habitProgress, setHabitProgress] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const fetchHabitProgress = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/habits/${id}/progress`);
      setHabitProgress(data);

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
      <TreeStageRender currentStage={currentStage} glow={glow} />
      <TreeDetails
        habitName={habit.habit_name}
        habitProgressLength={habitProgress.length}
        currentStage={currentStage}
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
