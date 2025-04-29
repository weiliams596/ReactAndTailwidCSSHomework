import React from "react";
import useAxios from "./CustomHook/useAxios";
import useForm from "./CustomHook/useForm";

export default function ClassTest() {
  const { data, error } = useAxios("https://jsonplaceholder.typicode.com/users");
  console.log(...data);
  console.log(error.message);

  const handleLoad = () => {
    const { formInfoObject } = useForm(document.getElementById("myForm"));
    console.log(formInfoObject);
  };

  return (
    <div>
      {!data.length && <h1>Loading...</h1>}
      {error && <h1>Methon Error</h1>}
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
          </div>
        ))}

      <form id="myForm" onLoad={handleLoad}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
