import React, {useReducer} from 'react'

import BlogContext from './BlogContext'
import BlogReducer from './BlogReducer'


const BlogState = (props) => {

    const initialState = {

        articulos: [
            {
                title: "Cómo no dejé Ironhack en el módulo 3",
                description: "Todo empezó con la clase de Context"
            }
        ]
    }

    const [state, dispatch] = useReducer(BlogReducer,initialState)


    return(
        <BlogContext.Provider value={{
            articulosFE: state.articulos
        }}>
            {props.children}
        </BlogContext.Provider>

    )
}




export default BlogState
