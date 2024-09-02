import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AddTodoComponent } from './add-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [AddTodoComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatIconModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    exports: [AddTodoComponent],
})
export class AddTodoModule {}
