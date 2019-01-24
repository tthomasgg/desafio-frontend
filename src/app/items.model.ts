export class Items {

  public codigo: number;
  public nome: string;
  public unidadeMedida: UnidadesMedida;
  public quantidade: number;
  public preco: number;
  public perecivel: boolean;
  public dataValidade: string;
  public dataFabricacao: string;

  constructor(codigo: number, nome: string, unidadeMedida: UnidadesMedida, quantidade: number, preco: number,
              perecivel: boolean, dataValidade: string, dataFabricacao: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.unidadeMedida = unidadeMedida;
    this.quantidade = quantidade;
    this.preco = preco;
    this.perecivel = perecivel;
    this.dataValidade = dataValidade;
    this.dataFabricacao = dataFabricacao;
  }
}
