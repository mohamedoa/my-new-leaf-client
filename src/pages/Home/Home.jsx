import "./Home.scss";

export default function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <header className="home__header">
          <h1 className="home__title">Welcome Back</h1>
        </header>
        <section className="home-body">
          <article className="home-hero">
            <h2>
              ??Only 6 days left until you make a difference in the world!
            </h2>
            <p>
              We believe that your persoanl growth journey matters, thats why we
              will plant a tree for you everytime you mature your tree with us{" "}
            </p>
          </article>
          <article className="home-blog">
            <h2>Fun Fact of The day</h2>
            <p>
              Your life is to a large extent the sum of all your habits – good
              or bad.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
