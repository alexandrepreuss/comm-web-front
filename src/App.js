import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import api from './api/games'
import './App.css'
import Games from './Pages/Admin/Games/Games'
import AddGame from './components/AddGame'
import AddCategory from './Pages/Admin/Categories/AddCategory'
import Header from './components/Header'
import EditGame from './components/EditGame'
import Categories from './Pages/Admin/Categories/Categories'

function App() {
  const [games, setGames] = useState([])
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  /**
   *
   * Métodos de chamada HTTP para Categorias
   */

  const retrieveCategories = async () => {
    const response = await api.get('/categorias')
    return response.data
  }

  const addCategoryHandler = async category => {
    const response = await api.post('/categorias', category)
    setCategories([...categories, response.data])
    console.log(response)
  }

  const removeCategoryHandler = async id => {
    await api.delete(`/categorias/${id}`)
    const newCategoryList = categories.filter(category => {
      return category.id !== id
    })

    setCategories(newCategoryList)
  }

  const updateCategoryHandler = async category => {
    const response = await api.put(`/categorias/${category.id}`, category)
    const { id, nome } = response.data
    setCategories(
      categories.map(cat => {
        return cat.id === id ? { ...response.data } : cat
      })
    )
  }

  /**
   *
   * Métodos de chamada HTTP para Jogos
   */

  const retrieveGames = async () => {
    const response = await api.get('/jogos')
    return response.data
  }

  const addGameHandler = async game => {
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
    const getAllCategories = async () => {
      const allCategories = await retrieveCategories()
      if (allCategories) setCategories(allCategories)
    }

    getAllCategories()
  })

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(games))
  // }, [games])

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
                getGameId={removeGameHandler}
                games={searchTerm.length < 1 ? games : searchResults}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={props => (
              <AddGame
                {...props}
                addGameHandler={addGameHandler}
                categories={categories}
                getCatId={removeCategoryHandler}
              />
            )}
          />
          <Route
            path="/edit"
            render={props => <EditGame {...props} categories={categories} updateGameHandler={updateGameHandler} />}
          />
          <Route
            path="/categories"
            render={props => <Categories {...props} categories={categories} getCatId={removeCategoryHandler} />}
          />
          <Route path="/addcat" render={props => <AddCategory {...props} addCategoryHandler={addCategoryHandler} />} />
        </Switch>
      </Router>
    </>
  )
}

export default App
