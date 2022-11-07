import axios from 'axios'

// KEY fb7b40503ab1a98bd576d806a6e65ac6c5da17aa
// base url : https://api-ssl.bitly.com/v4/

export const key = 'fb7b40503ab1a98bd576d806a6e65ac6c5da17aa'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api