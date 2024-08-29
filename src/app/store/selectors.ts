import { createSelector } from '@ngrx/store';
import { AppState, ToDoMaticListState } from './state';
import { ToDoList } from '../models/todo-list.model';

export const selectAppState = (state: AppState) => state.toDoMatic;

export const selectTodoMaticListState = createSelector(
    selectAppState,
    (state: ToDoMaticListState) => state
);

export const selectToDoList = createSelector(
    selectTodoMaticListState,
    (state: ToDoMaticListState) => state.toDoList
);

export const selectToDo = (id: number) =>
    createSelector(selectToDoList, (state: ToDoList) =>
        state.todos.find((toDo) => toDo.id === id)
    );

export const selectToDoMaticLoading = () =>
    createSelector(
        selectTodoMaticListState,
        (state: ToDoMaticListState) => state.loading
    );
