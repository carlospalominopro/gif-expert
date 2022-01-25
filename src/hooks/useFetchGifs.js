import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (query)=>{

    const [state, setstate] = useState({
        data : [],
        loading : true
    })

    useEffect( () => {
        getGifs(query).then(
            imgs => {
                setTimeout(() => {
                    setstate({
                        data : imgs,
                        loading : false
                    });
                }, 1000);
            }
        )
    }, [ query ])

    return state;

}