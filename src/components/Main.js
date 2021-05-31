import React, {useContext} from 'react'
import ConteoContext from './../context/ConteoContext'

export default function Main() {

    const ctx = useContext(ConteoContext)
    const { conteoFE, sumarNumero, restarNumero } = ctx


    const manejarClick = (event) => {
        event.preventDefault()
        
        const operacionAritmetica = event.target.id

        // Ejecutar función propia de context
        switch(operacionAritmetica){
            case "sumar":
                sumarNumero()
                break

            default:
                restarNumero()
        }

    }


    return (
        <div>
                <p>Componente Main: {conteoFE}</p>
                <button id="sumar" onClick={(e) => manejarClick(e)}>Sumar +1</button>
                <button id="restar" onClick={(e) => manejarClick(e)}>Restar -1</button>
        </div>
    )
}
