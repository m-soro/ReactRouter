// this will make the history component appear
import { Outlet } from "react-router";
import Nav from "./Nav";

export default function About() {
  return (
    <div>
      <Nav />
      <h1>About Page</h1>
      <Outlet />
    </div>
  );
}
