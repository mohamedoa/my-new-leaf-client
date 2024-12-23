import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Community.scss";
import DeletePostModal from "../../components/DeletePostModal/DeletePostModal";

const API_URL = import.meta.env.VITE_API_URL;

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/community`);
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleUpload = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_URL}/api/community`, {
        user_id: 1,
        post_description: description,
      });
      fetchPosts();
      event.target.reset();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleLike = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.put(`${API_URL}/api/community/${id}`, {
        id: id,
        post_likes: likes,
      });
      fetchPosts();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const FormatTime = function (date) {
    const now = new Date();
    const diff = now - new Date(date);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (seconds < 60) {
      return rtf.format(-seconds, "second");
    } else if (minutes < 60) {
      return rtf.format(-minutes, "minute");
    } else if (hours < 24) {
      return rtf.format(-hours, "hour");
    } else if (days < 30) {
      return rtf.format(-days, "day");
    } else if (months < 12) {
      return rtf.format(-months, "month");
    } else {
      return rtf.format(-years, "year");
    }
  };

  return (
    <main className="posts">
      <div className="posts__title">
        <h1 className="posts__header">Let's Root For Each Other</h1>
      </div>
      <div className="posts__wrapper">
        <DeletePostModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          fetchPosts={fetchPosts}
          posts={posts}
          id={postId}
        />
        <section className="posts__container">
          {posts
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((post) => (
              <article key={post.id} className="post">
                <p>{post.post_description}</p>
                <p>{FormatTime(post.created_at)}</p>
                <p>{`${post.post_likes} likes`}</p>
                <div className="post__actions">
                  <button
                    className="post__button"
                    onClick={() => {
                      handleLike(post.id);
                      console.log("Like post", post.post_likes);
                    }}
                  >
                    Like
                  </button>
                  <button
                    className="post__button"
                    onClick={() => {
                      setPostId(post.id);
                      setIsOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
        </section>
      </div>
      <form onSubmit={handleUpload} className="community-form">
        <div className="community-form__container">
          <label htmlFor="description" className="community-form__label">
            Whats on your mind ?
          </label>
          <textarea
            className="community-form__textarea"
            id="description"
            placeholder="What's on your mind?"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button
          className="community-form__button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Post"}
        </button>
      </form>
    </main>
  );
}
