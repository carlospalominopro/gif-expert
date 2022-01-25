// import React, { useEffect, useState } from "react"
import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ query }) => {

    const { data : images, loading } = useFetchGifs(query);

    return (
        <>
            <h3 key={ query }> {query} </h3>

            { loading && <p className="animate__animated animate__fadeIn">Cargando</p> }


            <div className="card-grid">

                {
                    images.map( img => {
                        return (
                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />
                        )
                    })
                }
            </div>
        </>
    )
}