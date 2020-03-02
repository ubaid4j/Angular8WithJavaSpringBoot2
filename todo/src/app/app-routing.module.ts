import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodosComponent } from './components/todos/todos.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
    { path: '', component: TodoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'welcome/:name', component: WelcomeComponent},
    { path: 'todos/:id', component: TodoComponent, },
    { path: 'todos', component: TodosComponent, },
    { path: 'logout', component: LogoutComponent, },
    { path: '**', component: PageNotFoundComponent, }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
