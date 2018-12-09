import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DisciplinaComponent} from './disciplina/disciplina.component';
import {ListaDeDisciplinaComponent} from './lista-de-disciplina/lista-de-disciplina.component';
import { AssuntoComponent } from './assunto/assunto.component';

import { ListaDeAssuntoComponent } from './lista-de-assunto/lista-de-assunto.component';
const APP_ROUTES: Routes =[
    {path : 'disciplina', component:DisciplinaComponent},
    {path : 'listaDeDisciplina', component:ListaDeDisciplinaComponent},
    {path : 'assunto', component:AssuntoComponent},
    
    {path : 'listaDeAssunto', component:ListaDeAssuntoComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);