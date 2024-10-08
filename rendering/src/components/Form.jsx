import { useState } from "react";

export function Form({ onReviewSubmit }){
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');


    function handleSumbit(event){
        event.preventDefault();

        const author = inputValue;
        const text = textAreaValue;

        onReviewSubmit(author, text)
        
        // Clean the form
        setInputValue('');
        setTextAreaValue('');

    }

    return (
        <>  
        <hr/>
        <h2>Dodaj recezję</h2>
        <form onSubmit={handleSumbit}>
            <div>
                <div>
                    <label htmlFor="autor">Author</label>
                </div>
                <input 
                    type="text" 
                    name="author" 
                    id="autor" 
                    value={inputValue}
                    onChange={(e)=>{setInputValue(e.target.value)}}/>
            </div>
            <div>
                <div>
                    <label htmlFor="text">Tekst</label>
                </div>
                <textarea 
                    name="text" 
                    id="text"
                    value={textAreaValue}
                    onChange={(e)=>{setTextAreaValue(e.target.value)}}
                ></textarea>
            </div>
            <button 
                type="submit" 
                disabled={inputValue === '' || textAreaValue === ''}
            >
                Dodaj
            </button>
        </form>
        </>
    )
}