import { Component } from "react";
import PropTypes from 'prop-types';
import Modal from "../Modal";
import { ImageItem, ImageItemCard } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    openModal = () => this.setState({ isModalOpen: true });
    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        const { hit } = this.props;
        return (
            <ImageItem>
                <ImageItemCard src={hit.webformatURL} alt={hit.tags} onClick={this.openModal} />
                {this.state.isModalOpen &&
                    (<Modal onClose={this.closeModal}><img src={hit.largeImageURL} alt={hit.tags} /></Modal>)}
            </ImageItem>
        );
    }
};

ImageGalleryItem.propTypes = {
    hits: PropTypes.array,
    isModal: PropTypes.bool,
};