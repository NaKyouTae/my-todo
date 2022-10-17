import styled from "styled-components";
import TodoCreator from "../todo/TodoCreator";
import TodoList from "../todo/TodoList";
import TodoDetail from "../todo/TodoDetail";

interface TodoListProps {
    list: Array<TodoItemProps>
}

interface TodoItemProps {
    title: string,
    detail: string
}

export default function MyTodoBody() {
    return (
        <Layout>
            <div>
                <TodoList />
            </div>
            <div>
                <TodoDetail />
            </div>
        </Layout>
    )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  width: 100%;
`