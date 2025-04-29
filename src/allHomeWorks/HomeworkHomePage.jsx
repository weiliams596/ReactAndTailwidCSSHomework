import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "./AllHomeWorkConfig.js";
import classRoutes from "./AllClassTestConfig.js";

export default function HomeworkHomePage() {
  useEffect(() => {
    localStorage.setItem("NotFundIndex", 0);
  });
  return (
    <main key="homework-main" className="homework-main">
      <h1>All Homeworks</h1>
      {routes.map((item, index1) => {
        return (
          <section
            key={"homework-section" + index1}
            className="homework-section">
            <h2>Week {item.week}</h2>
            <div key={"homework-div" + index1} className="homework-div">
              {item.homework.map((item1, index2) => {
                return (
                  <div
                    key={"homework-div-item" + index2}
                    className="class-home-work">
                    <Link key={item1.id} to={item1.path}>
                      {item1.name}{" "}
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
      <h1>All Class Tests</h1>
      {classRoutes.map((item, index1) => {
        return (<section
          key={"class-test-section" + index1}
          className="class-test-section">
          <h2>Week {item.week}</h2>
          <div key={"class-test-div" + index1} className="homework-div">
            {item.classtest.map((item1, index2) => {
              return (
                <div
                  key={"class-test-div-item" + index2}
                  className="class-test">
                  <Link key={item1.id} to={item1.path}>
                    {item1.name}{" "}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      );
    })}
    </main>
  );
}
