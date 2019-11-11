import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExpenseManagerServiceService {

  constructor(private afStore: AngularFirestore) { }

  getexpenseCollection() {
    return this.afStore.collection('expense');
  }

  getExpenseBasedOnUser() {
    const collection = this.afStore.collection('expense');
    // const orderedList = collection
  }

  
}
