import React from "react";
import styled from "styled-components";
import { darkBlue, gray } from "../../common/colors";
import PhotoPreview from "../../common/components/PhotoPreview";
import { withState, compose } from "recompose";
import { connect } from "react-redux";
import { search } from "./redux";
import Loader from "../../common/components/Loader";

const SearchBox = styled.div`
  text-align: center;
`;

const SearchInput = styled.input`
  font-size: 25px;
  padding: 20px;
  font-family: "Raleway" sans-serif;
  border-color: ${props => (!props.disabled ? darkBlue : gray)};
  border-radius: 10px 0 0 10px;
  border-width: 2px;
  border-right: 0px;
`;

const SearchButton = styled.button.attrs({ type: "submit" })`
  cursor: pointer;
  font-size: 25px;
  padding: 20px;
  font-family: "Raleway" sans-serif;
  background-color: ${props => (!props.loading ? darkBlue : gray)};
  color: white;
  border-color: ${props => (!props.loading ? darkBlue : gray)};
  border-radius: 0 10px 10px 0;
  border-width: 2px;
  border-right: 0px;
`;

const ResultList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const enhance = compose(
  withState("query", "setQuery", ""),
  connect(
    state => ({
      results: state.home.results,
      loading: state.home.loading
    }),
    { search }
  )
);

export const Home = ({ query, setQuery, results, loading, search }) => (
  <div>
    <SearchBox>
      <form
        onSubmit={e => {
          search(query);
          e.preventDefault();
        }}
      >
        <SearchInput
          disabled={loading}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter keyword..."
          type="text"
        />
        <SearchButton loading={loading}>Search</SearchButton>
      </form>
    </SearchBox>
    <ResultList>
      {loading && <Loader />}
      {results.map(data => <PhotoPreview key={data.id} data={data} />)}
    </ResultList>
  </div>
);

export default enhance(Home);
