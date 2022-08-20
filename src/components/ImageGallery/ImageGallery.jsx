import ImageGalleryItem  from "../ImageGalleryItem";
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

export default ImageGallery;