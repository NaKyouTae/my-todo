import styled from "styled-components";
import TodoList from "../todo/TodoList";
import TodoDetail from "../todo/TodoDetail";

export default function MyTodoBody() {
    return (
        <Layout>
            <TodoList />
            <TodoDetail />
        </Layout>
    )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  width: 100%;
`