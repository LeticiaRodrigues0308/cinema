import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {

    async availableDays() {
        let r = await api.get(`/availableDays`);
        return r.data;
    }

    async availableMovies(date) {
        let r = await api.get(`/availableMovies/${date}`);
        return r.data;
    }

    async imageMovie(imagem) {
        let r = await api.get(`/movie/cover?imagePath=${imagem}`);
        return r.data;
    }

    async availableSessions(date, movie) {
        let r = await api.get(`/availableSessions?date=${date}&movie=${movie}`);
        return r.data;
    }
}