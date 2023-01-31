import './App.css';

function App() {
// let nombre = 'ramon'
// let frutas=[uva, pera, manzana]
let datos = {
  nombre:'raul',
  apellido:'lopez',
  edad: 42
}


const evento=()=>{
  console.log('hola mundo')
}


const {apellido,edad}=datos

  return (
    <div className="App">
      
      <h1>el apellido es {apellido} y la edad es {edad}</h1>
      <button onClick={evento} >hace click!</button>
    </div>
  );
}

export default App;
