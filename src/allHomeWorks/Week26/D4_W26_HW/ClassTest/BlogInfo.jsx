import React from "react";

export default function BlogInfo(props) {
  return (
    <section className="blog-info">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="author-and-date">
        <p>Author: {props.author}</p>
        <p>Date: {props.date}</p>
      </div>
    </section>
  );
}
