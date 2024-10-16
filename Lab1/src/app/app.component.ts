import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Lab1';
  message : string = "String interpolation is useful";

  counter: number;
  intervalId: any;
  timeoutId: any;

  constructor() {
    this.counter = 0;
  }


  ngOnInit(): void {

    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
    this.timeoutId = setTimeout(() => {
      this.stopCounter();
    }, 20000);
  }
  stopCounter(): void {

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


}
