import React from 'react';
import './App.css';
import logoImg from '../assents/Logo.png'

function App() {
  return (
    <div id>
      <div id="main">
        <header id="header-page">
          <img src={logoImg} alt="Logo livros" id="logo"/>
          <p>Pesquisa seu livro em interesse</p>
          <input type="text"/>
        </header>

        <main id="content-books">
          <div className="book">
            <h1>Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </div>

          <div className="book">
            <h1>Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </div>

          <div className="book">
            <h1>Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </div>

          <div className="book">
            <h1>Lorem ipsum</h1>
            <h2>NOME LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel tempora commodi cum dicta voluptatibus voluptatem culpa vitae nisi illo facilis, suscipit assumenda error dolorem quos, eos </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
