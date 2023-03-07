import { useState, useEffect } from "react";
import Header from "./comp/Header";
import { Footer } from "./comp/Footer";
import { Todos } from "./comp/Todos";
import { AddTodo } from "./comp/AddTodo";

function App() {
    let initTodo;
    if (localStorage.getItem('todos') === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem('todos'))
    }

    const addtodo = (t, d) => {
        let sno;
        if (todos.length === 0) {
            sno = 1;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: t,
            desc: d
        }
        settodos([...todos, myTodo]);
        console.log(myTodo);

    }

    const onDelete = (todo) => {
        console.log("Deleted", todo);
        settodos(todos.filter((e) => {
            return e !== todo;
        }))
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    let [todos, settodos] = useState(initTodo)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    return (
        <>
            <Header title="TODO LIST" IsIdentical={true} />
            <AddTodo addtodo={addtodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </>
    )
}
export default App;