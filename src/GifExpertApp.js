import React, { useState } from "react"
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [query, setQuery] = useState('')

    return(
        <div>
            
            <h2>GIF API IBIZA LOCO</h2>

            <AddCategory setQuery={setQuery} ></AddCategory>
            
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    
                    <GifGrid 
                        query={ query }
                        key = { query }
                    ></GifGrid>
                    
                }
            </ol>

        </div>
    )
}