import React, {useContext} from 'react'
import ConteoContext from './../context/ConteoContext'

export default function Main() {

    const ctx = useContext(ConteoContext)
    const { conteoFE, sumarNumero } = ctx


    const manejarClick = (event) => {
        event.preventDefault()
    
        // Ejecutar función propia de context
        sumarNumero()
    }


    return (
        <div>
                <p>Componente Main: {conteoFE}</p>
                <button onClick={(e) => manejarClick(e)}>Sumar +1</button>
        </div>
    )
}
