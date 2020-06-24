import React, {useState} from 'react';

import api from '../connectionApi'

import './App.css';
import logoImg from '../assents/Logo.png'
import substituteImgBook from '../assents/substituteImageBook.png'

function App() {
  const [books, setBooks] = useState([])

  async function handleSearchBook() {
    const valueBook = document.querySelector('#clientBook').value
    const response = await api.get(valueBook)
    const listbooks = response.data.items

    const newBooks = listbooks.map((book) => {
      let { title = '', authors = '', categories = '', description = '', language = '', imageLinks = substituteImgBook  } = book.volumeInfo
      if (imageLinks !== substituteImgBook ) {
        imageLinks = imageLinks.thumbnail
      }
      
      return ({title, authors, categories, description, language, imageLinks})
    })
    setBooks(newBooks)
  }

  function handleViewDescription(description) {
    if (description.length < 200 ) {
      return description
    }

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
          {books.map((book, index) => (
            <li key={index} className="data-book">
              <div className="contentBookImgTitleAu">
                <img src={book.imageLinks} alt="book img"/>
                <div className="title-authors">
                  <h1>{book.title}</h1>
                  <p>{book.authors}</p>
                  <p className="limiteParagraph">{handleViewDescription(book.description) + '...'}</p>
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
