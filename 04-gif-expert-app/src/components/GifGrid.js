import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    useEffect( () =>{
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=R2BBE49MUIHe5DYinPdGvkHj3x9kkmPO';
        const resp = await fetch (url);
        const { data } = await resp.json();
        const gift = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gift);
        setImages(gift);

    }

    return (
        <>
            <h3>{ category }</h3>   

                {
                    images.map( img => (
                        <GifGridItem
                            key = { img }
                            img = { img } 
                        />
                    ))
                }
        </>
    )
}
