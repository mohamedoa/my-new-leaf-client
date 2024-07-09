import React from "react";
import ReactDOM from "react-dom";
import "./DeletePostModal.scss";
import { useState } from "react";
import axios from "axios";
import closeIcon from "../../assets/images/icons/close.svg";

const API_URL = import.meta.env.VITE_API_URL;

export default function DeletePostModal({ open, onClose, fetchPosts, id }) {
  const [post, setPost] = useState(null);

  if (!open) {
    return null;
  }

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`${API_URL}/api/community/${id}`);
      fetchPosts();
      setPost(data);
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
          <h1 className="modal__header">Are you sure?</h1>
          <p className="modal__body">
            Please confirm that you’d like to delete this post from the
            community. You won’t be able to undo this action.
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
