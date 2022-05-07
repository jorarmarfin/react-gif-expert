import React from 'react'

export const GifGrid = ({categoria}) => {

    const getGifts =async ()=>{
        const uri= 'https://api.giphy.com/v1/gifs/search?q=goku&api_key=uPzvOBlc2WBmiGHpt419ySXA669jrudA';
        const resp = await fetch(uri);
        const {data} = await resp.json();   
        const gifs = data.map(img =>{
            return {
                id : img.id,
                title: img.title,
                url:img.url

            }
        });
        console.log(data);     


    }

getGifts();

  return (
    <div>
        <h3>{categoria}</h3>
    </div>
  )
}
