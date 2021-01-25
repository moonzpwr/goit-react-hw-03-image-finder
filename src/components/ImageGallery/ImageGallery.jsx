import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


export default function ImageGallery({images, setlargeImg}) {
    return (
        <ul className="ImageGallery">
            {images.map(image => { return <ImageGalleryItem key={image.id} url={image.webformatURL} largeUrl={image.largeImageURL} setlargeImg={ setlargeImg}/>})}
        </ul>
    )
           
}

ImageGallery.propTypes = {
    images: propTypes.array,
    setlargeImg: propTypes.func
}