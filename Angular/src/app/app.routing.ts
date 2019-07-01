import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { ExtractComponent } from './views/extract/extract.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'extract',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Extrato'
    },
    children: [
      {
        path: 'extract',
        component: ExtractComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
