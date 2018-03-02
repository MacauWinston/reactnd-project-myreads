# MyReads Project

MyReads Project provides a simple bookshelf interface that helps a user to organize his or her books into the following the three categories:

* Currently Reading
* Want to Read
* Read

MyReads Project also provides an interface that allows a user to search for books using the queries found in [SEARCH_TERMS.md](SEARCH_TERMS.md).

## Quick Overview

```sh
git clone https://github.com/MacauWinston/reactnd-project-myreads.git
cd reactnd-project-myreads
npm install
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

(As you may notice, a token string of length 8 has been storied in your localStorage. This token represents your identity. Therefore, the next time when you restart the app using the same web browser, the same information will **likely** appear on the screen.)

## Quick Tutorial

1. From the [main page](http://localhost:3000/), you can see three major rows written "Currently Reading", "Want to Read", and "Read". To move a book from "Currently Reading" section to "Read" section, simply click the green button besides the book and select "Read". You immediately see the book moves to the "Read" section.

2. On the same main page as above, to remove a book from the bookshelf, you simply click the green button besides the book and select "None". Then the book will disappear from the bookshelf.

3. Go to the [search page](http://localhost:3000/search), click the "+" (plus) button at the bottom right.

4. On the same search page as above, to search for books, type a query at the top input box that matches one of the terms in [SEARCH_TERMS.md](SEARCH_TERMS.md). As an example, we type *art* into the input box. Then at most 20 relevant book results about *Art* or *Artificial Intelligence* (another search term which contains the keyword *Art*) will appear on the screen.

5. On the same search page as above, to move a book (whether the book is on the bookshelf or not) to the "Want to Read" bookshelf section, simply click the green button besides the book and select "Want to Read".

6. To go back to the [main page](http://localhost:3000/), simply click the left arrow icon on the left of the input box. Then the book will appear in the "Want to Read" section.
