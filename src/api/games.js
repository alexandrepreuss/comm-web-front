import axios from 'axios'

export default axios.create({
  baseURL: 'https://sleepy-harbor-93997.herokuapp.com/',
  // baseURL: 'http://localhost:8080/',
})
