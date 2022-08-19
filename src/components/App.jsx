import { Component } from "react";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyle";
import { fetchImages } from "services/api";
import Searchbar from "./SearchBar";

export class App extends Component {
  state = {
    page: 1,
    query: '',
    hits: [],
  };

  componentDidUpdate(_, prevState) {
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const prevQuery = prevState.query;
    const currentQuery = this.state.query;

    if(prevPage !== currentPage || prevQuery !== currentQuery) {
      fetchImages(currentQuery, currentPage);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;

    this.setState({
      page: 1,
      query: searchQuery,
      hits: [],
    });

    e.target.reset();
  };

  loadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <Box>
        <GlobalStyle />
        < Searchbar onSubmit={this.handleSubmit} />
        <button type="button" onClick={this.loadMoreClick}>Load more</button>
      </Box>
    );
  }
};
