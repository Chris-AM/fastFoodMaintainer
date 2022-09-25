import { Component } from '@angular/core';
@Component({
  selector: 'app-daily-sales',
  templateUrl: './daily-sales.component.html',
  styleUrls: ['./daily-sales.component.css'],
})
export class DailySalesComponent {

  public yesterdaySales = 'ventas de ayer';
  public monthSales = 'ventas del mes';
  public weekSales = 'ventas de la semana';

  public todayProductsSold = [
    'completos',
    'papas',
    'hamburguesas',
  ]

  public quantityTodayProductsSold = [500, 954, 52]

}
