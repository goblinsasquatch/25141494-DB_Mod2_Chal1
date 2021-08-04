import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';
import { InstructionsComponent } from './instructions/instructions.component';

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
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.displaySum = this.expensesService.sumClaims();
    console.log('Current array of Expenses', this.expensesService.expenses);
    if (this.expensesService.expenses) {
      this.expensesList = this.expensesService.expenses;
    }
  }

  onHelp() {
    this.modalCtrl
      .create({ component: InstructionsComponent })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
