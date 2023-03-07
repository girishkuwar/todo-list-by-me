import { Component, useState } from "react";
import Header from "./comp/Header";
import { Footer } from "./comp/Footer";
import { Todos } from "./comp/Todos";

function App() {
    const onDelete = (todo) => {
        console.log("Deleted", todo);
        settodos(todos.filter((e) => {
            return e !== todo;
        }))
    }

    let [todos, settodos] = useState([
        {
            sno: 1,
            title: "Go to the market",
            desc: "You need to go market"
        },
        {
            sno: 2,
            title: "Go to the market",
            desc: "You need to go market"
        },
        {
            sno: 3,
            title: "Go to the market",
            desc: "You need to go market"
        }
    ])

    return (
        <>
            <Header title="TODO LIST" IsIdentical={true} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </>
    )
}
export default App;