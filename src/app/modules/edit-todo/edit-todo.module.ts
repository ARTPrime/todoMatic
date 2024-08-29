import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTodoComponent } from './edit-todo.component';
import { EditTodoRoutingModule } from './edit-todo-routing.module';
import { AddTodoModule } from '../add-todo/add-todo.module';

@NgModule({
    declarations: [EditTodoComponent],
    imports: [CommonModule, EditTodoRoutingModule, AddTodoModule],
})
export class EditTodoModule {}
