import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { AddTodoModule } from '../add-todo/add-todo.module';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [TodoListComponent],
    imports: [
        CommonModule,
        TodoListRoutingModule,
        AddTodoModule,
        FormsModule,
        SharedModule,
        MatChipsModule,
        ScrollingModule,
    ],
})
export class TodoListModule {}
