import React from "react";
import styled from "styled-components";
import { gray } from "../colors";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  a {
    text-decoration: none;
    color: initial;
  }
  width: 25%;
  @media (max-width: 900px) {
    width: 33.33%;
  }
  @media (max-width: 700px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Card = styled.div`
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    display: block;
  }
  .description {
    border: 1px solid ${gray};
    border-radius: 0 0 10px 10px;
    border-top: 0;
    padding: 10px;
  }
  .main {
    font-size: 20px;
    font-weight: 900;
  }
  .sub {
    color: #888;
    margin-top: 10px;
  }
`;

export default ({ data }) => (
  <CardWrapper>
    <Link to="/photos/123">
      <Card>
        <img src={data.urls.small} />
        <div className="description">
          <p className="main">{data.user.name}</p>
          <p className="sub">{data.user.location}</p>
        </div>
      </Card>
    </Link>
  </CardWrapper>
);
