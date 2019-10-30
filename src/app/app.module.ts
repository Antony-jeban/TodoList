import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngureFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageExpenseComponent } from './components/manage-expense/manage-expense.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        ManageExpenseComponent,
        TodoappComponent,
        PageNotFoundComponent,
        LoginSignupComponent,
        HomeComponent
    ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    providers: [AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule { }
