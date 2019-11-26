import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExpenseManagerService {

  constructor(private afStore: AngularFirestore) { }

  getexpenseCollection(collectionName: string) {
    return this.afStore.collection(collectionName).snapshotChanges();
  }

  getExpenseBasedOnUser() {
    const collection = this.afStore.collection('expense');
    // const orderedList = collection
  }

  addItemtoDB(data: any, collectionName: string) {
    this.afStore
      .collection(collectionName)
      .add(data)
  }

  updateDataItem(data, item, collectionName: string) {
    return this.afStore
      .collection("todo-app")
      .doc(data.payload.doc.id)
      .set({ isCompleted: item.isCompleted, taskName: item.name }, { merge: true });
  }

  deleteDataItem(data, index, collectionName: string) {
    return this.afStore
      .collection("todo-app")
      .doc(data.payload.doc.id)
      .delete();
  }


}
