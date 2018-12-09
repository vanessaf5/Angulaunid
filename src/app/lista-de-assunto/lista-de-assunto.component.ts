import { Component, OnInit } from '@angular/core';
import { Assunto } from 'src/entidades/assunto';
import { DBService } from '../servicos/db.service';

@Component({
  selector: 'app-lista-de-assunto',
  templateUrl: './lista-de-assunto.component.html',
  styleUrls: ['./lista-de-assunto.component.css'],
  providers: [DBService]

})
export class ListaDeAssuntoComponent implements OnInit {
  assuntos: Assunto[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarAssuntos();
   }

  ngOnInit() {
  }

  private carregarAssuntos() {
    this.carregando = true;

    this.database.listar<Assunto>('Assunto')
      .then(AssuntoDB => {
        this.assuntos = AssuntoDB;

        this.carregando = false;
      });
  }

  remover(uid: string) {
    this.database.remover('Assunto', uid)
      .then(() => {
        alert('Assunto removido com sucesso');

        this.carregarAssuntos();
      });
  }

  editar(Assunto) {
    Assunto.editando = true;
  }

  cancelEdit(Assunto) {
    Assunto.editando = false;
  }

  confirmEdit(Assunto) {
    this.database.atualizar('Assunto', Assunto.uid, { nome: Assunto.nome, disciplina: Assunto.disciplina})
      .then(() => {
        alert('assunto atualizado com sucesso');
        this.carregarAssuntos();
      });
  }
}