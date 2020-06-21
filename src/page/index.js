import React, {useEffect, useState} from 'react';

import api from '../api'

import './App.css';
import logoImg from '../assents/Logo.png'

function App() {
  //const [ books, setBooks ] = useState([])

  async function handleSearchBook() {
    const response = await api.get('50 tons de cinza')

    console.log(response)
  }


  return (
    <div id="content">
      <header id="header-page">
        <img src={logoImg} alt="Logo livros" id="logo"/>
        <p>Pesquisa seu livro em interesse</p>
        <input type="text"/>
        <button type="button" onClick={handleSearchBook} >Pesquisar</button>
      </header>

      <main id="main">
        <ul id="list-main">
          <li className="data-book">
            <h1>Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </li>

          <li className="data-book">
            <h1 className="title">Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </li>

          <li className="data-book">
            <h1 className="title">Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </li>

          <li className="data-book">
            <h1 className="title">Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </li>

          <li className="data-book">
            <h1 className="title">Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </li>

          <li className="data-book">
            <h1>Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </li>
        </ul>
      </main>

      <footer id="footer-page">
        <p>Marcos Alves</p>
        <a href="https://github.com/marcosdid">Github</a>
      </footer>
    </div>
  );
}

export default App;
