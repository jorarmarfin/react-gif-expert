import React,{useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['One punch']);


  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias} />
    <p></p>
    <ol>
        { 
            categorias.map( categoria=>(
              
              <GifGrid
                key={categoria}
                categoria = {categoria}
              /> 

            ))  
        }
    </ol>
    {/* <button onClick={handleAdd} >add</button> */}
    </>
  )
}
