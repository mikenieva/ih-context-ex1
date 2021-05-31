import React, { useContext } from 'react'
import ConteoContext from './../../context/ConteoContext'

export default function Header() {

    const ctx = useContext(ConteoContext)

    return (
        <div>
            Componente header: {ctx.conteoFE}
        </div>
    )
}
