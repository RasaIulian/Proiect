import styled from "styled-components";

export const FavoritesStyle = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  position: absolute;
  left: 50%;
  top: 6rem;
  transform: translateY(-45%);
  color: #2b2922;
  z-index: 5;
  cursor: pointer;
  &::after {
    content: attr(data-favorites);
    margin-left: 0.5rem;
    font-weight: bold;
    position: absolute;
    top: 0.5rem;
    left: 8rem;
    color: #2b2922;
    z-index: 6;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 2rem;
    text-align: center;
  }
`;