import React from "react";
import MyHeader from "./Components/MyHeader";
import Discreption from "./Components/Discreption";
import RecentPosts from "./Components/RecentPosts";
import FeaturedWorks from "./Components/FeaturedWorks";
import MyFooter from "./Components/MyFooter";

export default function Homework() {
  return (
    <div className="">
      <MyHeader />
      <main className="flex flex-col p-20">
        <Discreption />
        <RecentPosts />
        <FeaturedWorks />
        <MyFooter/>
      </main>
    </div>
  );
}
