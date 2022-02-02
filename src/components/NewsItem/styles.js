import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  min-width: 320px;
  min-height: 90px;
  padding: 0 0 0 26px;
  opacity: 0.8;
  border-radius: ${props => props.borderRaduis ? props.borderRaduis : "6px"};
  border: solid 1px #979797;
  background-color: ${props => props.myId % 2 === 0 ? '#fff' : '#ececec'};

  &:hover {
    opacity: 0.4;
  }
`

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
`

export const CreatedAt = styled.span`
  display: flex;
  align-items: center;
  font-size: 11px;
`

export const IconDate = styled.img`
  margin-right: 8px;
  width: 16px;
`
 export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-decoration: none;
  color: #6b6b6b;
 `