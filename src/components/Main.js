import React, {useContext} from 'react'
import ConteoContext from './../context/ConteoContext'

export default function Main() {

    const ctx = useContext(ConteoContext)

    console.log(ctx)

    return (
        <div>
                Desde Main, el valor que está en el Sol es: {ctx.conteoFE}
        </div>
    )
}
