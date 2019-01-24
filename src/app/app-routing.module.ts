import { ExcluiItemComponent } from './exclui-item/exclui-item.component';
import { ListarComponent } from './listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'excluir/:id', component: ExcluiItemComponent },
  { path: 'editar/:id', component: FormularioComponent },
  { path: 'adicionar', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
