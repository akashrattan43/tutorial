import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article>
    <Image />
    <Title />
    <Author />
  </article>
);

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL320_.jpg"
    alt=""
  />
);

const Title = () => <h1>Love you to the moon and back</h1>;

const Author = () => <h1>Amelia Hepworth</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
 