import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemsService } from './../items.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Items } from '../items.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild('f') formulario: NgForm;

  quantidadePattern = '[0-9]';

  item: Items;

  codigo: number;
  nome: string;
  unidadeMedida: UnidadesMedida;
  quantidade: number;
  preco: number;
  cbPerecivel: boolean;
  dataValidade: Date;
  dataFabricacao: Date;

  constructor(private itemsService: ItemsService, private router: Router, private route: ActivatedRoute) { }

  onUnidadeChange(event: any) {
    switch(event.target['selectedIndex']) {
      // kilo
      case 1 : this.quantidadePattern = '[0-9]{1,}\.{0,1}[0-9]{0,3}'; break;
      // litro
      case 2 : this.quantidadePattern = '[0-9]{1,}\.{0,1}[0-9]{0,3}'; break;
      // unidade
      case 3 : this.quantidadePattern = '[0-9]{1,}'; break;
      default :
      this.quantidadePattern = '[0-9]';
    }
  }

  onCancelar() {
    this.router.navigate(['/listar'], {relativeTo: this.route});
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.item = this.itemsService.getItem(id);

    if (typeof(this.item) !== 'undefined') {
      this.codigo = this.item.codigo;
      this.nome = this.item.nome;
      this.unidadeMedida = this.item.unidadeMedida;
      this.quantidade = this.item.quantidade;
      this.preco = this.item.preco;
      this.cbPerecivel = this.item.perecivel;

      const validade = this.item.dataValidade.split('/');
      const validadeData = validade[1] + '-' + validade[0] + '-' + validade[2];

      const fabricacao = this.item.dataFabricacao.split('/');
      const fabricacaoData = fabricacao[1] + '-' + fabricacao[0] + '-' + fabricacao[2];

      this.dataValidade = new Date(validadeData);
      this.dataFabricacao = new Date(fabricacaoData);
    }

  }

  onSubmit() {
    let dataValidade = '';
    let dataFabricacao = '';
    const validade = this.formulario.value.userData.validade;
    const fabricacao = this.formulario.value.userData.fabricacao;

    if (typeof(validade) === 'object') {
      dataValidade = validade.getDate()  + '/' + (validade.getMonth() + 1) + '/' + validade.getFullYear();
    }

    dataFabricacao = fabricacao.getDate()  + '/' + (fabricacao.getMonth() + 1) + '/' + fabricacao.getFullYear();

    if (typeof(this.formulario.value.userData.codigo) === 'undefined') {
      this.itemsService.addItem(
                          new Items(
                              null,
                              this.formulario.value.userData.nome,
                              this.formulario.value.userData.unidadeMedida,
                              this.formulario.value.userData.quantidade,
                              this.formulario.value.userData.preco,
                              this.formulario.value.userData.perecivel,
                              dataValidade,
                              dataFabricacao
                            ),
                            true
      );
    } else {
      this.itemsService.updateItem(
                                new Items(
                                  this.formulario.value.userData.codigo,
                                  this.formulario.value.userData.nome,
                                  this.formulario.value.userData.unidadeMedida,
                                  this.formulario.value.userData.quantidade,
                                  this.formulario.value.userData.preco,
                                  this.formulario.value.userData.perecivel,
                                  dataValidade,
                                  dataFabricacao
                                )
        );
    }

    this.router.navigate(['/listar'], {relativeTo: this.route});
  }

}
