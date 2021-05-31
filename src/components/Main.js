import React, {useContext} from 'react'
import ConteoContext from './../context/ConteoContext'

export default function Main() {

    const ctx = useContext(ConteoContext)

    console.log(ctx)

    const handleClick = (e) => {
        e.preventDefault()
        ctx.sumarNumero()
    }
    
    return (
        <div>
                Desde Main, el valor que está en el Sol es: {ctx.conteoFE}

                <button onClick={handleClick}>Sumar Número</button>

        </div>
    )
}
