import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout-basic',
  templateUrl: './layout-basic.component.html',
  styleUrls: ['./layout-basic.component.scss']
})
export class LayoutBasicComponent implements OnInit {
  logoImg: string;

  constructor() {
    this.logoImg = '../../../assets/img/full-logo.svg'
  }

  ngOnInit(): void {
  }

}
