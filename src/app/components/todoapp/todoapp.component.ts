import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { first, get } from 'lodash-es';

@Component({
    selector: 'app-todoapp',
    templateUrl: './todoapp.component.html',
    styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

    constructor(
        private afStore: AngularFirestore,
    ) {

    }

    item: string;
    list: any = [];
    public buttonName = 'Add';

    private idNumber = 0;

    data: any;

    ngOnInit(): void {
        this.getToDoCollection().subscribe(res => {
            this.data = res;
        });
        
        this.list = [];
    }

    addData() {
        console.log(this.item)
        if (this.buttonName === 'Add') {
            this.list.push(this.item);
            this.addItemtoDB({ id: this.idNumber + 1, isCompleted: false, taskName: this.item });
        } else {
            this.list[this.idNumber] = this.item;
            this.buttonName = 'Add';
        }
        this.item = '';
    }

    updateData(n) {
        console.log(this.list[n]);

        this.showUpdatedItem(this.list[n], n);
        this.buttonName = 'Update';
        this.item = this.list[n];
    }

    deleteData(n, data) {
        // console.log(this.item)
        // this.list.splice(n, 1);
        this.deleteDataItem(data, n);
    }


    showUpdatedItem(newItem, n) {
        this.item = newItem;
        this.idNumber = n;
    }

    private getToDoCollection() {
        return this.afStore.collection('todo-app').snapshotChanges();
    }

    private addItemtoDB(data: any) {
        this.afStore
            .collection('todo-app')
            .add(data)
    }

    private updateDataItem(data) {
        return this.afStore
            .collection("todo-app")
            .doc(data.payload.doc.id)
            .set({ completed: true }, { merge: true });
    }

    private deleteDataItem(data, index) {
        const docCollection = this.afStore.collection('todo-app', (ref => ref.where('id', '==', index).where('taskName', '==', data.taskName)));
        docCollection.snapshotChanges().subscribe(res => {
            const id = get(first(res), 'payload.doc.id', '')
            if (id) {
                this.afStore.doc(`todo-app/${id}`).delete();
            }
            console.log(first(res));
        })

        return true
    }

}
