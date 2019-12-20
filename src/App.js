import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './Components/Header';
import NuevaCita from './Components/NuevaCita';

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div className="container">
          <Header 
            titulo="Administrador pacientes veterinaria"
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita />
            </div>
          </div>
      </div>
     );
  }
}
 
export default App;