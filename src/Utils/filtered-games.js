import api from '../Api/axios'

const retrieveFilteredGames = async name => {
  const response = await api.get(`/jogos/${name}`)
  console.log(response.data)
  return response.data
}

export default retrieveFilteredGames
