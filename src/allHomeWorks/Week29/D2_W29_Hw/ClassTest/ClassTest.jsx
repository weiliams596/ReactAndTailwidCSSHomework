import React, { useEffect } from "react";
import axios from "axios";
import Register from "./Pages/Register";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/post"
    );
    if(!response.status===200)
        throw new Error(response.message);
    return response.data;
  } catch (error) {
    if(error.message)
        console.error(error.message);
        
    console.error(error);
  }
}

async function postData(){
    try{
        const res = await axios.post("https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections",{
            ProjectName:"Project1",
            ProjectLang:"JavaScript",
            CoDevloper:["John","Mary"]
        });
        return res;
    }catch(error){
        console.error(error);
    }
}

export default function ClassTest() {
  useEffect(() => {
    // async function Show() {
    //     try{
    //         const data= await fetchData();
    //         console.log(data);
    //     }
    //     catch(error){
    //         console.error(error);
    //     }
    // }
    // Show();
    // async function Post() {
    //     const res = await postData();
    //     console.log(res);
    // }
    // Post();
  }, []);
  return (<div>
    <Register/>
  </div>);
}
