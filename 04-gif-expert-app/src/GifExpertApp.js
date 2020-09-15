import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     // //Agregamos nuevas categorias forma 1
    //     // //setCategoties( ['Boruto', ...categories]);
    //     // //Agregamos nuevas categorias forma 2
    //     // setCategoties( catego => [...catego, 'Dragon Ball']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => (
                         <GifGrid
                            key= { category }
                            category= { category }  
                         />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp;
