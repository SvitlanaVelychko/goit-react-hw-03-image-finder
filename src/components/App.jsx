import { Component } from "react";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyle";
import { fetchImages } from "services/api";
import Searchbar from "./SearchBar";
import Loader from "./Loader";
import ImageGallery from "./ImageGallery";
import Button from "./Button";

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
        const { hits, total } = data;

        if (total === 0 || (hits.length === 0 && hits.totalHits > 0)) {
          this.setState({ status: 'idle' });
          return;
        }
          this.setState({ status: 'resolved' });
          this.setState(prevState => ({
          hits: [...prevState.hits, ...hits]
          }));
          return;
        }
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
  }

  formSubmit = query => {
    this.setState({
      page: 1,
      query: query,
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
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        pb="24px">
        <GlobalStyle />
        <Searchbar onSubmit={this.formSubmit} />
        {hits.length > 0 && <ImageGallery hits={hits} />}
        {status === 'panding' && <Loader />}
        {status === 'resolved' && hits.length % 12 === 0 && hits.length !== 0 && 
        <Button onClick={this.loadMoreClick} />}
      </Box>
    );
  }
};
