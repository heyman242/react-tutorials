import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "M laxmikanth",
    title: "Indian Polity",
    src: "https://images-eu.ssl-images-amazon.com/images/I/71CrTyKsazL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "James CLear",
    title: "Atomic Habits",
    src: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL300_SR300,200_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { src, title, author, getBook, id } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={src} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>display title</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
