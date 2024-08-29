import { createReducer, on } from '@ngrx/store';
import { initialToDoMaticState } from './state';
import * as TodoMaticActions from './actions';
import { ToDoList } from '../models/todo-list.model';
import { ToDo } from '../models/todo.model';

export const ToDoMaticReducer = createReducer(
    initialToDoMaticState,
    on(TodoMaticActions.getTodosList, (state) => ({ ...state, loading: true })),
    on(TodoMaticActions.getTodosListSuccess, (state, { toDoList }) => ({
        ...state,
        toDoList,
        loading: false,
    })),
    on(TodoMaticActions.addTodo, (state) => ({ ...state, loading: true })),
    on(TodoMaticActions.addTodoSuccess, (state, { toDo }) => ({
        ...state,
        toDoList: appendToDoToList(state.toDoList, toDo),
        loading: false,
    })),
    on(TodoMaticActions.updateTodo, (state) => ({ ...state, loading: true })),
    on(TodoMaticActions.updateTodoSuccess, (state, { toDo }) => ({
        ...state,
        toDoList: updateToDoInList(state.toDoList, toDo),
        loading: false,
    })),
    on(TodoMaticActions.toDoError, (state) => ({ ...state, loading: false }))
);

const appendToDoToList = (toDoList: ToDoList, toDo: ToDo): ToDoList => ({
    ...toDoList,
    todos: [toDo, ...toDoList.todos],
});

const updateToDoInList = (toDoList: ToDoList, toDo: ToDo): ToDoList => {
    const updatedToDoIndex = toDoList.todos.findIndex(
        (item) => item.id === toDo.id
    );
    const newToDoList = toDoList.todos
        .filter((item) => item.id !== toDo.id)
        .splice(updatedToDoIndex, 0, toDo);

    return {
        ...toDoList,
        todos: newToDoList,
    };
};
