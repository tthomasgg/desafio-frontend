import { Items } from './../../items.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {
  @Input() item: Items;

  constructor() { }

  ngOnInit() {
  }

}
