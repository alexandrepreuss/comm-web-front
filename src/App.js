import React, { useState, useEffect, Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import api from './api/games'
import './App.css'
import Games from './components/Games'
import AddGame from './components/AddGame'
import Header from './components/Header'
import EditGame from './components/EditGame'

function App() {
  const LOCAL_STORAGE_KEY = 'jogos'
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  //RetrieveGames
  const retrieveGames = async () => {
    const response = await api.get('/jogos')
    console.log(response.data)
    return response.data
  }

  const addGameHandler = async game => {
    // const request = {
    //   ...game,
    // }
    const response = await api.post('/jogos', game)
    setGames([...games, response.data])
  }

  const updateGameHandler = async game => {
    const response = await api.put(`/jogos/${game.id}`, game)
    const { id, nome, url_jogo, url_imagem, url_demo, descricao, id_categoria, categoria } = response.data
    setGames(
      games.map(game => {
        return game.id === id ? { ...response.data } : game
      })
    )
  }

  const removeGameHandler = async id => {
    await api.delete(`/jogos/${id}`)
    const newGameList = games.filter(game => {
      return game.id !== id
    })

    setGames(newGameList)
  }

  const searchHandler = searchTerm => {
    setSearchTerm(searchTerm)
    if (searchTerm !== '') {
      const newGameList = games.filter(game => {
        return Object.values(game).join(' ').toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newGameList)
    } else {
      setSearchResults(games)
    }
  }

  useEffect(() => {
    const getAllGames = async () => {
      const allGames = await retrieveGames()
      if (allGames) setGames(allGames)
    }

    getAllGames()
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(games))
  }, [games])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Games
                {...props}
                games={searchTerm.length < 1 ? games : searchResults}
                getGameId={removeGameHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route path="/add" render={props => <AddGame {...props} addGameHandler={addGameHandler} />} />
          <Route path="/edit" render={props => <EditGame {...props} updateGameHandler={updateGameHandler} />} />
        </Switch>
      </Router>
    </>
  )
}

export default App
