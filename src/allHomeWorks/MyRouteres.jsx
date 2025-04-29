import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router, 
  // HashRouter as Router ,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import routes from "./AllHomeWorkConfig";
import classRoutes from "./AllClassTestConfig";
import HomeworkHomePage from "./HomeworkHomePage";

function NotFoundPage() {
  const navigate = useNavigate();
  const [timeCount, setTimeCount] = React.useState(5);
  const notFundIndex = localStorage.getItem("NotFundIndex");
  useEffect(() => {
    if (notFundIndex == 9) {
      navigate("/HW9");
    } else if (notFundIndex == 10) {
      navigate("/HW10");
    }
  }, [notFundIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeCount(timeCount - 1);
    }, 1000);
    if (timeCount <= 0) {
      navigate("/");
      return () => clearTimeout(timer);
    }
  }, [timeCount]);

  return (
    <div className="not-found-page">
      {(document.title = "Page Not Found")}
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or try again later.</p>
      <p>Page will be redirected in {timeCount} seconds.</p>
    </div>
  );
}

export default function MyRouteres() {
  const [notFundIndex, setNotFundIndex] = useState(0);
  useEffect(() => {
    if (window.location.pathname.includes("/HW9")) {
      setNotFundIndex(9);
    } else if (window.location.pathname.includes("/HW10")) {
      setNotFundIndex(10);
    }
  }, [window.location.pathname]);

  useEffect(() => {
    localStorage.setItem("NotFundIndex", notFundIndex);
  }, [notFundIndex]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeworkHomePage />} />
        {routes.map((homeWorkInfo) => {
          return homeWorkInfo.homework.map((HWRoute) => {
            return HWRoute.chilldren ? (
              <Route
                key={HWRoute.id}
                id={HWRoute.id}
                path={HWRoute.path}
                element={<HWRoute.component />}>
                {HWRoute.chilldren.map((childRoute) => {
                  return (
                    <Route
                      key={childRoute.id}
                      id={childRoute.id}
                      path={childRoute.path}
                      element={<childRoute.component />}
                    />
                  );
                })}
              </Route>
            ) : (
              <Route
                key={HWRoute.id}
                id={HWRoute.id}
                path={HWRoute.path}
                element={<HWRoute.component />}
              />
            );
          });
        })}
        {classRoutes.map((classTestInfo) => {
          return classTestInfo.classtest.map((CTRoute) => {
            return CTRoute.chilldren ? (
              <Route
                key={CTRoute.id}
                id={CTRoute.id}
                path={CTRoute.path}
                element={<CTRoute.component />}>
                {CTRoute.chilldren.map((childRoute) => {
                  return (
                    <Route
                      key={childRoute.id}
                      id={childRoute.id}
                      path={childRoute.path}
                      element={<childRoute.component />}
                    />
                  );
                })}
              </Route>
            ) : (
              <Route
                key={CTRoute.id}
                id={CTRoute.id}
                path={CTRoute.path}
                element={<CTRoute.component />}
              />
            );
          });
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
