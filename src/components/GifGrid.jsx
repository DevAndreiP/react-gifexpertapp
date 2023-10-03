import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)
  console.log(isLoading)
  // eslint-disable-next-line react/prop-types
  const nameCategorie = `${category.charAt(0).toUpperCase()}${category.slice(1)}`
  return (
    <>

      <h2 className='category-title white'>{images.length} resultados para: <span className="span-result">{nameCategorie}</span></h2>


      <div className='card-grid'>

        {

          images.map(img => {

            return <GifItem
              key={img.id}
              images={img.title}
              url={img.url}
              title={img.title}
            />
          })
        }
      </div>


    </>

  )
}
