function PersonProps({nome, idade, email}) {
    return(
        <div>
            <h1>Fulano tem o nome de {nome}</h1>
            <p>{nome} tem idade de {idade}</p>
            <p>E seu email eh {email}</p>
        </div>
    )
}

export default PersonProps