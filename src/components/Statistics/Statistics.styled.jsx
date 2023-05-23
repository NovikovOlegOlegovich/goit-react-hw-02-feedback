import styled from '@emotion/styled';

export const StatList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const StatItem = styled.li`
  background-color: ${props => props.theme.colors.boxColor};
  border: 2px solid grey;
  width: 350px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const StatDescrip = styled.p`
  margin-left: 20px;
`;
