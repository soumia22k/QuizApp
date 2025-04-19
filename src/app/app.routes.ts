import { NgModule } from '@angular/core';

import { AccueilComponent } from './accueil/accueil.component';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }




export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', redirectTo: '' } 
];


