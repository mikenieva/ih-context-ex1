export default (state, action) => {

    switch(action.type){
        case 'SUMAR_UNO':{
            return {
                ...state,
                conteo: action.payload
            }
        }
    }

}