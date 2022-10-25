import styled from "styled-components";
import {TodoItemInterface} from "../../model/interfaces";
import {useState} from "react";

export default function TodoDetail() {
    const [item, setItem] = useState<TodoItemInterface>({
        title: "",
        detail: ""
    })

    return (
        <Layout>
            <h2>{ item.title }</h2>
            <p>{ item.detail }</p>
        </Layout>
    )
}

const Layout = styled.div`
  width: 100%;
  border: 0.5px solid darkgray;
  border-radius: 4px;
  height: calc(100vh - 40px);
  padding: 0px 12px;
`