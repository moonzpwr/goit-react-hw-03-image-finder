 const fetchImagesWithQuery = (searchQuery, page = 1) => {
    const API_KEY = '19208755-08629c8cbde4e66b67e21e936';
    return fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())    
}

export default fetchImagesWithQuery;