import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageExpenseComponent } from './components/manage-expense/manage-expense.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'todo', component: TodoappComponent },
    { path: 'login-signup', component: LoginSignupComponent },
    { path: 'expense-manager', component: ManageExpenseComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
