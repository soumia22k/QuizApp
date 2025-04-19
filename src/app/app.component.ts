import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from "./accueil/accueil.component";
import { HistoriqueComponent } from './historique/historique.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FormsModule,
    CommonModule,
    AccueilComponent,
    HistoriqueComponent,
    QuizComponent,
    HttpClientModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quiz-app';
}

