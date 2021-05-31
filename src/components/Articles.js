import React, {useContext} from 'react'
import BlogContext from './../context/BlogContext'

export default function Articles() {

    const ctx = useContext(BlogContext)
    console.log(ctx.articulosFE)
    return (
        <div>
            {
                ctx.articulosFE.map((e) => {
                    return(
                        <>
                            <p>{e.title}</p>
                            <p>{e.description}</p>
                        </>
                    )
                })

            }
        </div>
    )
}
