import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
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
  capturedImage: string;
  capturedImageTimestamp: Date;
  // capturedImage: string =
  //   'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg';
  // capturedImageTimestamp: Date = new Date();
  constructor(
    private expensesService: ExpensesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  onScanReceipt() {
    console.log('scan receipt clicked');
    if (!Capacitor.isPluginAvailable('Camera')) {
      console.log('Capacitor Camera plugin not available');
      return;
    }
    Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      width: 600,
      resultType: CameraResultType.DataUrl,
    }).then((image) => {
      this.capturedImage = image.dataUrl;
      this.capturedImageTimestamp = new Date();
    });
  }

  onSubmit() {
    const newExp: Expense = {
      id: Math.random().toString(),
      type: this.form.value.type,
      place: this.form.value.place,
      amount: this.form.value.amount,
      imageUrl: this.capturedImage,
      timestamp: this.capturedImageTimestamp,
    };
    console.log(newExp);
    this.expensesService.addExpense(newExp);
    this.form.reset();
    this.navCtrl.navigateBack('home');
  }
}
