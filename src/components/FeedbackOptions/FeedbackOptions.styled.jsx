import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px;
`;

export const ButtonListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:first-of-type button {
    background-color: ${props => props.theme.colors.green};
  }
  &:nth-of-type(2) button {
    background-color: ${props => props.theme.colors.yellow};
  }
  &:last-child button {
    background-color: ${props => props.theme.colors.red};
  }
`;

export const Button = styled.button`
  border: 2px solid grey;
  padding: 10px;
  min-height: 30px;
  min-width: 100px;
  &:hover {
    transform: scale(1.1);
    border-color: black;
  }
`;
