import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { AddTodoModule } from '../add-todo/add-todo.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    declarations: [TodoListComponent],
    imports: [
        CommonModule,
        TodoListRoutingModule,
        AddTodoModule,
        FormsModule,
        MatChipsModule,
        MatCheckboxModule,
        MatButtonModule,
        ScrollingModule,
    ],
})
export class TodoListModule {}
