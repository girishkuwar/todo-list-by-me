import React, { useState } from 'react';
import './AddTodo.css'

export const AddTodo = (props) => {
    const [Title , setTitle] = useState('');
    const [desc , setdesc] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if(!Title || !desc){
            alert("Nothing to store");
        } else {
        props.addtodo(Title,desc);
        setTitle("");
        setdesc("");
        }
    }
    return (
        <>
        <h1>Add Todo Items</h1>
        <form action="" onSubmit={submit}>
        <input type="text" value={Title} onChange={(e) => {setTitle(e.target.value)}} placeholder='Title' />
        <input type="text" value={desc} onChange={(e) => {setdesc(e.target.value)}} placeholder='Description' />
        <input className='btn' type="submit" name="Add Todo" />
        </form>
        </>
    )
}