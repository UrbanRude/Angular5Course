import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare function  init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(){ }

  ngOnInit() {
    init_plugins();
  }

}
