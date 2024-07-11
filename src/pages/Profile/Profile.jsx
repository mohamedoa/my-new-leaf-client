import "./Profile.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import facebookIcon from "../../assets/images/icons/SVG/Icon-facebook.svg";
import twitterIcon from "../../assets/images/icons/SVG/Icon-twitter.svg";
import instagramIcon from "../../assets/images/icons/SVG/Icon-instagram.svg";
import { Link } from "react-router-dom";

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
          <p>Address: Rivington street, London, UK</p>
          <p>Mobile: 077707770777</p>
        </article>
        <h2 className="profile__header">Settings</h2>
        <article className="profile__article">
          <p>Volume</p>
          <p>Light/Dark mode</p>
          <p>How would you like to receive notifications:</p>
          <form action="">
            <div className="profile__options">
              <input type="radio" value="Yes" name="yes" />
              <label htmlFor="yes">Mobile</label>
            </div>
            <div className="profile__options">
              <input type="radio" value="No" name="no" />
              <label htmlFor="no">Email</label>
            </div>
          </form>
        </article>
        <article className="profile__article">
          <h2 className="profile__header">Social Media</h2>
          <div className="social-media">
            <Link to="https://facebook.com">
              <img src={facebookIcon} alt="" />
            </Link>
            <Link to="https://x.com">
              <img src={twitterIcon} alt="" />
            </Link>
            <Link to="https://instagram.com">
              <img src={instagramIcon} alt="" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
