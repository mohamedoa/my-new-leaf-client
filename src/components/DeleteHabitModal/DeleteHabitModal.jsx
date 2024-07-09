import React from "react";
import ReactDOM from "react-dom";
import "./DeleteHabitModal.scss";
import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/images/icons/close.svg";

const API_URL = import.meta.env.VITE_API_URL;

export default function DeleteHabitModal({
  deleteOpen,
  onClose,
  fetchHabits,
  habits,
  id,
}) {
  const [habit, setHabit] = useState(null);

  if (!deleteOpen) {
    return null;
  }

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`${API_URL}/api/habits/${id}`);
      fetchHabits();
      setHabit(data);
    } catch (error) {
      console.error(error);
    }
  };

  const findHabit = habits.find((habit) => habit.id === id);

  const habitName = findHabit.habit_name;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <article className="modal">
        <div className="modal__container">
          <button className="modal__close" onClick={onClose}>
            <img className="modal__close-image" src={closeIcon} alt="" />
          </button>
          <h1 className="modal__header">Delete {habitName}?</h1>
          <p className="modal__body">
            Please confirm that you’d like to delete the {habitName} tree from
            your garden. You won’t be able to undo this action.
          </p>
        </div>
        <div className="modal__button-wrapper">
          <button
            className="modal__button  modal__button--delete"
            onClick={() => {
              handleDelete();
              onClose();
            }}
          >
            Delete
          </button>
          <button
            className="modal__button modal__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </article>
    </>,
    document.getElementById("portal")
  );
}
