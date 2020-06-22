import React, {useState} from 'react';

import api from '../connectionApi'

import './App.css';
import logoImg from '../assents/Logo.png'

function App() {
  const [books, setBooks] = useState([])

  async function handleSearchBook() {
    const valueBook = document.querySelector('#clientBook').value
    const response = await api.get(valueBook)
    const listbooks = response.data.items

    setBooks(listbooks)
  }

  function handleViewDescription(description) {
    const lastWord = description.indexOf(' ', 200)
    const redefinedDescription = description.substring(0, lastWord)

    return redefinedDescription
  }


  return (
    <div id="content">
      <header id="header-page">
        <img src={logoImg} alt="Logo livros" id="logo"/>
        <p>Pesquisa seu livro em interesse</p>
        <input type="text" id="clientBook" />
        <button type="button" onClick={handleSearchBook} >Pesquisar</button>
      </header>

      <main id="main">
        <ul id="list-main">
          {books.map( (book, index) => (
            <li key={index} className="data-book">
              <div className="contentBookImgTitleAu">
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book img"/>
                <div className="title-authors">
                  <h1>{book.volumeInfo.title}</h1>
                  <p>{book.volumeInfo.authors}</p>
                  <p className="limiteParagraph">{handleViewDescription(book.volumeInfo.description) + '...'}</p>
                </div>
              </div>
            </li>))}
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
