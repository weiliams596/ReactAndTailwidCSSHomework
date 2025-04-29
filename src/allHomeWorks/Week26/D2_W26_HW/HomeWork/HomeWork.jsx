import React from "react";
import BookCard from "./BookCard";

export default function HomeWork() {
  const bookImageDefault =
    "https://dannorris.me/wp-content/uploads/2016/07/books-feature-1.jpg";
  return (
    <div className="book-list">
      {document.title = "Homework"}
      <BookCard
        title="Automic Habits"
        author="Byron Holland"
        image={bookImageDefault}
        year="1998"
      />
      <BookCard
        title="Automic Habits"
        author="Byron Holland"
        image={bookImageDefault}
        year="1998"
      />
      <BookCard
        title="Automic Habits"
        author="Byron Holland"
        image={bookImageDefault}
        year="1998"
      />
    </div>
  );
}
