import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/entidades/disciplina';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-lista-de-disciplina',
  templateUrl: './lista-de-disciplina.component.html',
  styleUrls: ['./lista-de-disciplina.component.css'],
  providers: [DBService]

})
export class ListaDeDisciplinaComponent implements OnInit {
  disciplinas: Disciplina[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarDisciplinas();
   }

  ngOnInit() {
  }

  private carregarDisciplinas() {
    this.carregando = true;

    this.database.listar<Disciplina>('Disciplina')
      .then(DisciplinaDB => {
        this.disciplinas = DisciplinaDB;

        this.carregando = false;
      });
  }

  remover(uid: string) {
    this.database.remover('Disciplina', uid)
      .then(() => {
        alert('Disciplina removidA com sucesso');

        this.carregarDisciplinas();
      });
  }

  editar(Disciplina) {
    Disciplina.editando = true;
  }

  cancelEdit(Disciplina) {
    Disciplina.editando = false;
  }

  confirmEdit(Disciplina) {
    this.database.atualizar('Disciplina', Disciplina.uid, { nome: Disciplina.nome})
      .then(() => {
        alert('disciplina atualizado com sucesso');
        this.carregarDisciplinas();
      });
  }
}