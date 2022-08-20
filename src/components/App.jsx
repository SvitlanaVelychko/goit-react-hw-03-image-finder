import { Component } from "react";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyle";
import { fetchImages } from "services/api";
import Searchbar from "./SearchBar";
import ImageGallery from "./ImageGallery";

export class App extends Component {
  state = {
    page: 1,
    query: '',
    hits: [],
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    try {
      const prevPage = prevState.page;
      const currentPage = this.state.page;
      const prevQuery = prevState.query;
      const currentQuery = this.state.query;

      if (prevPage !== currentPage || prevQuery !== currentQuery) {
        this.setState({ status: 'pending' });
        const data = await fetchImages(currentQuery, currentPage);

        if (data.total === 0 || (data.hits.length === 0 && data.hits.totalHits > 0)) {
          this.setState({ status: 'idle' });
          return;
        }
          this.setState({ status: 'resolved' });
          this.setState(prevState => ({
          hits: [...prevState.hits, ...data.hits]
          }));
          return;
        }
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      page: 1,
      query: e.target.elements.query.value.trim().toLowerCase(),
      hits: [],
      status: 'idle',
    });
  };

  loadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { hits, status } = this.state;
    return (
      <Box>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleSubmit} />
        {hits.length > 0 && <ImageGallery hits={hits}/>}
        {status === 'resolved' && hits.length % 12 === 0 && hits.length !== 0 && 
        <button type="button" onClick={this.loadMoreClick}>Load more</button>}
      </Box>
    );
  }
};
