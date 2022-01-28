import { useState } from "react/cjs/react.development";

function Condicao(params) {
    const [age, setAge] = useState(21)
    var idade = 21

    function upN() {
        //setAge((age)=> age + 1)
        setAge(
            function (age) {
                age += 1
                return age
            }
        )
    }
    function downN() {
        setAge((age)=> age - 1)
    }
    // ********************************************
    const menor ={backgroundColor: '#ff9f9f'}
    const maior = {backgroundColor: '#9fffa3'}
    // *******
    function subirIdade() {

        idade = idade + 1;
        console.log("subir", idade);
        alert('valor novo '+ idade)

    }

    function descerIdade(params) {
        idade -= 1;
        console.log("descer", idade);

    }

    return (
        <div>
            <div>
                <h3>A idade da pessoa eh {age}</h3>

                <button className="btn btn-primary me-2" onClick={upN}>Subir idade</button>
                <button className="btn btn-danger me-2" onClick={downN}>Subir idade</button>
            </div>
            {age < 18 ? 
            
            
            <div style={menor} className="p-4"> 
                Menor
            </div>

            :

            <div style={maior} className="p-4">
                Eh maior
            </div>
        
        }

        </div>
    )
}

export default Condicao