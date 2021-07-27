import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageContent = styled.div`
  display: grid;
  grid-gap: 2rem;

  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  useEffect(() => {
    document.title = `${title} - Hack Me`;
  }, [title]);

  return (
    <PageContent>
      <PageTitle>{title}</PageTitle>
      {children}
    </PageContent>
  );
};
