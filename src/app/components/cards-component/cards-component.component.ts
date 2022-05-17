import { Component, OnInit } from '@angular/core';
import { PData,ProductData } from 'src/app/models/product-data';
@Component({
  selector: 'cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})
export class CardsComponentComponent implements OnInit {

  constructor() { }
  data = PData;
  ngOnInit(): void {
  }

}
