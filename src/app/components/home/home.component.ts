import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collection: AngularFirestoreCollection;
  notes: Observable<any>;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.collection = this.afs.collection('expense');
    this.notes = this.collection.valueChanges();
    console.log(this.notes);
    // const id = this.collection.doc(data.payload.doc.id);
    // console.log('payloadId', id);

  }

}
