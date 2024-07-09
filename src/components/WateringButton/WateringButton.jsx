import "./WateringButton.scss";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function WateringButton({
  fetchHabitProgress,
  habitProgress,
  currentStage,
  setCurrentStage,
  setWatering,
  setGlow,
  setError,
}) {
  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();

  const updateHabitProgress = async () => {
    try {
      await axios.post(`${API_URL}/api/habits/${id}/progress`, {
        habit_id: id,
      });

      setCurrentStage(habitProgress.length);
      fetchHabitProgress();
    } catch (error) {
      console.log(error);
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

  return (
    <button
      className="watering-button"
      onClick={handleButtonClick}
      disabled={isDisabled}
    >
      Water Your Tree
    </button>
  );
}
