import React from "react";
import { compose, branch, renderComponent, lifecycle } from "recompose";
import { connect } from "react-redux";
import { get } from "./redux";
import styled from "styled-components";
import Loader from "../../common/components/Loader";

const DetailWrapper = styled.div`
  text-align: center;
  img {
    width: 100%;
    max-width: 600px;
  }
  h1 {
    font-size: 40px;
    font-weight: 900;
  }
`;

const enhance = compose(
  connect(
    state => ({
      data: state.photo.result,
      loading: state.photo.loading
    }),
    { get }
  ),
  lifecycle({
    componentDidMount() {
      this.props.get(this.props.match.params.id);
    }
  }),
  branch(props => props.loading || !props.data, renderComponent(Loader))
);
export const Detail = ({ data, loading }) => (
  <DetailWrapper>
    <img src={data.urls.regular} />
    <h1>{data.user.name}</h1>
    <h2>{data.user.location}</h2>
  </DetailWrapper>
);

export default enhance(Detail);
