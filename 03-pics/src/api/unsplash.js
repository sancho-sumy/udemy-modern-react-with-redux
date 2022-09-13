import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -THElgf2SD7GxkraiSg9ZhFcCeX6x7U188Om_bryzR8',
  }
})