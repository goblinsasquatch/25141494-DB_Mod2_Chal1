import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  sum: number;
  expenses: Expense[] = [
    {
      type: 'Food',
      place: 'Burger King',
      amount: 120.99,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg',
      timestamp: new Date(),
    },
    {
      type: 'Fuel',
      place: 'Esso',
      amount: 32.45,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg',
      timestamp: new Date(),
    },
  ];
  constructor() {}

  addExpense(newExpense: Expense) {
    this.expenses.push(newExpense);
    console.log(this.expenses);
  }

  sumClaims() {
    this.sum = this.expenses.reduce((accum, curr) => accum + curr.amount, 0);
  }

  removeExpense() {}
}
