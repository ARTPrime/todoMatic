import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { AppState } from '../../store/state';
import { selectToDo } from '../../store/selectors';

@Component({
    selector: 'todo-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrl: './edit-todo.component.scss',
})
export class EditTodoComponent implements OnInit {
    public selectedToDo: ToDo = {
        completed: false,
        todo: null,
        userId: 3,
    };
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<AppState>
    ) {}

    public ngOnInit(): void {
        this.route.paramMap
            .pipe(
                take(1),
                switchMap((params) =>
                    this.store.select(selectToDo(Number(params.get('id'))))
                )
            )
            .subscribe((toDo) => {
                if (toDo) {
                    this.selectedToDo = toDo;
                } else {
                    this.onBackToList();
                }
            });
    }

    public onUpdateToDo(toDo: ToDo) {
        this.store.dispatch(actions.updateTodo({ toDo }));
    }

    public onBackToList() {
        this.router.navigate(['/list']);
    }
}
