import styled from "styled-components";
import MyTodoHeader from "./MyTodoHeader";
import MyTodoBody from "./MyTodoBody";
import MyTodoFooter from "./MyTodoFooter";

export default function MyTodoContainer() {
    return (
        <Layout>
            <MyTodoHeader />
            <MyTodoBody />
            <MyTodoFooter />
        </Layout>
    )
}

const Layout = styled.div`
  max-width: 800px;
  margin: 20px auto;
`