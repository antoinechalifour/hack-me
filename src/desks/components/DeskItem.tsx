import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { TiChevronRight } from "react-icons/ti";
import styled from "styled-components";

import { Desk } from "../Desk";

export const DeskItem = ({ desk }: DeskItemProps) => {
  const label = `Modifier les informations du bureau ${desk.name}`;

  return (
    <DeskListItem>
      <ImHome aria-hidden={true} size={20} />

      <DeskName>{desk.name}</DeskName>

      <DeskInfo>
        {desk.id} • peut accueillir jusqu'à {desk.numberOfEmployees} employés
      </DeskInfo>

      <Link to={`/desks/${desk.id}`} aria-label={label} title={label}>
        <TiChevronRight aria-hidden={true} size={20} />
      </Link>
    </DeskListItem>
  );
};

const DeskListItem = styled.li`
  display: grid;
  grid-gap: 1rem 2rem;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(2, auto);

  padding: 1.5rem 2rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;

  background: #fff;

  svg {
    color: blue;
    grid-row: 1 / span 2;
  }

  a {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
`;

const DeskName = styled.p`
  font-weight: bold;
`;

const DeskInfo = styled.p`
  opacity: 0.65;
  font-size: 1.3rem;
`;

interface DeskItemProps {
  desk: Desk;
}
