import { useEffect, useState } from "react";
import "./Garden.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateHabitModal from "../../components/CreateHabitModal/CreateHabitModal";
import DeleteHabitModal from "../../components/DeleteHabitModal/DeleteHabitModal";

const API_URL = import.meta.env.VITE_API_URL;

export default function Garden() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [habits, setHabits] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [habitId, setHabitId] = useState("");

  const fetchHabits = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/habits`);
      setHabits(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="garden">
      <CreateHabitModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        fetchHabits={fetchHabits}
      />
      <DeleteHabitModal
        deleteOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        fetchHabits={fetchHabits}
        habits={habits}
        id={habitId}
      />
      <div className="garden__container">
        <header className="garden__header">
          <h1 className="garden__title">Garden</h1>
          <button className="new-habit__link" onClick={() => setIsOpen(true)}>
            <div className="new-habit__text">+</div>
          </button>
        </header>
        <section className="garden-body">
          {error && <p>Error fetching habits. Please try again later.</p>}

          {habits.map((habit) => {
            return (
              <article className="garden-habit" key={habit.id}>
                <Link className="garden-habit__link" to={`/habits/${habit.id}`}>
                  {habit.habit_name}
                </Link>
                <button
                  className="garden-habit__delete"
                  onClick={() => {
                    setHabitId(habit.id);
                    setIsDeleteOpen(true);
                  }}
                >
                  Delete
                </button>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
