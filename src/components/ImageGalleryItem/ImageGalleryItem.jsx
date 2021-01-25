import propTypes from 'prop-types';

export default function ImageGalleryItem({ id, url, setlargeImg, largeUrl }) {
    return (
        <li className="ImageGalleryItem">
            <img src={url} alt="" className="ImageGalleryItem-image" onClick={() => {setlargeImg(largeUrl)} }/>
        </li>
    )
}

ImageGalleryItem.propTypes = {
    id: propTypes.string,
    url: propTypes.string,
    largeUrl: propTypes.string,
    setlargeImg: propTypes.func
}