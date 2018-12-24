import axios from 'axios';



const KEY = 'AIzaSyBhT5a7v-dbfglI1A1iGeyS-u6AfsWZwzA';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

