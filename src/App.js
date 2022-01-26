import logo from './logo.svg';
import './App.css';
import MyInit from './components/MyInit'
import MyPropsx from './components/MyProps'
import PersonProps from './components/PersonProps';
import Eventos from './components/Eventos';
import Form from './components/Form';

function App() {

  function soma(a, b) {
    return a + b
  }

  function seuNome() {
    var valux = document.getElementById('txt').value
    console.log(valux);
    return valux
  }

  const valor = "** OK **"

  const urlPic = 'https://via.placeholder.com/150'

  return ( // return un html de react
    <div className="App">
      <div className='container'>
        <div className='row mt-5'>
          <div className='col'>
            <h1>Oi oi</h1>
            <button className='btn btn-success'>{valor}</button>
            <p>Somando aqui 2+2 eh {/*2+2*/} {soma(2, 2)}</p>
            <img src={urlPic} alt="Nossa Pic" />
          </div>
        </div>
        <MyInit />

        <MyPropsx nome="Jonas" />
        <PersonProps nome="Luca" idade="24" email="luca@gg.com" />

        <Eventos />
        <Form/>


      </div>

    </div>
  );
}

export default App;
