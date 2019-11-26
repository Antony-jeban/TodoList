import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Component({
  selector: 'app-manage-expense',
  templateUrl: './manage-expense.component.html',
  styleUrls: ['./manage-expense.component.css']
})
export class ManageExpenseComponent implements OnInit {

  public myForm: FormGroup;
  amountManagerIteration: any[] = [];
  weekNumber=0;//not needed now
  jebanTotal=200;
  jorenceTotal=200;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      expense: this.fb.array([])
    });

  }

  get dailyExpenseArray() {
    return this.myForm.get('expense') as FormArray;
  }

  public addFormGroup() {
    const expenseGroup = this.fb.group({
      amountGivenBy: '',
      amountPayable: '',
      timeFrame: ''
    });

    this.dailyExpenseArray.push(expenseGroup);
  }

  public deleteGroup(index: number) {
    this.dailyExpenseArray.removeAt(index);
  }



  addAmountManager() {
    this.amountManagerIteration.push({ name: "" });
  }

  removeAmountManager() {
    this.amountManagerIteration.pop();
  }

}
