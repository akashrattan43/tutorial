import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "Love you to the moon and back";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL320_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h1>Amelia Hepworth</h1>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
