import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'list',
        loadChildren: () =>
            import('./modules/todo-list/todo-list.module').then(
                (m) => m.TodoListModule
            ),
    },
    {
        path: 'edit/:id',
        loadChildren: () =>
            import('./modules/edit-todo/edit-todo.module').then(
                (m) => m.EditTodoModule
            ),
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
