import { createAction, props } from '@ngrx/store';
import { ToDo } from '../models/todo.model';
import { ToDoList } from '../models/todo-list.model';

export enum ToDoMaticActionTypes {
    GET_TODO_LIST = '[ToDo Matic] Get ToDo List',
    GET_TODO_LIST_SUCCESS = '[ToDo Matic] Get ToDo List Success',
    ADD_TODO = '[ToDo Matic] Add ToDo',
    ADD_TODO_SUCCESS = '[ToDo Matic] Add ToDo Success',
    UPDATE_TODO = '[ToDo Matic] Update ToDo',
    UPDATE_TODO_SUCCESS = '[ToDo Matic] Update ToDo Success',
    DELETE_TODO = '[ToDo Matic] Delete ToDo',
    DELETE_TODO_SUCCESS = '[ToDo Matic] Delete ToDo Success',
    TODO_ERROR = '[ToDo App] Error',
}

export const getTodosList = createAction(ToDoMaticActionTypes.GET_TODO_LIST);
export const getTodosListSuccess = createAction(
    ToDoMaticActionTypes.GET_TODO_LIST_SUCCESS,
    props<{ toDoList: ToDoList }>()
);
export const addTodo = createAction(
    ToDoMaticActionTypes.ADD_TODO,
    props<{ toDo: ToDo }>()
);
export const addTodoSuccess = createAction(
    ToDoMaticActionTypes.ADD_TODO_SUCCESS,
    props<{ toDo: ToDo }>()
);
export const updateTodo = createAction(
    ToDoMaticActionTypes.UPDATE_TODO,
    props<{ toDo: ToDo }>()
);
export const updateTodoSuccess = createAction(
    ToDoMaticActionTypes.UPDATE_TODO_SUCCESS,
    props<{ toDo: ToDo }>()
);
export const deleteTodo = createAction(
    ToDoMaticActionTypes.DELETE_TODO,
    props<{ toDo: ToDo }>()
);
export const deleteTodoSuccess = createAction(
    ToDoMaticActionTypes.DELETE_TODO_SUCCESS,
    props<{ toDo: ToDo }>()
);
export const toDoError = createAction(
    ToDoMaticActionTypes.TODO_ERROR,
    props<{ error: any }>()
);
