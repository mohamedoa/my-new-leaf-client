import "./TreeDetails.scss";

export default function TreeDetails({ habitName, habitProgressLength }) {
  return (
    <>
      <h2 className="tree__header">{`The ${habitName} Tree`}</h2>
      <article className="tree__age">{`${habitProgressLength} Days Old`}</article>
    </>
  );
}
