import React from "react";
import "./Idea.css";
const Idea = (props) => {
  const { title } = props.item;
  return (
    <div className="idea">
      <article className="idea_title">
        <h2>{title}</h2>
      </article>
    </div>
  );
};

export default Idea;
