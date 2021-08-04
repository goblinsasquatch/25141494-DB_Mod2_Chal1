import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  sum: string;
  expenses: Expense[] = [
    {
      id: 'randId1',
      type: 'Food',
      place: 'Burger King',
      amount: 120.99,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg',
      timestamp: new Date(),
    },
    {
      id: 'randId2',
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
  }

  sumClaims() {
    this.sum = this.expenses
      .reduce((accum, curr) => accum + curr.amount, 0)
      .toFixed(2);
    return this.sum;
  }

  getExpense(expId: string) {
    const tempExp = this.expenses.find((expense) => {
      return expense.id === expId;
    });
    console.log(tempExp);
    return tempExp;
  }

  removeExpense(expId: string) {
    this.expenses = this.expenses.filter((exp) => exp.id != expId);
  }
}
