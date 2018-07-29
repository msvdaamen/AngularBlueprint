import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TempComponent } from '@pages/temp/temp.component';

const routes: Routes = [
  { path: '', component: TempComponent },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
