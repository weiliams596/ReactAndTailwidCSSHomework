import React, { use, useContext, useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import GlobalContext from "../../../../MyContext";
import Login from "./Pages/Login";

export default function ClassTest() {
  const [user, setUser] = useState(null);
  const [isShowSome, setIsShowSome] = useState({login:true,home:false});
  const { info, setInfo } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  const initFunc = () => {
    let temp = JSON.parse(localStorage.getItem("user"));
    if (temp) {
      setUser(temp);
      setInfo({ ...info, userAuthred: true });
      setIsShowSome({...isShowSome, login:false, home:true});
      return true;
    }
    setUser(null);
    setInfo({ ...info, userAuthred: false });
    setIsShowSome({...isShowSome, login:true, home:false});
    return false;
  };

  useEffect(() => {
    const userAuthenticated = initFunc();
    if (userAuthenticated) {
      navigate('/CT16/home', { replace: true }); // replace 为 true 可以避免导航堆叠
    } else {
      navigate('/CT16', { replace: true });
    }
  }, []); // 去掉 location，防止无限循环

  useEffect(() => {
    initFunc();
  },[location]);
  return (
    <div>
      <h1>Class Test useContext</h1>
      {isShowSome.login && <Login />}
      {isShowSome.home && <Outlet />}
    </div>
  );
}
