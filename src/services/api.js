import axios from 'axios'

export const key = '40fe1e49678f438ba1f591de4b5dd22e9d15449b'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api
