import React,{useState} from 'react'
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {
    // const categorias = ['One punch','Samurai x','Dragon Ball'];
    const [categorias, setCategorias] = useState(['One punch','Samurai x','Dragon Ball']);
    // const handleAdd = ()=>{
    //     setCategorias([...categorias,'Naruto']);//al final
    //     // setCategorias(['Naruto',...categorias]);//al inicio
    // }

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias} />
    <p></p>
    <ol>
        { 
            categorias.map( categoria=>{
                return <li key={categoria}>{categoria}</li>
            })  
        }
    </ol>
    {/* <button onClick={handleAdd} >add</button> */}
    </>
  )
}
