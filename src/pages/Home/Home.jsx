import "./Home.scss";
import forestIcon from "../../assets/images/forest.avif";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <header className="home__header">
          <h1 className="home__title">Welcome Back</h1>
        </header>
        <section className="home-body">
          <article className="home-hero">
            <h2 className="home-hero__header">
              MAKE A DIFFERENCE THAT MATTERS !
            </h2>
            <div className="home-hero__wrapper">
              <p className="home-hero__text">
                We believe that your growth journey matters, that's why we will
                plant a tree for you in the amazon rainforest everytime you
                mature your tree with us.
              </p>
              <img className="home-hero__image" src={forestIcon} alt="" />
            </div>
            {/* <div className="home-hero__figure"> */}
            {/* </div> */}
          </article>
          <article className="home-blog">
            <h2 className="home-blog__header">Fun Fact of The day</h2>
            <p className="home-blog__text">
              Your life is to a large extent the sum of all your habits – good
              or bad.
            </p>
          </article>
          <Link className="home-start" to="/habits">
            GET STARTED
          </Link>
        </section>
      </div>
    </main>
  );
}
