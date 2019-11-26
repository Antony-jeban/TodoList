import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore'
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { ExpenseManagerService } from 'src/app/service/expense-manager-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collection: DocumentData;
  notes: any;
  constructor(
    private expManagerService: ExpenseManagerService
  ) { }

  ngOnInit() {
    this.expManagerService.getexpenseCollection('expense').subscribe((res) => {
      this.collection = res;
    });
  }

  getDataFromFireStore() {
    this.notes = this.collection;
  }

}
