import React from "react"

export const GifGridItem = ( item ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ item.url } alt= { item.title } />
            <p>{ item.title }</p>
        </div>
    )
}