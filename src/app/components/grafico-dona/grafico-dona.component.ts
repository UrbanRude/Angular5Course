import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() chartLabels:string[] = [];
  @Input() chartData:number[] = [];
  @Input() chartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
