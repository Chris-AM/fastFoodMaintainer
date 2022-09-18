import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
})
export class IncreaserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public progress: number = 50;

  get getProgrss() {
    return `${this.progress}%`
  }

  updateProgress(value: number) {
    if(this.progress >= 100 && value >= 0) this.progress = 100;
    if(this.progress <= 0 && value < 0) this.progress = 0;
    this.progress = this.progress + value;
  }

}
