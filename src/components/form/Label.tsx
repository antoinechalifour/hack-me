import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-weight: bold;

  & + * {
    margin-top: 0.5rem;
  }

  * + & {
    margin-top: 2rem;
  }
`;
