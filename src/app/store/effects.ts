import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToDoMaticApiService } from '../services/todo.service';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ToDoMaticActionTypes } from './actions';
import { ToDoList } from '../models/todo-list.model';
import { ToDo } from '../models/todo.model';
import * as TodoMaticActions from './actions';

@Injectable()
export class ToDoMaticEffects {
    public getToDoList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ToDoMaticActionTypes.GET_TODO_LIST),
            exhaustMap(() =>
                this.toDoMaticApiService.getTodoList().pipe(
                    map((toDoList: ToDoList) =>
                        TodoMaticActions.getTodosListSuccess({ toDoList })
                    ),
                    catchError((error) =>
                        of(TodoMaticActions.toDoError({ error }))
                    )
                )
            )
        );
    });

    public addToDo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ToDoMaticActionTypes.ADD_TODO),
            exhaustMap((params: { toDo: ToDo }) =>
                this.toDoMaticApiService.addTodo(params.toDo).pipe(
                    map((toDo: ToDo) =>
                        TodoMaticActions.addTodoSuccess({ toDo })
                    ),
                    catchError((error) =>
                        of(TodoMaticActions.toDoError({ error }))
                    )
                )
            )
        );
    });

    public updateToDo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ToDoMaticActionTypes.UPDATE_TODO),
            exhaustMap((params: { toDo: ToDo }) =>
                this.toDoMaticApiService.updateTodo(params.toDo).pipe(
                    map((toDo: ToDo) =>
                        TodoMaticActions.updateTodoSuccess({ toDo })
                    ),
                    catchError((error) =>
                        of(TodoMaticActions.toDoError({ error }))
                    )
                )
            )
        );
    });

    public deleteToDo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ToDoMaticActionTypes.DELETE_TODO),
            exhaustMap((params: { toDo: ToDo }) =>
                this.toDoMaticApiService.deleteTodo(params.toDo).pipe(
                    map((toDo: ToDo) =>
                        TodoMaticActions.deleteTodoSuccess({ toDo })
                    ),
                    catchError((error) =>
                        of(TodoMaticActions.toDoError({ error }))
                    )
                )
            )
        );
    });

    constructor(
        private actions$: Actions,
        private toDoMaticApiService: ToDoMaticApiService
    ) {}
}
