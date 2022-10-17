import styled from "styled-components";

export default function TodoItem() {
    return (
        <Layout>
            Item Test
        </Layout>
    )
}

const Layout = styled.div`
  width: 100%;
  
  border: 0.5px solid darkgray;
  border-radius: 4px;
  
  padding: 10px;

  &:hover {
    background-color: darkgray;
    cursor: pointer;
  }
`