import "./Profile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function Profile() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fetchUser = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/users/${id}`);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__header">Profile</h1>
        <article className="profile__article">
          <p>Username: {user.username}</p>
          <p>Rank: {user.rank}</p>
        </article>
        <h2 className="profile__header">Settings</h2>
        <article className="profile__article">
          <p>Volume</p>
          <p>Light/Dark mode</p>
        </article>
      </section>
    </main>
  );
}
