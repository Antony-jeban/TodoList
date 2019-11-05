import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-todoapp',
    templateUrl: './todoapp.component.html',
    styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit{

    constructor(
        private afStore: AngularFirestore,
    ) {

    }

    item: string;
    list: any = [];
    public buttonName = 'Add';

    private idNumber = 0;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.list = this.getToDoCollection().valueChanges();
    }

    addData() {
        console.log(this.item)
        if (this.buttonName === 'Add') {
            this.list.push(this.item);
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

    deleteData(n) {
        console.log(this.item)
        this.list.splice(n, 1);
    }


    showUpdatedItem(newItem, n) {
        this.item = newItem;
        this.idNumber = n;
    }

    private getToDoCollection() {
        return this.afStore.collection('todo-app');
    }

}
