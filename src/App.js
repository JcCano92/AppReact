import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navegacion from './componentes/navegacion';

import {todos} from './tareas';

console.log(todos);

class App extends Component {

  constructor(){
    super();
    this.state ={
      todos:todos
    }

  }

  render() {

    const todos = this.state.todos.map((todo, i)=>{
      return(
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-header">
                <h3>{todo.titulo}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {todo.prioridad}
                </span>
              </div>
              <div className="card-body">
                <p>{todo.descripcion}</p>
                <p>{todo.responsable}</p>
              </div>
            </div>
          </div>
      )
    })

    return (
      <div className="App">

        {/* Se inserto la navegacion */}
        <Navegacion/>
        <hr/>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
