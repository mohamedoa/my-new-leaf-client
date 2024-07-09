import React from "react";
import ReactDOM from "react-dom";
import "./CreateHabitModal.scss";
import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/images/icons/close.svg";

const API_URL = import.meta.env.VITE_API_URL;

export default function CreateHabitModal({ open, onClose, fetchHabits }) {
  const [habitName, setHabitName] = useState("");

  if (!open) {
    return null;
  }

  const handleUpload = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post(`${API_URL}/api/habits`, {
        user_id: 1,
        habit_name: habitName,
      });
      fetchHabits();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <article className="modal">
        <div className="modal__container">
          <button className="modal__close" onClick={onClose}>
            <img className="modal__close-image" src={closeIcon} alt="" />
          </button>
          <h1 className="modal__header">New Habit</h1>
          <form onSubmit={handleUpload} className="modal__body">
            <label htmlFor="item_name">Habit Name</label>
            <input
              type="text"
              className="ea-form__input"
              id="item_name"
              name="item_name"
              placeholder="Habit Name"
              value={habitName}
              onChange={(event) => setHabitName(event.target.value)}
            />
            <button className="modal__button  modal__button--delete">
              Create Habit
            </button>
          </form>
        </div>
        <div className="modal__button-wrapper">
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
