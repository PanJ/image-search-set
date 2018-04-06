import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../features/home/Home";
import PhotoDetail from "../features/photo/Detail";
import styled from "styled-components";
import ContentWrapper from "./components/ContentWrapper";

const MainWrapper = styled.div``;
const Header = styled.header`
  background-color: #121938;
  padding: 20px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 4px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default () => (
  <MainWrapper>
    <Header>
      <Link to="/">Unsplash Image Search</Link>
    </Header>
    <ContentWrapper>
      <Route path="/" exact component={Home} />
      <Route path="/photos/:id" exact component={PhotoDetail} />
    </ContentWrapper>
  </MainWrapper>
);
