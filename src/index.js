import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars
const books = [
  {
  img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL320_.jpg",
  title: "Love you to the moon and back",
  author: "Amelia Hepworth",
},
{
  img:
    "https://images-na.ssl-images-amazon.com/images/I/41qmSL688OL._SX316_BO1,204,203,200_.jpg",
  title: "You Are a Badass",
  author: "Jen Sincero",
}
]

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const {img, title, author} = book
        return <Book book={book}></Book>
      })}
    </section>
  );
}

const Book = (props) => {
   const {img, title, author} = props.book
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h1>{author}</h1>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
