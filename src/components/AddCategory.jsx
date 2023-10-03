import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmitEvent = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return

        //setCategories( categories => [...categories, inputValue])
        onNewCategory(inputValue)
        setInputValue('')
    }
    return (
        <>
            <form onSubmit={(e) => onSubmitEvent(e)}>
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={(e) => { onInputChange(e) }}
                />
            </form>
        </>

    )
}