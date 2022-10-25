import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoCreator from "./TodoCreator";
import {useState} from "react";
import {TodoItemInterface, TodoListInterface} from "../../model/interfaces";

const initTodoData = {
    list: [
        {
            title: 'test title',
            detail: 'test detail'
        },
        {
            title: 'test title',
            detail: 'test detail'
        },
        {
            title: 'test title',
            detail: 'test detail'
        },
    ]
}

export default function TodoList() {
    const todoData = useState<TodoListInterface>(initTodoData)

    return (
        <Layout>
            <TodoCreator />
            <RenderTodoItem list={todoData[0].list} />
        </Layout>
    )
}

function RenderTodoItem(props: TodoListInterface) {
    const { list } = props
    return (
        list.map((item: TodoItemInterface, idx: number) => (
            <TodoItem key={idx} />
        ))
    )
}

const Layout = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(40px, 40px));
    row-gap: 12px;
    height: calc(100vh - 40px);
    overflow: auto;
`