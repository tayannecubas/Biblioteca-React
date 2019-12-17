import React from "react";
import styled from "styled-components";

import it from "./img/it.jpg";
import drsono from "./img/drsono.jpg";
import pesadelo from "./img/pesadelo.jpg";
import dracula from "./img/dracula.jpg";
import cemiterio from "./img/cemiterio.jpg";
import exorcista from "./img/exorcista.jpg";

export default function Livros() {
  const books = [
    {
      id: 1,
      title: "IT, A Coisa",
      author: "Stephen King",
      price: "R$ 30,00",
      figure: it
    },

    {
      id: 2,
      title: "Doutor Sono",
      author: "Stephen King",
      price: "R$ 45,00",
      figure: drsono
    },

    {
      id: 3,
      title: "A Hora do Pesadelo",
      author: "Thommy Hutson",
      price: "R$ 30,00",
      figure: pesadelo,
    },

    {
      id: 4,
      title: "Drácula",
      author: "Bram Stoker",
      price: "R$ 50,00",
      figure: dracula,
    },

    {
      id: 5,
      title: "O Cemitério",
      author: "Stephen King",
      price: "R$ 45,00",
      figure: cemiterio,
    },

    {
      id: 6,
      title: "O Exorcista",
      author: "William Peter Blatty",
      price: "R$ 25,00",
      figure: exorcista,
    }
  ];
  return (
    <List>
      <h1>Lançamentos</h1>
      <aside>
        {books.map(livro => 
          <p key={livro.id}> <br/>
          <p><img src={livro.figure} alt='Foto Livro' width='337' height='400' /></p><br/>
          <p>{livro.title}</p> <br/>
          <p>{livro.author}</p> <br/>
          <p>{livro.price}</p> <br/>
          </p>
        )}
      </aside>
    </List>
  );
}

const List = styled.section`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
`;
