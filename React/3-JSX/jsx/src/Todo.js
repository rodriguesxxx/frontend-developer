import React from "react";

const Todo = () => {
    const tasks = ["Lavar carro", "Estudar react", "Almocar"];

    return (
        <React.Fragment>
            <h2>Tarefas do cliente</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default Todo;
