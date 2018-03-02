import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksSection = ({bookShelfTitle, books}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books
                        .map(book => 
                            <li key={book.bookId}>
                                <BookItem 
                                    bookCover={book.bookCover}
                                    bookShelf={book.bookShelf}
                                    bookTitle={book.bookTitle}
                                    bookAuthors={book.bookAuthors}
                                    onChangeBookShelf={book.onChangeBookShelf}
                                />
                            </li>)}
                </ol>
            </div>
        </div>
    );
};

BooksSection.propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
};

export default BooksSection;
