
function For(params) {
    const itens = ['Ax', 'Bx', 'Sx', 'Df']
    const golist = itens.map((item, index) =>
        <li key={index}>{item + '-- '+ index}</li>
    )

    return (
        <div className="my-5">
            <p>Nossa lista abaixo: </p>
            {golist}
        </div>
    )
}

export default For;