import {
    SearchbarContainer,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput
} from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
    return (
        <SearchbarContainer>
            <SearchForm onSubmit={onSubmit}>
                <SearchFormButton type="submit">
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarContainer>
    );
};

export default Searchbar;