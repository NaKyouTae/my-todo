import styled from "styled-components";
import LocalStorage from "../../utils/LocalStorage";

export default function TodoCreator() {
    const plusItem = () => {
        const todoList = JSON.stringify(LocalStorage.getItem('todo-list'))
    }

    return <Layout>+</Layout>
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 0.5px solid darkgray;
  border-radius: 4px;

  padding: 4px 0px;
  
  &:hover {
    background-color: darkgray;
    cursor: pointer;
  }
`