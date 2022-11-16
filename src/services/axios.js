import axios from 'axios';

const api = axios.create({baseUrl: 'https://api.mercadolibre.com/sites/$SITE_ID/'})

export default api