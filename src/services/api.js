import axios from 'axios';
// BASE_URL
//https://api.themoviedb.org/3/

// URL DA API
// movie/now_playing?api_key=8483cdb2e2d10c9c0df4c0179ff368d1&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;