import { Component } from "react";
import PropTypes from 'prop-types';
import { SearchIcon } from '@primer/octicons-react';
import { toast } from 'react-toastify';
import {
    SearchbarContainer,
    SearchForm,
    SearchFormButton,
    SearchFormInput
} from "./Searchbar.styled";

export default class Searchbar extends Component {
    state = {
        query: '',
    };

    handleChange = e => {
        const query = e.currentTarget.value.trim().toLowerCase();
        this.setState({ query });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { query } = this.state;
        const { onSubmit } = this.props;

        if (query.trim() === '') {
            toast.error('Please, write word in search line.');
        } else {
            onSubmit(query);
            this.setState({
                query: '',
            });
        }

        e.currentTarget.reset();
    };

    render() {
        return (
            <SearchbarContainer>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit">
                        <SearchIcon size={24} />
                    </SearchFormButton>
                    <SearchFormInput
                        type="text"
                        name="query"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </SearchForm>
            </SearchbarContainer>
        );
    }
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};