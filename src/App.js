import logo from './logo.svg';
import './App.css';
import MyInit from './components/MyInit'

function App() {

  function soma(a,b){
    return a+b
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
            <p>Somando aqui 2+2 eh {/*2+2*/} {soma(2,2)}</p>
            <img src={urlPic} alt="Nossa Pic" />
          </div>
        </div>
        <MyInit/>
      </div>
      
    </div>
  );
}

export default App;
