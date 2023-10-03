import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    function onAddCategory(nameCategorie) {
        if (categories.includes(nameCategorie)) return
        setCategories([nameCategorie, ...categories])
    }
    function resetResult() {
        setCategories([])
        console.log(categories)
    }

    return (
        <>
            <h1 className='white'> Gif App</h1>
            <p className='white'>Consumiento la API de GIPHY - Be Animated utilizando el framework de React</p>
            <AddCategory
                // setCategories = { setCategories }
                onNewCategory={value => onAddCategory(value)}
            />
            <button className='btn' onClick={() => {
                resetResult()
            }}>Limpiar</button>
            {

                categories.map((value) =>
                    <GifGrid
                        key={value}
                        category={value}
                    />
                )
            }

            {/*gifItem*/}
        </>
    )

}