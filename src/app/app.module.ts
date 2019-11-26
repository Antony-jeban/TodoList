import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageExpenseComponent } from './components/manage-expense/manage-expense.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmountManagerCoreComponent } from './components/amount-manager-core/amount-manager-core.component';

@NgModule({
    declarations: [
        AppComponent,
        ManageExpenseComponent,
        TodoappComponent,
        PageNotFoundComponent,
        LoginSignupComponent,
        HomeComponent,
        AmountManagerCoreComponent
    ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [AngularFirestore, AngularFireAuth],
    bootstrap: [AppComponent]
})
export class AppModule { }
