import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({bookCover, bookShelf, bookTitle, bookAuthors, onChangeBookShelf}) => {
    const handleChange = (event) => {
        onChangeBookShelf(event.target.value);
    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
                <div className="book-shelf-changer">
                    <select value={bookShelf} onChange={handleChange}>
                        <option value="move-to" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookTitle}</div>
            {bookAuthors.map(author => <div key={author} className="book-authors">{author}</div>)}
        </div>          
    );
};

BookItem.propTypes = {
    bookCover: PropTypes.string.isRequired,
    bookShelf: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthors: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
};

export default BookItem;
