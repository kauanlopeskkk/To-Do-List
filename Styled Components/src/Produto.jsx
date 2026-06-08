import React from 'react';
import styled from 'styled-components';
import './Produto.css';

const ProdutoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 450px;
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 15px;
  text-align: center;
  margin-top: 60px;
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const NomeProduto = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
  color: white;
`;

const PrecoProduto = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: white;
`;

const BotaoComprar = styled.button`
  background-color: #198754;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d442a;
  }
`;

const Botao = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #565e64;
  }
`;

function App() {
  const handleComprar = () => {
    alert('Produto comprado!');
  };

  const handleAdicionarCarrinho = () => {
    alert('Produto adicionado ao carrinho!');
  };

  return (
    <ProdutoContainer>
      <ImagemProduto
        src="https://m.media-amazon.com/images/I/516pVDAQMnL._AC_UF1000,1000_QL80_.jpg"
        alt="Xbox Series X"
      />

      <NomeProduto>Xbox Series X</NomeProduto>

      <PrecoProduto>R$ 5.169,00</PrecoProduto>

      <BotaoComprar onClick={handleComprar}>
        Comprar
      </BotaoComprar>

      <Botao onClick={handleAdicionarCarrinho}>
        Adicionar ao Carrinho
      </Botao>
    </ProdutoContainer>
  );
}

export default App;