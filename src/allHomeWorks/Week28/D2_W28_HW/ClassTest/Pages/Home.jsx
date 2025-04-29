import React from 'react'
import { Link } from 'react-router-dom';
import MyHeader from '../Component/MyHeader';
import MyFooter from '../Component/Footer'

export default function Home() {
  return (
    <div>
      <MyHeader />
      <h1>This is the home page</h1>
      <br />
      <Link to={"/CT8/test"}>This is test for 404 page.</Link>
      <MyFooter />
    </div>
  );
}

