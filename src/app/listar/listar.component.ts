import { ItemsService } from './../items.service';
import { Items } from './../items.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  items: Items[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

}
