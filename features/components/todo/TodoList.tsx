import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoCreator from "./TodoCreator";
import {useEffect, useState} from "react";

export default function TodoList() {
        const todoList = useState<TodoList>([
                {
                        title: 'test',
                        detail: 'detail'
                }
        ])

        useEffect(() => {

        }, [])
    return (
        <Layout>
            <TodoCreator />
                {
                        todoList.map((item: any) => (
                            <TodoItem title={item.title} detail={item.detail}/>
                        ))
                }
        </Layout>
    )
}

const Layout = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 12px;
    height: calc(100vh - 40px);
    overflow: auto;
`