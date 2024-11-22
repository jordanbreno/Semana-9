import React from 'react';
import ReactDOM from 'react-dom';



function Usuario(props) {

  return (

    <div>

      <p>Nome: {props.nome} {props.sobrenome}</p>

      <p>CPF: {props.cpf}</p>

      <p>Contato: {props.telefone}</p>

      <p>Email: {props.email}</p>

    </div>

  );

}

function IMC(props) {

  const calcularIMC = (peso, altura) => {

    const imc = peso / (altura * altura);

    if (imc < 18.5) return 'Abaixo do Peso';

    if (imc < 24.9) return 'Peso Normal';

    if (imc < 29.9) return 'Sobrepeso';

    return 'Obesidade';

  };

  const imc = calcularIMC(props.peso, props.altura);

  return (

    <div>

      <p>Peso: {props.peso} kg</p>

      <p>Altura: {props.altura} m</p>

      <p>IMC: {imc}</p>

    </div>

  );

}

function App() {

  const usuarios = [

    { nome: 'Chico', sobrenome: 'Xavier', cpf: '666.187.640-92', telefone: '(84) 97189-7623', email: 'daylos3671@uorak.com' },

    { nome: 'Dalvaci', sobrenome: 'Fernandes', cpf: '811.806.780-79', telefone: '(84) 99836-5262', email: 'gutier5171@uorak.com' },

    { nome: 'Léo', sobrenome: 'Lins', cpf: '823.035.360-30', telefone: '(84) 96782-1016', email: 'ludivina9090@uorak.com' },

    { nome: 'Roberto', sobrenome: 'Dinamite', cpf: '101.847.640-76', telefone: '(84) 96785-8433', email: 'rodel3243@uorak.com' },

    { nome: 'João', sobrenome: 'Alemão', cpf: '372.320.010-96', telefone: '(84) 99766-7087', email: 'mariyka8176@uorak.com' },

  ];

  return (

    <div>

      <h1>Lista de Usuários</h1>

      {usuarios.map((usuario, index) => (

        <Usuario key={index} {...usuario} />

      ))}

      <h1>Calculadora de IMC</h1>

      <IMC peso={66} altura={1.70} />

      <IMC peso={125} altura={1.90} />

    </div>

  );

}

ReactDOM.render(

  <App/>,

  document.getElementById('root')

);