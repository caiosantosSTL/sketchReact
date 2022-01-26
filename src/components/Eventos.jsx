function Eventos() {

    function myEvent() {
        console.log('Ativooou');
    }
    return(
        <div>
            <p>Cliquemos aqui</p>
            <button className="btn btn-success" onClick={myEvent}>Ativar</button>
        </div>
    )
}

export default Eventos