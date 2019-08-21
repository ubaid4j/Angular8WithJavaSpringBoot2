import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodosComponent } from './components/todos/todos.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGaurdService } from './services/auth/route-gaurd.service';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGaurdService] },
    { path: 'todos', component: TodosComponent, canActivate: [RouteGaurdService] },
    { path: 'logout', component: LogoutComponent, canActivate: [RouteGaurdService] },
    { path: '**', component: PageNotFoundComponent, canActivate: [RouteGaurdService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
