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
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
    event.target.reset();
  };

  return (
    <main className="posts">
      <DeletePostModal
        open={isOpen}
        onClose={() => setIsDeleteOpen(false)}
        fetchPosts={fetchPosts}
        posts={posts}
        id={postId}
      />
      <h1 className="posts__header">Let's Root For Each Other</h1>
      <section className="posts__container">
        {posts
          .sort((a, b) => b.post_likes - a.post_likes)
          .map((post) => (
            <article key={post.id} className="post">
              <p>{post.post_description}</p>
              <p>{post.created_at}</p>
              <p>{`${post.post_likes} likes`}</p>
              <div className="post__actions">
                <button
                  className="post__button"
                  onClick={() => console.log("Like post", post.post_likes)}
                >
                  Like
                </button>
                <button
                  className="post__button"
                  onClick={() => setIsOpen(true)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
      </section>
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
