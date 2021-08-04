import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new-expense',
    loadChildren: () =>
      import('./new-expense/new-expense.module').then(
        (m) => m.NewExpensePageModule
      ),
  },
  {
    path: 'expense-detail/:id',
    loadChildren: () =>
      import('./expense-detail/expense-detail.module').then(
        (m) => m.ExpenseDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
