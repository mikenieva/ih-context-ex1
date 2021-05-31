// 1. EXPORTACIÓN DE UNA FUNCIÓN DE FLECHA DIRECTAMENTE
/**
 * EL ACTION EN ESTE CASO ES:
 * 
 * {
        type: "SUMAR_UNO",
        payload: nuevoNumero
    }
 * 
 */

export default (state, action) => {
    
    switch(action.type){
        case "SUMAR_UNO":
            return {
                ...state,
                conteo: action.payload
            }
        
        case "RESTAR_UNO":
            return {
                ...state,
                conteo: action.payload
            }

        default: 
            return state
            
    }
}