import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { first, get } from 'lodash-es';
import { ExpenseManagerService } from 'src/app/service/expense-manager-service.service';

@Component({
    selector: 'app-todoapp',
    templateUrl: './todoapp.component.html',
    styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

    constructor(
        private afStore: AngularFirestore,
        private expManager: ExpenseManagerService
    ) {

    }

    item: any
    public buttonName = 'Add';

    private idNumber = 0;

    private collectionName = 'todo-app'

    data: any;

    public tempData: any;

    ngOnInit(): void {
        this.expManager.getexpenseCollection(this.collectionName).subscribe(res => {
            this.data = res;
        });

    }

    addData() {
        if (this.buttonName === 'Add') {
            this.expManager.addItemtoDB({ id: this.idNumber + 1, isCompleted: false, taskName: this.item }, this.collectionName);
        } else {
            this.expManager.updateDataItem(this.tempData, { isCompleted: false, name: this.item }, this.collectionName);
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
        this.expManager.deleteDataItem(data, n, this.collectionName).then(res => {
            console.log('data deleted');
        }).catch(err => {
            console.log('caannot delete data' + err);
        });
    }


    showUpdatedItem(newItem, n) {
        this.item = newItem;
        this.idNumber = n;
    }

}
