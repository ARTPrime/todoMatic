import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FOCUS_MONITOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';

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

    constructor(private formBuilder: FormBuilder) {}

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
        if (!this.showBackButton) {
            this.toDo = {
                completed: false,
                todo: null,
                userId: 3,
            };
        }
    }
}
