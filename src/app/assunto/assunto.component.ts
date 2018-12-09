import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Route, Router } from '@angular/router';
import { Assunto } from 'src/entidades/assunto';

@Component({
  selector: 'app-Assunto',
  templateUrl: './Assunto.component.html',
  styleUrls: ['./Assunto.component.css'],
  providers: [DBService]
})
export class AssuntoComponent implements OnInit { 
   novoAssunto: Assunto;
  carregando: boolean;
  constructor(private database: DBService, private router: Router) {
    this.novoAssunto = new Assunto();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.database.inserir('Assunto', this.novoAssunto)
      .then(() => {
        alert('Assunto cadastrado com sucesso');
        this.router.navigate(["lista-DeAssunto"]);
        this.novoAssunto = new Assunto();
      });
  }
}