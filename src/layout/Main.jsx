import React from "react";
import { fetchData } from "../helpers";
import { Outlet, useLoaderData } from "react-router-dom";

export const MainLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      <Outlet />
    </div>
  );
};

export default Main;
