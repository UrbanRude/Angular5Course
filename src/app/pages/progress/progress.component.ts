import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje_1: number = 70;
  porcentaje_2: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
