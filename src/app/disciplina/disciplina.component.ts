import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Disciplina } from 'src/entidades/disciplina';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-Disciplina',
  templateUrl: './Disciplina.component.html',
  styleUrls: ['./Disciplina.component.css'],
  providers: [DBService]
})
export class DisciplinaComponent implements OnInit {
  novaDisciplina: Disciplina;
  carregando: boolean;
  constructor(private database: DBService, private router: Router) {
    this.novaDisciplina = new Disciplina();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.database.inserir('Disciplina', this.novaDisciplina)
      .then(() => {
        alert('Disciplina cadastrada com sucesso');
        this.router.navigate(["lista-de-disciplina"]);
        this.novaDisciplina = new Disciplina();
      });
  }
}