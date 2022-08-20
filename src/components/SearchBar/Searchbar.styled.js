import styled from "styled-components";

export const SearchbarContainer = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: ${p => p.theme.space[7]}px;
    padding-right:  ${p => p.theme.space[5]}px;
    padding-left:  ${p => p.theme.space[5]}px;
    padding-top: 12px;
    padding-bottom: 12px;
    color:  ${p => p.theme.colors.white};
    background-color:  ${p => p.theme.colors.bgcBtn};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;

export const SearchFormButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    ::hover {
        opacity: 1;
    }
`;

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left:  ${p => p.theme.space[2]}px;
    padding-right:  ${p => p.theme.space[2]}px;

    ::placeholder {
        font: inherit;
        font-size:  ${p => p.theme.fontSizes.m};
    }
`;