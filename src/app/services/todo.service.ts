import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoList } from '../models/todo-list.model';
import { ToDo } from '../models/todo.model';

@Injectable({
    providedIn: 'root',
})
export class ToDoMaticApiService {
    private todoServiceBaseUrl = 'https://dummyjson.com/todos';

    constructor(private httpClient: HttpClient) {}

    /**
     * Calls API to GET the list of all todos
     * @returns A ToDoList object
     */
    public getTodoList(): Observable<ToDoList> {
        return this.httpClient.get<ToDoList>(this.todoServiceBaseUrl);
    }

    /**
     * Calls API to POST a new todo
     * @param newTodo The new todo object to be added
     * @returns the newly created todo with an id set
     */
    public addTodo(newTodo: ToDo): Observable<ToDo> {
        return this.httpClient.post<ToDo>(
            `${this.todoServiceBaseUrl}/add`,
            newTodo
        );
    }

    /**
     * Calls API to PUT a todo update
     * @param updatedTodo The todo to update
     * @returns The todo with updated values
     */
    public updateTodo(updatedTodo: ToDo): Observable<ToDo> {
        return this.httpClient.put<ToDo>(
            `${this.todoServiceBaseUrl}/${updatedTodo.id}`,
            {
                completed: updatedTodo.completed,
            }
        );
    }

    /**
     * Calls API to PUT a todo update
     * @param updatedTodo The todo to update
     * @returns The todo with updated values
     */
    public deleteTodo(deletedToDo: ToDo): Observable<ToDo> {
        return this.httpClient.delete<ToDo>(
            `${this.todoServiceBaseUrl}/${deletedToDo.id}`
        );
    }
}
