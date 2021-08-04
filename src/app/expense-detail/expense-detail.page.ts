import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit {
  expenseId: string;
  displayedExpense: Expense;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private expenseService: ExpensesService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.expenseId = paramMap.get('id');
      this.displayedExpense = this.expenseService.getExpense(this.expenseId);
    });
  }

  onDelete() {
    this.expenseService.removeExpense(this.expenseId);
    this.navCtrl.navigateBack('/home');
  }
}
