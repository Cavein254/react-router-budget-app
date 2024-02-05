import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

export const DashboardLoader = () => {
  const userName = fetchData("userName");
  console.log("On dashBorad");
  console.log(userName);
  return { userName };
};

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const userData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(userData.userName));
    return toast.success(`Welcome ${userData.userName}`);
  } catch (e) {
    throw new Error("There was a problem creating your account");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  console.log("---------------------------");
  console.log(userName);
  return <div>{userName ? <h1>{userName}</h1> : <Intro />}</div>;
};

export default Dashboard;
