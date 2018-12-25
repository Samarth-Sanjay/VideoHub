import axios from 'axios';

const KEY = 'AIzaSyCCVSHSR_Opbx8_C9AGDOGxRfZnd3rsbUo';

export default axios.create({
baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults:  5,
        key: KEY
    }
});