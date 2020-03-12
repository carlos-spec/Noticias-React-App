import React, { Component, Fragment} from 'react';
import './App.css';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state ={
    noticias : []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apikey=afa303fb5e6843c7ab44b9342787ac38`;

    const respuesta =  await fetch (url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }

  render(){
    return( <Fragment>
      <Header
      titulo= 'noticias react API'
      />
      <div className='container white contenedor-noticias'>
        <Formulario
        consultarNoticias={this.consultarNoticias}
        />
        <ListaNoticias
          noticias = {this.state.noticias}
        />
      </div>
    </Fragment>);
  }
}

export default App;
