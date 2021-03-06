import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Oops, page not found</h1>
      <Link to="/">Go back home</Link>
    </>
  );
}

export default NotFound;
