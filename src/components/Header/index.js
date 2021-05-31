import React, { useContext } from 'react'
import ConteoContext from './../../context/ConteoContext'

export default function Header() {

    const ctx = useContext(ConteoContext)

    return (
        <div>
            El valor que está en el Sol es: {ctx.conteoFE}
        </div>
    )
}
