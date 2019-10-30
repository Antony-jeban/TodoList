import { Component } from '@angular/core';

@Component({
    selector: 'app-todoapp',
    templateUrl: './todoapp.component.html',
    styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {
    item: string;
    list: Array<string> = [];
    public buttonName = 'Add';

    private idNumber = 0;

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

}
