import React from 'react';
import PropTypes from 'prop-types';
import BooksSection from './BooksSection';

const BooksSectionView = ({sections, books}) => {
    return (
        <div className="list-books-content">
            <div>
                {sections.map(section => {
                    const sectionKey = Object.keys(section)[0];
                    const sectionValue = section[sectionKey];
                    return (
                        <BooksSection key={sectionKey} bookShelfTitle={sectionValue} books={sectionKey === "all" ? books : books.filter(book => book.bookShelf === sectionKey)}/>
                    );
                })}
            </div>
        </div>
    );
};

BooksSectionView.propTypes = {
    sections: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
};

export default BooksSectionView;
