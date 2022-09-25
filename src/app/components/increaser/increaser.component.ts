import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
})
export class IncreaserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('increaser') progress: number = 50;
  @Output('increaser') increasedValue: EventEmitter<number> = new EventEmitter();

  @Input() btnClass: string = 'btn-primary';

  updateProgress(value: number) {
    if(this.progress >= 100 && value >= 0) {
      this.increasedValue.emit(100);
      return this.progress = 100;
    };
    if(this.progress <= 0 && value < 0) {
      this.increasedValue.emit(0);
      return this.progress = 0;
    };
    this.increasedValue.emit( this.progress );
    this.progress = this.progress + value; 
  }

  onChange( writenInput:number ){
    if (writenInput >= 100) {
      this.progress = 100
    }
    if (writenInput <= 0) {
      this.progress = 0
    } else {
      this.progress = writenInput;
    }
    this.increasedValue.emit( this.progress );
  }
}
