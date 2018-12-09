import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing} from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ListaDeDisciplinaComponent } from './lista-de-disciplina/lista-de-disciplina.component';
import { DBService } from './servicos/db.service';

import { ListaDeAssuntoComponent } from './lista-de-assunto/lista-de-assunto.component';
import { AssuntoComponent } from './assunto/assunto.component';

@NgModule({
  declarations: [
    AppComponent,
    DisciplinaComponent,
    ListaDeDisciplinaComponent,
    
    ListaDeAssuntoComponent,
    
    AssuntoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(environment.
      firebase),
    RouterModule.forRoot([
      { path: 'disciplina', component: DisciplinaComponent },
      { path: 'listaDeDisciplinas', component: ListaDeDisciplinaComponent },
      { path: 'assunto', component: AssuntoComponent },
      { path: 'listaDeAssunto', component: ListaDeAssuntoComponent }
    ])
  ],
  providers: [AngularFireDatabase,DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
