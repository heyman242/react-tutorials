import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const BookList = () => {
  return <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
 
  </section>;
}

const Book = () => {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>

    </article>;
}

const Image = () =>( 
<img src="https://images-eu.ssl-images-amazon.com/images/I/71CrTyKsazL._AC_UL600_SR600,400_.jpg" alt="Indian Polity"/>);
const Title = () => <h2>Indian Polity</h2>
const Author = () => {
    return <h4>M laxmikanth</h4>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
