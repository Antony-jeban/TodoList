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

    item: any
    list: any = [];
    public buttonName = 'Add';

    private idNumber = 0;

    data: any;

    public tempData: any;

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
            this.updateDataItem(this.tempData, { isCompleted: false, name: this.item });
            console.log(this.item);
            this.list[this.idNumber] = this.item;
            this.buttonName = 'Add';
        }
        this.item = '';
    }

    updateData(data, n) {
        this.tempData = data;
        this.item = data.payload.doc.data().taskName;
        this.buttonName = 'Update';
    }

    deleteData(n, data) {
        // console.log(this.item)
        // this.list.splice(n, 1);
        this.deleteDataItem(data, n).then(res => {
            console.log('data deleted');
        }).catch(err => {
            console.log('caannot delete data' + err);
        });
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

    private updateDataItem(data, item) {
        return this.afStore
            .collection("todo-app")
            .doc(data.payload.doc.id)
            .set({ isCompleted: item.isCompleted, taskName: item.name }, { merge: true });
    }

    private deleteDataItem(data, index) {
        return this.afStore
            .collection("todo-app")
            .doc(data.payload.doc.id)
            .delete();
    }

}
