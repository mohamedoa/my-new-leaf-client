import "./TreeForm.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TreeForm() {
  const navigate = useNavigate();

  const handleTreeForm = async (event) => {
    if (!event.target.message.value) {
      return false;
    }

    navigate("/");
  };

  return (
    <main className="tree-form">
      <article className="tree-form__container">
        <h1 className="tree-form__header">Well done! Leave a message behind</h1>
        <form className="form" onSubmit={handleTreeForm}>
          <label className="label" htmlFor="message">
            Message
          </label>
          <input
            id="message"
            name="message"
            className="input"
            type="text"
            placeholder="Message"
          />
          <button className="tree-form__button">PLANT MY TREE</button>
        </form>
      </article>
    </main>
  );
}
