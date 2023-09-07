import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: number = 0;
  incrementValue: number = 1;

  increment() {
    this.counter+=Number(this.incrementValue);
  }

  decrement() {
    if (this.counter-this.incrementValue > 0) this.counter -= Number(this.incrementValue);
  }
}
