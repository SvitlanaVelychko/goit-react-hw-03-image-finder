import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem";
import { ImageGalleryContainer } from "./ImageGallery.styled";

const ImageGallery = ({ hits }) => {
    return (
        <ImageGalleryContainer>
            {hits.map(hit => (
                <ImageGalleryItem hit={hit} key={hit.id} />
            ))}
        </ImageGalleryContainer>
    );
};

ImageGalleryItem.propTypes = {
    hits: PropTypes.array,
};

export default ImageGallery;