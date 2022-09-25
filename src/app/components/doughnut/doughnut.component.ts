import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData } from 'chart.js';

import * as _ from "lodash";

import { MESSAGES } from '../../shared/global-messages';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
})
export class DoughnutComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() title: string = _.get(MESSAGES, 'DAILY_SALES.TODAY_SALES');
  @Input('label') doughnutChartLabels: string[] = ['data1', 'data2', 'data3'];
  @Input() data: number[] = [350, 450, 100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: ['#9E120E', '#FF5800', '#FFB414'],
      },
    ],
  };

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          {
            data: this.data
          }
        ],
    };
  }
  
}