import { useState } from "react";
import "./TreeDetails.scss";
import { Link } from "react-router-dom";

export default function TreeDetails({
  habitName,
  habitProgressLength,
  currentStage,
}) {
  return (
    <>
      <h2 className="tree__header">{`The ${habitName} Tree`}</h2>
      <article className="tree__age">{`${habitProgressLength} Days Old`}</article>
      <progress className="tree__progress" value={currentStage} max={7} />
      {currentStage === 7 && (
        <article className="tree__wrapper">
          <p className="tree__complete">
            Success! You have built a new habit. <br />
            <Link className="tree__link" to="/plant">
              Click here to plant your tree
            </Link>
          </p>
        </article>
      )}
    </>
  );
}
