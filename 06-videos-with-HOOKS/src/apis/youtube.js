import axios from 'axios';

const KEY = 'AIzaSyBnW2utJyDVGiqHukyy7PNi0UZNpbEYN_I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
