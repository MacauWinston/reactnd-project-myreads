import React, { Component } from 'react';
import sortBy from 'sort-by';
import { getAll, update } from '../utils/BooksAPI';
import { Link } from 'react-router-dom';
import BooksSectionView from '../components/Section/BooksSectionView';

const sections = [
    {currentlyReading: "Currently Reading"},
    {wantToRead: "Want to Read"}, 
    {read: "Read"}
];

class BooksPage extends Component {
    state = {
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

    componentDidMount() {
        getAll()
            .then(books => books.map(book => this.convertBook(book)))
            .then(books => books.sort(sortBy('bookTitle')))
            .then(books => this.setState({ books }));
    }

    render() {
        const { books } = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BooksSectionView sections={sections} books={books} />
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BooksPage;
