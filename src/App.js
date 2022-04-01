import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import api from './api/games'
import './App.css'
import Games from './components/Games'
import RegisterForm from './components/RegisterForm'
import Header from './components/Header'
import EditGame from './components/EditGame'

function App() {
  const LOCAL_STORAGE_KEY = 'games'
  const [games, setGames] = useState([])

  //RetrieveGames
  const retrieveGames = async () => {
    const response = await api.get('/games')
    return response.data
  }

  const addGameHandler = async game => {
    const request = {
      id: uuidv4(),
      ...game,
    }

    const response = await api.post('/games', request)

    setGames([...games, response.data])
  }

  const updateGameHandler = async game => {
    const response = await api.put(`/games/${game.id}`, game)
    const { id, name, url_game, url_img, description, category } = response.data
    setGames(
      games.map(game => {
        return game.id === id ? { ...response.data } : game
      })
    )
  }

  const removeGameHandler = async id => {
    await api.delete(`/games/${id}`)
    const newGameList = games.filter(game => {
      return game.id !== id
    })

    setGames(newGameList)
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
          <Route path="/add" render={props => <RegisterForm {...props} addGameHandler={addGameHandler} />} />
          <Route path="/edit" render={props => <EditGame {...props} updateGameHandler={updateGameHandler} />} />
          <Route path="/" exact render={props => <Games {...props} games={games} getGameId={removeGameHandler} />} />
        </Switch>
      </Router>
    </>
  )
}

export default App
