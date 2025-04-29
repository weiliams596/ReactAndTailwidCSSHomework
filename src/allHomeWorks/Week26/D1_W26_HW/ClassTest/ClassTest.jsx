import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

export default function ClassTest() {
  return (
    <>
      {document.title = "Class Test"}
      <Header
        title="Class Test"
        description="This is a class test"
        author="John Doe"
      />
      <ProfileCard />
    </>
  );
}
