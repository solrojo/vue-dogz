import axios from 'axios'

export default axios.create({
  baseURL: 'https://dog.ceo/api',
  responseType: 'json',
  transformResponse: [data => (data.status === 'success' ? data.message : [])]
})
