import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { Subject, takeUntil } from 'rxjs';
import { selectToDoList } from '../../store/selectors';
import { AppState, initialToDoMaticState } from '../../store/state';
import { ToDo } from '../../models/todo.model';

@Component({
    selector: 'todo-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
    host: { class: 'flex-container--justified-center' },
})
export class TodoListComponent implements OnInit, OnDestroy {
    public unfilteredToDoList = initialToDoMaticState.toDoList;
    public toDoList = initialToDoMaticState.toDoList;
    private toDoList$ = this.store.select(selectToDoList);
    private destroy$ = new Subject();

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.toDoList$.pipe(takeUntil(this.destroy$)).subscribe((toDoList) => {
            this.toDoList = toDoList;
            this.unfilteredToDoList = toDoList;
        });
        this.store.dispatch(actions.getTodosList());
    }

    public selectedFilter = 'all';
    public toDoFilterOptions = [
        { id: 'all', label: 'All', selected: true },
        { id: 'active', label: 'Active', selected: false },
        { id: 'completed', label: 'Completed', selected: false },
    ];

    public onFilterSelectionChange(change: MatChipListboxChange) {
        // If user deselects all option we need to set it to all by default
        if (!change.value) {
            setTimeout(() => {
                this.selectedFilter = 'all';
            }, 1);
        }

        if (change.value === 'completed') {
            const newToDoList = this.unfilteredToDoList.todos.filter(
                (item) => item.completed
            );
            this.toDoList = {
                ...this.toDoList,
                todos: newToDoList,
            };
        }

        if (change.value === 'active') {
            const newToDoList = this.unfilteredToDoList.todos.filter(
                (item) => !item.completed
            );
            this.toDoList = {
                ...this.toDoList,
                todos: newToDoList,
            };
        }

        if (change.value === 'all') {
            this.toDoList = {
                ...this.toDoList,
                todos: this.unfilteredToDoList.todos,
            };
        }
    }

    public onAddToDo(toDo: ToDo) {
        this.store.dispatch(actions.addTodo({ toDo }));
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
    }
}
