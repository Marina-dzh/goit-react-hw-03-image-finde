import axios from 'axios';
import toast from 'react-hot-toast';

 const KEY= `31735095-684ab1f66144313a79ef81b6d`;
axios.defaults.baseURL = `https://pixabay.com/api/`;
      
export const fetchGallery = async (query, page) => {
    const responce = await axios.get(`?key=${KEY}&q=${query}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`);
    if (responce.data.hits.length > 0 )
    { return responce.data } else {

        toast.error('There is no results!')
   }
}
