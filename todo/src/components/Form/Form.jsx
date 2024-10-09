
import { Button } from '../Button/Button'
import styles from './Form.module.css'
import {useState} from 'react';

export function Form ({onFormSubmit}){
    const [inputValue, setInputValue] = useState("")

    return(
        <form 
            onSubmit={(event)=>{
            event.preventDefault();
            onFormSubmit(inputValue)

        }}className={styles.form}>
            <input 
                value={inputValue} 
                type="text" 
                className={styles.input}
                onChange={(event)=>setInputValue(event.target.value)}
                />
            <Button >Dodaj</Button>
        </form>
    )
}