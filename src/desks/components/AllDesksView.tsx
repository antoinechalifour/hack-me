import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { AppState } from "../../store";
import { Desk } from "../Desk";
import { allDesks } from "../desksSlice";

interface AllDesksViewProps {
  desks: Desk[];
}

export const AllDesksView = ({ desks }: AllDesksViewProps) => (
  <div>
    <Link to="/desks/add">Add a new desk</Link>

    <ul>
      {desks.map((desk) => (
        <li key={desk.id}>
          {desk.name} ({desk.numberOfEmployees} employees)
        </li>
      ))}
    </ul>
  </div>
);

export const AllDesksViewContainer = connect((state: AppState) => ({
  desks: allDesks(state),
}))(AllDesksView);
