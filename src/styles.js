import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const ProductWrapper = styled.div`
  margin: 20px;
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const DeleteButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const AddButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
  margin: 20px;
`;

export const SubmitButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const UpdateButtonStyled = styled.button`
  color: maroon;
  background-color: ${(props) => props.theme.pink};

  &:hover {
    color: ${(props) => props.theme.pink};
    background-color: maroon;
  }
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Logo = styled(Link)`
  padding: 0.8em 0.5em;

  img {
    width: 8rem;
  }
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;

  &.active {
    color: ${(props) => props.theme.pink};
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;
