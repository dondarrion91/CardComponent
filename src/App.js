import React,{Fragment,useState} from 'react';

// components
import Card from './components/Card';

function App() {

  // state de la tarjeta 
  const [contenido, setcontenido] = useState({
    title: 'Titulo',
    body: 'Cuerpo de la tarjeta'
  });

  // funcion onChange title
  const onChangeTitle = e => {
    setcontenido({
      ...contenido,
      title: e.target.value
    });    
  }


  // funcion onChange title
  const onChangeBody = e => {
    setcontenido({
      ...contenido,
      body: e.target.value
    });    
  }

  return (
    <Fragment>  
      <div className="container text-white mt-5">
        <form className="col-12 col-lg-6 mx-auto">
          <h4>Ingrese un titulo y un cuerpo para la tarjeta</h4>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input 
              type="text" 
              className="form-control" 
              id="title" 
              aria-describedby="title" 
              placeholder="title"
              onChange={onChangeTitle}
            />          
          </div>
          <div className="form-group">
            <label htmlFor="body">body</label>
            <input 
              type="text" 
              className="form-control" 
              id="body" 
              placeholder="body"   
              onChange={onChangeBody}         
            />
          </div>              
        </form>    

        <h4 className="text-center">Componente Card</h4>
         
         
         
         {/*Componente Card  */}        
        <Card
          contenido={contenido}
        />


      </div>             
    </Fragment>
  );
}

export default App;
