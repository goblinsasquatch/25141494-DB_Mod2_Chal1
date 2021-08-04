import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  displaySum: string;
  expensesList: Expense[];

  constructor(
    private expensesService: ExpensesService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.displaySum = this.expensesService.sumClaims();
    console.log('Current array of Expenses', this.expensesService.expenses);
    this.expensesList = this.expensesService.expenses;
  }

  onHelp() {}
}
