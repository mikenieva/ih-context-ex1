// EL CONTEO STATE ES EL SOL 

// 1. IMPORTACIONES
import React, { useReducer } from 'react'
import ConteoContext from './ConteoContext'
import ConteoReducer from './ConteoReducer'

// 2. FUNCIÓN PRINCIPAL
const ConteoState = (props) => {

    // A. INITIAL STATE
    const initialState = {
        conteo: 0,
        usuario: "Mike"
    }

    // B. CONFIGURACIÓN DE REDUCER
    const [state, dispatch] = useReducer(ConteoReducer, initialState)

    // C. FUNCIONES PROPIAS
    const sumarNumero = () => {
        const nuevoNumero = state.conteo + 1

        dispatch({
            type: "SUMAR_UNO",
            payload: nuevoNumero
        })
    }

    const restarNumero = () => {
        const nuevoNumero = state.conteo - 1

        dispatch({
            type: "RESTAR_UNO",
            payload: nuevoNumero
        })

    }

    // D. RETORNO

    return (
        <ConteoContext.Provider
            value={
                {
                    conteoFE: state.conteo,
                    usuarioFE: state.usuario,
                    sumarNumero,
                    restarNumero
                }
            }
        >
            {props.children}
        </ConteoContext.Provider>
    )


}


// 3. EXPORTACIÓN
export default ConteoState