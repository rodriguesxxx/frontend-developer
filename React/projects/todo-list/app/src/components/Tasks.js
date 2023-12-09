import React from "react";

const date = new Date();

//dados mocados
let todoList = [
    {
        id: 1,
        title: "Estudar C++",
        hora_inicial: date.getHours(),
        hora_final: date.getHours() + 1,
    },
    {
        id: 2,
        title: "Codar TodoList",
        hora_inicial: date.getHours() + 1,
        hora_final: date.getHours() + 2,
    },
];

const Tasks = () => {
    return (
        <React.Fragment>
            <h1>Tarefas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Hora</th>
                        <th colSpan={3}>Gerenciar</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{`${task.hora_inicial}h - ${task.hora_final}h`}</td>
                            <td>
                                <a href='api/{id}/finish'>Concluir</a>
                            </td>
                            <td>
                                <a href='api/{id}/edit'>Editar</a>
                            </td>
                            <td>
                                <a href='api/{id}/delete'>Deletar</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Tasks;
