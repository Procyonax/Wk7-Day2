import React, { useState } from 'react';

const FilmForm = ({onFilmSubmit}) => {

    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const AuthorToSubmit = author.trim()
        const TextToSubmit = text.trim()
        if(!AuthorToSubmit || !TextToSubmit){
            return
        }
        onFilmSubmit({
            author: AuthorToSubmit,
            text: TextToSubmit
        })
        setAuthor('')
        setText('')
    }

    return ( 
        <form className='Film-form' onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Your Film" value={author} onChange={handleAuthorChange}/>
            <input type="text" placeholder="Insert IMDB url here" value={text} onChange={handleTextChange}/>
            <input type='submit' value="post"/>
        </form>
     );
}
 
export default FilmForm;