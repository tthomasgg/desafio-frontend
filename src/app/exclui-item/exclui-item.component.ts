import { ItemsService } from './../items.service';
import { Items } from './../items.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-exclui-item',
  templateUrl: './exclui-item.component.html',
  styleUrls: ['./exclui-item.component.css']
})
export class ExcluiItemComponent implements OnInit {
  item: Items;
  codigoId: number;

  constructor(private itemsService: ItemsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.codigoId = id;

    this.itemsService.removeItem(id);

    this.router.navigate(['/listar'], {relativeTo: this.route});
    /*this.item = this.itemsService.getItem(id);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.item = this.itemsService.getItem(queryParams['id']);
      }
    );*/
  }

}
