export default interface TodoList {
    list: Array<TodoItem>
}

export interface TodoItem {
    title: string,
    detail: string
}