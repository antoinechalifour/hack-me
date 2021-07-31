import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { AppState } from "../../store";
import { VStack } from "../../components/VStack";
import { Desk } from "../Desk";
import { allDesks } from "../desksSlice";
import { DeskItem } from "./DeskItem";

interface AllDesksViewProps {
  desks: Desk[];
}

export const AllDesksView = ({ desks }: AllDesksViewProps) => (
  <VStack>
    <Link to="/desks/add">Add a new desk</Link>

    <DeskList>
      {desks.map((desk) => (
        <DeskItem key={desk.id} desk={desk} />
      ))}
    </DeskList>
  </VStack>
);

export const AllDesksViewContainer = connect((state: AppState) => ({
  desks: allDesks(state),
}))(AllDesksView);

const DeskList = styled.ul`
  display: grid;
  grid-gap: 2rem;
`;
