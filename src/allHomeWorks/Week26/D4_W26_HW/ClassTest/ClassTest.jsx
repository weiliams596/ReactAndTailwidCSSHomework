import React from "react";

import Header from "./Header";
import BlogInfo from "./BlogInfo";

export default function ClassTest() {
  const myBlogList = [
    {
      title: "My First Blog",
      description: "This is my first blog post.",
      author: "John Doe",
      date: "2021-05-10",
    },
    {
      title: "My Second Blog",
      description: "This is my second blog post.",
      author: "Jane Doe",
      date: "2021-05-11",
    },
    {
      title: "My Third Blog",
      description: "This is my third blog post.",
      author: "Bob Smith",
      date: "2021-05-12",
    },
    {
      title: "My Fourth Blog",
      description: "This is my fourth blog post.",
      author: "Alice Johnson",
      date: "2021-05-13",
    },
  ];

  return (
    <>
      {document.title = "Class Test"}
      <Header />
      <main>
        {myBlogList.map((blog, index) => (
          <BlogInfo
            key={index}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            date={blog.date}
          />
        ))}
      </main>
    </>
  );
}
