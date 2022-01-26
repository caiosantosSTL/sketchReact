import {useState} from 'react'

function Form() {

    function registrarUser(e) {
        e.preventDefault()
        console.log('Usario registrado');
        console.log(nom);
    }

    const [nom, setNom] = useState()
    const [passw, setPassw] = useState()
    return(
        <div className="d-flex flex-column">
            <h1>Infos form</h1>
            
            <form onSubmit={registrarUser}>
                <div className="d-flex flex-column">
                    <input type="text" placeholder="Nome" name="nom" onChange={(e)=> setNom(e.target.value)} />
                    <input type="password" name="passw" placeholder="Senha" onChange={(e)=> setPassw(e.target.value)} />
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form