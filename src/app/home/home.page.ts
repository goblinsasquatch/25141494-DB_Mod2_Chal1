import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  displaySum: number;
  expensesList = this.expensesService.expenses;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.expensesService.sumClaims();
    this.displaySum = this.expensesService.sum;
  }

  onHelp() {}

  onDelete(expenseId: string) {}
}
