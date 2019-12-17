import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'



export default function Cabecalho() {
  return(
    <Header>

      <Titulo> 
        <Link to='/'> Livraria del Muerte </Link>
        </Titulo>

    <Navigation to='/home'>Home</Navigation>
    <Navigation to='/contato'>Contato</Navigation>
    <Navigation to='/sobre'>Sobre</Navigation>
    <Navigation to='/recomendados'>Recomendado</Navigation>
    <Navigation to='/dicas'>Dicas </Navigation>    
    <Navigation to='/vendidos'>Vendidos </Navigation>
  
    </Header>
  )
}

const Titulo = styled.h1`
 font-size: 1.5rem;
 `
const Header = styled.header`
  background:radial-gradient(circle, #030306, #050911, #0A1725, #2A5461);
  font-size: 2rem;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
const Navigation = styled(Link)`
  margin: 10px
`
