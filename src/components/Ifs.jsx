import {useState} from 'react'

function Ifs(params) {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(setUserEmail);

    }

    return(
        <div>
            <p>Cadastro email</p>
            <form action="">
                <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar email</button>
                {userEmail}
            </form>
            
        </div>
    )
}

export default Ifs