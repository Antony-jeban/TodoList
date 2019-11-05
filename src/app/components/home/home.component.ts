import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { ExpenseManagerServiceService } from 'src/app/service/expense-manager-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collection: AngularFirestoreCollection;
  notes: Observable<any>;
  constructor(
    private expManagerService: ExpenseManagerServiceService
  ) { }

  ngOnInit() { 
  }
  
  getDataFromFireStore() {
    this.collection = this.expManagerService.getexpenseCollection();
    this.notes = this.collection.valueChanges();
    // const id = this.collection.doc(this.notes.payload.doc.id);
    // console.log('payloadId', id);
    console.log(this.notes);
    
  }

}
