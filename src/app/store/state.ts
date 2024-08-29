import { ToDoList } from '../models/todo-list.model';

export interface AppState {
    toDoMatic: ToDoMaticListState;
}

export interface ToDoMaticListState {
    toDoList: ToDoList;
    loading: boolean;
}

export const initialToDoMaticState: ToDoMaticListState = {
    toDoList: {
        todos: [],
        total: 0,
        skip: 0,
        limit: 30,
    },
    loading: false,
};
