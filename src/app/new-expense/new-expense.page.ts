import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
})
export class NewExpensePage implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(
    private expensesService: ExpensesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form.value);
    const newExp: Expense = {
      type: this.form.value.type,
      place: this.form.value.place,
      amount: this.form.value.amount,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg',
      timestamp: new Date(),
    };
    this.expensesService.addExpense(newExp);
    this.form.reset();
    this.navCtrl.navigateBack('home');
  }

  onScanReceipt() {}
}
