import React from "react";
import styled from "styled-components";
import { RingLoader } from "react-spinners";
import { yellow } from "../../common/colors";

const StyledRingLoader = styled(RingLoader).attrs({
  color: yellow
})``;
const LoaderWrapper = styled.div`
  margin: 0 auto;
  width: 60px;
`;
const Loader = props => (
  <LoaderWrapper>
    <StyledRingLoader {...props} />
  </LoaderWrapper>
);

export default Loader;
