import React from "react";
import { Link } from "react-router-dom";

export const AllDesksView = () => (
  <div>
    <Link to="/desks/add">Add a new desk</Link>

    <p>All desks here</p>
  </div>
);
