import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao-output',
  templateUrl: './botao-output.component.html',
  styleUrls: ['./botao-output.component.css']
})
export class BotaoOutputComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
   this.valor++; 
   this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  constructor() { }

  ngOnInit() {
  }

}
