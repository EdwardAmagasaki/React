import addDiretorio from './Formas/addDiretorio';
import addFormas from './Formas/addFormas';
import listaDiretorios from './Formas/listaDiretorios';  
import listaFormasDetalhes from './Formas/listaFormaDetalhes';
import listaFormas from './Formas/listaFormas';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

import './App.css';

function App() {
  return (
    <Router>  
    <div className="">  
      <nav className="navbar navbar-expand-lg navheader">  
        <div className="collapse navbar-collapse container" >  
          <ul className="navbar-nav mr-auto">  
            <li className="nav-item">  
              <Link to={'/addDiretorio'} className="nav-link">Criar Diretório</Link>  
            </li>  
            <li className="nav-item">  
              <Link to={'/addFormas'} className="nav-link">Criar Forma</Link>  
            </li> 
            <li className="nav-item">  
              <Link to={'/listaDiretorios'} className="nav-link">Lista de Diretórios</Link>  
            </li> 
            <li className="nav-item">  
              <Link to={'/listaFormas'} className="nav-link">Lista de Formas</Link>  
            </li>   
            <li className="nav-item">  
              <Link to={'/listaFormasDetalhes'} className="nav-link">Lista de Formas com Detalhes</Link>  
            </li> 
          </ul>  
        </div>  
      </nav> <br />  
      <Switch>  

        <Route path='/addDiretorio' component={addDiretorio} />  
        <Route exact path='/addFormas' component={addFormas} /> 
        <Route exact path='/listaDiretorios' component={listaDiretorios} />
        <Route exact path='/listaFormasDetalhes' component={listaFormasDetalhes} /> 
        <Route exact path='/listaFormas' component={listaFormas} />
      </Switch>  
    </div>  
  </Router>  
  );
}

export default App;
