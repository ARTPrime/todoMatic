import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { selectToDoMaticLoading } from '../../store/selectors';

@Component({
    selector: 'todo-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent implements OnInit {
    @Input() buttonText = 'Add';
    @Input() showCompletedCheckbox = false;
    @Input() showBackButton = false;
    @Input() toDo: ToDo = {
        completed: false,
        todo: null,
        userId: 3,
    };
    @Output() actionButtonClick = new EventEmitter<ToDo>();
    @Output() backButtonClick = new EventEmitter();
    public form = new FormGroup({} as any);
    public loading$ = this.store.select(selectToDoMaticLoading());

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {}

    public ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [this.toDo.id],
            userId: [this.toDo.userId],
            completed: [this.toDo.completed],
            todo: [this.toDo.todo, Validators.required],
        });
    }

    public onActionButtonClick(toDo: ToDo) {
        this.actionButtonClick.emit(toDo);
    }
}
