import { ToDo } from './todo.model';

export interface ToDoList {
    todos: ToDo[];
    total: number;
    skip: number;
    limit: number;
}
