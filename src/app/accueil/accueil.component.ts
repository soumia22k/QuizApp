import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  categories: any[] = [];
  selectedCategory = '';
  selectedDifficulty = '';
  amount = 10;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.quizService.getCategories().subscribe({
      next: (data) => this.categories = data.trivia_categories,
      error: (err) => console.error('Erreur chargement catégories', err)
    });
  }

  startQuiz() {
    this.router.navigate(['/quiz'], {
      state: {
        category: this.selectedCategory,
        difficulty: this.selectedDifficulty,
        amount: this.amount
      }
    });
  }
}