import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ManageExpenseComponent } from './components/manage-expense/manage-expense.component';


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '/login', component: LoginComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/expense-manager', component: ManageExpenseComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
