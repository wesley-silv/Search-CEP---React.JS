import './Components/style.css'
import api from './services/api'

import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'



const App = () => {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    // 38180030/json/

    if (input === "") {
      alert('Preencha o campo com o CEP desejado!')
      return
    }
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    } catch {
      alert('Ops! Erro ao buscar pelo cep.')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <article className='description'>
        {/* Esse página web tem por finalidade buscar o cep com base na numeração inserida  */}
      </article>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Pesquise pelo CEP:"
          value={input}
          onChange={e => setInput(e.target.value)}
          autoFocus
        ></input>
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <p className='main-text'>
            Este é o CEP que corresponde à descrição 
          </p>
          <h2>CEP:{cep.cep} </h2>
          <span>{cep.logradouro} </span>
          <span>Complemento:{cep.complemento} </span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade}-{cep.uf}
          </span>
        </main>
      )}
    </div>
  )
}

export default App
