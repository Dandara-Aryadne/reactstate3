import React, { Component } from "react";
import melancia from "./melancia.png";

//Crie uma class component
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
class State03 extends Component {
  state = {
    nome: "Dandara Aryadne",
    idade: 30,
    comida: "Strogonoff",
    musicas: [
      "Bad-Christopher",
      "Criminal-Taemin",
      "Inception-Ateez",
      "Closer to the Edge- 30STM"
    ]
  };

  render() {
    return (
      <div>
        <h1>Nome: {this.state.nome}</h1>
        <h2>Idade: {this.state.idade}</h2>
        <h3>Comida: {this.state.comida}</h3>
        <ul>
          <li>Música 01: {this.state.musicas[0]}</li>
          <li>Música 02: {this.state.musicas[1]}</li>
          <li>Música 03: {this.state.musicas[2]}</li>
        </ul>
        <img src={melancia} alt="watermelon" />
      </div>
    );
  }
}

export default State03;
