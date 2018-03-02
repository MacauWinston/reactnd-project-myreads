import React, { Component } from 'react';
import sortBy from 'sort-by';
import { get, update, search } from '../utils/BooksAPI';
import { Link } from 'react-router-dom';
import BooksSectionView from '../components/Section/BooksSectionView';

const sections = [
    {all: "All"}
];

const searchTerms = [
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 
    'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 
    'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 
    'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 
    'Desai', 'Design', 'Development', 'Digital Marketing', 
    'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 
    'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 
    'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 
    'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 
    'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 
    'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 
    'Photography', 'Poetry', 'Production', 'Programming', 
    'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 
    'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 
    'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 
    'Web Development', 'iOS'
];

class BooksSearchPage extends Component {
    state = {
        query: "",
        books: []
    };

    convertBook = (book) => ({
        bookId: book.id,
        bookCover: (book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail : "./thumbnail-placeholder.jpg",
        bookShelf: ["currentlyReading", "wantToRead", "read", "none"].indexOf(book.shelf) !== -1 ? book.shelf : "none",
        bookTitle: book.title || "",
        bookAuthors: book.authors || [],
        onChangeBookShelf: (myBookShelf) => this.onChangeBookShelf(book.id, myBookShelf)
    });

    onChangeBookShelf = (bookId, bookShelf) => {
        update(bookId, bookShelf).then(json => {
            this.setState(prevState => {
                let newBooks = [...prevState.books];
                for (let i = 0; i < newBooks.length; i++){
                    if (newBooks[i].bookId === bookId){
                        newBooks[i].bookShelf = bookShelf
                        break;
                    }
                }
                return {
                    books: newBooks
                };
            });
        });
    };

    matchTerm = (query) => {
        let term = searchTerms.filter(searchTerm => searchTerm.toLowerCase() === query.toLowerCase());
        return term = term.length > 0 ? term[0] : "";
    };

    getBooks = (query) => {
        let output = this.matchTerm(query);
        if (output.length > 0) {
            search(query)
                .then(books => Promise.all(books.map(book => get(book.id))))
                .then(books => books.map(book => this.convertBook(book)))
                .then(books => books.sort(sortBy('bookTitle')))
                .then(books => this.setState({books}));
        } else {
            this.setState({books: []});
        }
    };
    
    updateQuery = (query) => {
        this.setState({query}, () => this.getBooks(query.trim()));
    };

    componentDidMount(){
        this.nameInput.focus(); 
    }

    render() {
        const { query, books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            ref={(input) => {this.nameInput = input;}}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksSectionView sections={sections} books={books} />
                </div>
            </div>
        );
    }
}

export default BooksSearchPage;
