export class ProdutoConstructorModel {
  public nome: string;
  public preco: number;
  public quantidade?: number;
  public descricao?: string;
  public categoria_id?: number;

  constructor(data: any) {
    this.nome = data.nome;
    this.preco = data.preco;
    this.quantidade = data.quantidade;
    this.descricao = data.descricao;
    this.categoria_id = data.categoria_id;
  }
}